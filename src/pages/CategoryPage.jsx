import { Link, useParams } from 'react-router-dom'
import PostCard from '../components/PostCard'
import posts from '../data/posts'

function CategoryPage() {
  const { category } = useParams()
  const filteredPosts = posts.filter((post) => post.category === decodeURIComponent(category))

  return (
    <div className="page">
      <div className="card">
        <Link to="/" className="secondary-btn" style={{ marginBottom: '1rem' }}>
          ← Voltar para home
        </Link>
        <h1>Categoria: {decodeURIComponent(category)}</h1>
        <p>Artigos relacionados à categoria escolhida.</p>
      </div>

      <div className="grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <div className="card">
            <h2>Nenhum conteúdo encontrado</h2>
            <p>Volte para a página inicial e explore outros temas.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryPage
