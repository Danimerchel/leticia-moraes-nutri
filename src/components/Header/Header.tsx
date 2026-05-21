/// <reference types="react" />
import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img className="header-logo" src="/logo.png" alt="Logo Letícia Moraes Nutricionista" />

        <nav className="header-nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#servicos">Serviços</a>
          <a href="#duvidas">Dúvidas frequentes</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="header-button" href="#">
          Agendar consulta
        </a>
      </div>
    </header>
  )
}
