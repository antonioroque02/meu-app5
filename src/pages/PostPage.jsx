import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import posts from '../data/posts'

function PostPage() {
  const { slug } = useParams()
  const [comments, setComments] = useState([])
  const [form, setForm] = useState({ name: '', message: '' })

  const post = useMemo(() => posts.find((item) => item.slug === slug), [slug])

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(`comments-${slug}`) || '[]')
    setComments(storedComments)
  }, [slug])

  if (!post) {
    return <div className="card">Artigo não encontrado.</div>
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.message) return

    const newComment = {
      id: Date.now(),
      name: form.name,
      message: form.message
    }

    const nextComments = [newComment, ...comments]
    setComments(nextComments)
    localStorage.setItem(`comments-${slug}`, JSON.stringify(nextComments))
    setForm({ name: '', message: '' })
  }

  return (
    <article className="page">
      <div className="card">
        <Link to="/" className="secondary-btn" style={{ marginBottom: '1rem' }}>
          ← Voltar para home
        </Link>
        <span className="category-badge">{post.category}</span>
        <h1>{post.title}</h1>
        <p className="meta">
          {post.date} • por {post.author}
        </p>
        {post.content.map((paragraph) => (
          <p key={paragraph} style={{ marginBottom: '0.8rem' }}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="card">
        <h2>Comentários</h2>
        <form className="comment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Seu nome</label>
            <input id="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" rows="4" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
          </div>
          <button type="submit" className="submit-btn">
            Publicar comentário
          </button>
        </form>

        <div className="grid" style={{ marginTop: '1rem' }}>
          {comments.length === 0 ? (
            <p>Nenhum comentário ainda. Seja o primeiro!</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="comment-card card">
                <strong>{comment.name}</strong>
                <p>{comment.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </article>
  )
}

export default PostPage
