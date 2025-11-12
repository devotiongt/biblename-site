import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <h1>BibleNames</h1>
          </Link>
          <ul className="nav-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/support">Soporte</Link></li>
            <li><Link to="/terms">Términos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
