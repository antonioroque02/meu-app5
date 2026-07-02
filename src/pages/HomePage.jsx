import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PostCard from '../components/PostCard'
import Sidebar from '../components/Sidebar'
import posts from '../data/posts'

const POSTS_PER_PAGE = 2

function HomePage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todas')
  const [page, setPage] = useState(1)
  const [apiData, setApiData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const controller = new AbortController()

    fetch('https://api.github.com/users/octocat/repos?per_page=3', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Não foi possível carregar os dados da API.')
        }

        return response.json()
      })
      .then((data) => {
        setApiData(data)
        setLoading(false)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError('Erro ao carregar a API pública.')
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [])

  const filteredPosts = useMemo(() => {
    const term = search.toLowerCase()
    return posts.filter((post) => {
      const matchesCategory = category === 'Todas' || post.category === category
      const matchesSearch =
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.tags.some((tag) => tag.toLowerCase().includes(term))

      return matchesCategory && matchesSearch
    })
  }, [category, search])

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const visiblePosts = filteredPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)

  useEffect(() => {
    setPage(1)
  }, [category, search])

  const categories = ['Todas', ...new Set(posts.map((post) => post.category))]

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <div>
            <h1>Blog de Computação-Antonio</h1>
            <p>
              A computação no Brasil cresce com força em áreas como desenvolvimento web, inteligência artificial,
              dados e educação. Este blog reúne ideias, tendências e reflexões sobre tecnologia em um país em
              transformação.
            </p>
          </div>
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
            alt="Pessoa trabalhando com tecnologia"
          />
        </div>
      </section>

      <div className="toolbar">
        <input
          className="search-bar"
          type="search"
          placeholder="Buscar por palavra-chave"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="button" className="secondary-btn" onClick={() => navigate('/sobre')}>
          Conheça o autor
        </button>
      </div>

      <div className="posts-grid">
        <section>
          <div className="grid">
            {visiblePosts.length > 0 ? (
              visiblePosts.map((post) => <PostCard key={post.id} post={post} />)
            ) : (
              <div className="card">
                <h2>Nenhum artigo encontrado</h2>
                <p>Tente outra palavra ou categoria.</p>
              </div>
            )}
          </div>

          <div className="pagination" aria-label="Paginação">
            <button type="button" disabled={currentPage === 1} onClick={() => setPage((value) => value - 1)}>
              Anterior
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                type="button"
                className={currentPage === index + 1 ? 'primary-btn' : ''}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button type="button" disabled={currentPage === totalPages} onClick={() => setPage((value) => value + 1)}>
              Próximo
            </button>
          </div>
        </section>

        <Sidebar
          categories={categories}
          activeCategory={category}
          onSelectCategory={setCategory}
          apiData={apiData}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default HomePage
