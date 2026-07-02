import { Link } from 'react-router-dom'

function PostCard({ post }) {
  return (
    <article className="card">
      <img src={post.image} alt={post.title} className="card-image" loading="lazy" />
      <span className="category-badge">{post.category}</span>
      <h2>{post.title}</h2>
      <p className="meta">
        {post.date} • por {post.author}
      </p>
      <p>{post.excerpt}</p>
      <div style={{ marginTop: '0.8rem' }}>
        {post.tags.map((tag) => (
          <span key={tag} className="category-badge">
            #{tag}
          </span>
        ))}
      </div>
      <Link to={`/post/${post.slug}`} className="primary-btn" style={{ marginTop: '1rem' }}>
        Ler artigo
      </Link>
    </article>
  )
}

export default PostCard
