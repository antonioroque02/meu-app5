import { Link } from 'react-router-dom'

function Sidebar({ categories, activeCategory, onSelectCategory, apiData, loading, error }) {
  return (
    <aside className="grid">
      <div className="card">
        <h3>Categorias</h3>
        <div className="grid">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`category-badge ${activeCategory === category ? 'active' : ''}`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="card api-card">
        <h3>API em destaque</h3>
        {loading && <p>Carregando repositórios...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <ul className="content-list">
            {apiData.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong>
                <p>{item.description}</p>
                <Link to="/" className="secondary-btn" style={{ marginTop: '0.4rem' }}>
                  Ver mais
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  )
}

export default Sidebar
