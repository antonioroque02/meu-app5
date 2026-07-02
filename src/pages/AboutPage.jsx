import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <div className="page">
      <div className="card">
        <Link to="/" className="secondary-btn" style={{ marginBottom: '1rem' }}>
          ← Voltar para home
        </Link>
        <h1>Sobre o autor</h1>
        <p>
          Antonio Roque é um estudante da disciplina de Desenvolvimento de Software I na UFRB, apaixonado por tecnologia que acredita no poder da computação para
          transformar a vida das pessoas e impulsionar a inovação no Brasil. Essa atividade foi desenvolvida como requisisto da disciplina, com o objetivo 
          de aplicar os conhecimentos adquiridos em React e desenvolvimento web.
        </p>
        <p style={{ marginTop: '0.8rem' }}>
          Este blog reúne conteúdos sobre desenvolvimento web, inteligência artificial, dados e boas práticas de
          programação, com foco em aprender, compartilhar conhecimento e inspirar novas ideias.
        </p>
      </div>

      <div className="card">
        <h2>Por que esse projeto?</h2>
        <ul className="content-list">
          <li>Explorar React com componentes reutilizáveis.</li>
          <li>Aplicar roteamento, estado e integração com API pública.</li>
          <li>Construir uma experiência moderna e responsiva para o público.</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPage
