import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BibleNames</h3>
            <p>Descubre el significado y origen de nombres bíblicos</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/support">Soporte</Link></li>
              <li><Link to="/terms">Términos y Privacidad</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>Email: krakendevgt@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} BibleNames. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
