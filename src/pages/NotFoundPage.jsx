import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="card">
      <h1>404</h1>
      <p>A página que você procura não existe.</p>
      <Link to="/" className="primary-btn" style={{ marginTop: '1rem' }}>
        Voltar para a home
      </Link>
    </div>
  )
}

export default NotFoundPage
