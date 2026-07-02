import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function Layout({ children }) {
  const { theme, setTheme } = useTheme()

  return (
    <div className={`app-shell ${theme === 'dark' ? 'dark' : ''}`}>
      <header className="header">
        <NavLink to="/" className="brand">
          Blog Computação de Antonio Roque - UFRB
        </NavLink>

        <nav className="nav-links" aria-label="Navegação principal">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <button
            type="button"
            className="theme-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? '☀️ Claro' : '🌙 Escuro'}
          </button>
        </nav>
      </header>

      <main>
        <div className="container">{children}</div>
      </main>

      <footer className="footer">
        <p>Projeto de blog desenvolvido em React com foco em computação,
             tecnologia e inovação. É uma atividade da disciplina de Desenvolvimento de Software I, da UFRB.</p>
      </footer>
    </div>
  )
}

export default Layout
