import './Home.css'
import { BookIcon, SearchIcon, HeartIcon, GlobeIcon, SparklesIcon, ShieldIcon, CloudDownloadIcon, DevicePhoneIcon } from '../components/Icons'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <SparklesIcon className="badge-icon" />
              <span>Encuentra el Nombre Perfecto</span>
            </div>
            <h1>Nombres Bíblicos para Bebés - Descubre el Nombre Perfecto</h1>
            <p className="hero-subtitle">
              Explora más de 1,000 nombres bíblicos con significados y orígenes. Encuentra nombres para niño y niña con recomendaciones personalizadas por IA. La mejor app para elegir el nombre de tu bebé.
            </p>
            <div className="hero-buttons">
              <a href="https://apps.apple.com/gt/app/biblenames/id6755162975?l=en-GB" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <CloudDownloadIcon className="btn-icon" />
                Descargar en App Store
              </a>
              <a href="#features" className="btn btn-secondary">
                Conocer Más
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>1,000+</strong>
                <span>Nombres Bíblicos</span>
              </div>
              <div className="stat">
                <strong>2</strong>
                <span>Idiomas</span>
              </div>
              <div className="stat">
                <strong>100%</strong>
                <span>Gratis</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="phone-mockup-real">
              <img
                src="/app-screenshot.png"
                alt="BibleNames App Screenshot"
                className="app-screenshot"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <div className="features-header">
            <h2 className="section-title">Cómo Funciona</h2>
            <p className="section-subtitle">
              Encontrar el nombre bíblico perfecto para tu bebé nunca ha sido tan fácil
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <SparklesIcon />
              </div>
              <h3>Desliza y Descubre</h3>
              <p>Desliza a la derecha en los nombres que te gustan, a la izquierda en los que no. Nuestro algoritmo inteligente aprende tus preferencias para mostrarte más nombres que amarás</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <SearchIcon />
              </div>
              <h3>Recomendaciones Personalizadas</h3>
              <p>Obtén sugerencias de nombres impulsadas por IA basadas en tus gustos. Mientras más deslizas, mejores se vuelven las recomendaciones</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <BookIcon />
              </div>
              <h3>Información Bíblica Completa</h3>
              <p>Aprende el significado, origen y relevancia bíblica de cada nombre para ayudarte a tomar una decisión informada</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <HeartIcon />
              </div>
              <h3>Guarda tus Favoritos</h3>
              <p>Crea una colección de nombres que te encantan y compártelos con tu pareja para tomar la decisión final juntos</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <GlobeIcon />
              </div>
              <h3>Nombres de Niño y Niña</h3>
              <p>Filtra por género para encontrar el nombre perfecto para tu bebé, con cientos de opciones para explorar</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <ShieldIcon />
              </div>
              <h3>Privado y Seguro</h3>
              <p>Tus elecciones de nombres son personales. Nunca compartimos tus datos ni mostramos anuncios, manteniendo tu experiencia pura y sin distracciones</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <div className="about-icon">
                <BookIcon />
              </div>
              <h2>Acerca de BibleNames</h2>
              <p>
                BibleNames hace que elegir un nombre bíblico para tu bebé sea divertido y significativo.
                Nuestra aplicación combina la sabiduría antigua con tecnología moderna, ofreciéndote una
                experiencia personalizada a través de una interfaz intuitiva de deslizamiento.
              </p>
              <p>
                Ya sea que estés esperando tu primer hijo o añadiendo a tu familia en crecimiento,
                BibleNames te ayuda a descubrir nombres que llevan un profundo significado espiritual
                y belleza atemporal. Con significados detallados, orígenes e historias bíblicas
                para cada nombre, encontrarás el nombre perfecto que resuena con tu fe
                y valores.
              </p>
            </div>
            <div className="about-image">
              <img
                src="/app-screenshot.png"
                alt="Interfaz de la App BibleNames"
                className="about-screenshot"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <CloudDownloadIcon className="cta-icon" />
            <h2>¿Listo para Encontrar el Nombre Perfecto?</h2>
            <p>Únete a miles de padres que descubren nombres bíblicos significativos para sus bebés</p>
            <a href="https://apps.apple.com/gt/app/biblenames/id6755162975?l=en-GB" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              <CloudDownloadIcon className="btn-icon" />
              Descargar Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
