import beans from '../assets/coffee-beans.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo" aria-label="Coffee Shop Home">
          <img src={beans} alt="Coffee beans" />
          <span>Brew & Bean</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
