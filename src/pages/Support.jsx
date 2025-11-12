import './Support.css'
import { QuestionIcon, MailIcon, LightningIcon, AcademicCapIcon } from '../components/Icons'

function Support() {
  return (
    <div className="support">
      <section className="support-hero">
        <div className="container">
          <QuestionIcon className="hero-icon" />
          <h1>Soporte y Ayuda</h1>
          <p>Encuentra respuestas a preguntas comunes y obtén ayuda con BibleNames</p>
        </div>
      </section>

      <section className="support-content">
        <div className="container">
          <div className="support-section">
            <div className="section-header">
              <QuestionIcon className="section-icon" />
              <h2>Preguntas Frecuentes</h2>
            </div>

            <div className="faq-item">
              <h3>¿Cómo funciona la función de deslizar?</h3>
              <p>
                Desliza a la derecha en los nombres que te gustan y a la izquierda en los que no.
                La aplicación aprende de tus elecciones y te muestra más nombres que coinciden con tus preferencias.
                ¡Mientras más deslizas, mejores se vuelven las recomendaciones!
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Cuántos nombres están disponibles?</h3>
              <p>
                BibleNames presenta cientos de nombres bíblicos cuidadosamente seleccionados tanto para
                niños como para niñas. Cada nombre incluye información detallada sobre su significado,
                origen y relevancia bíblica para ayudarte a tomar una decisión informada.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Cómo funcionan las recomendaciones personalizadas?</h3>
              <p>
                Nuestro motor de recomendaciones impulsado por IA analiza tus "me gusta" y "no me gusta" para
                entender tus preferencias de nombres. Considera factores como la longitud del nombre,
                patrones de sonido y orígenes para sugerir nombres que probablemente amarás.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Puedo filtrar nombres por género?</h3>
              <p>
                ¡Sí! Puedes filtrar fácilmente los nombres para mostrar solo nombres de niño, de niña o ambos.
                Esto te ayuda a enfocarte en nombres que son relevantes para tu bebé.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Cómo guardo mis nombres favoritos?</h3>
              <p>
                Cuando deslizas a la derecha en un nombre, se guarda automáticamente en tus favoritos.
                Puedes ver todos tus nombres que te gustan en la sección de Favoritos y compartir tu
                lista con tu pareja o familia.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Mis datos son privados?</h3>
              <p>
                ¡Absolutamente! Tus preferencias de nombres se almacenan de forma segura y privada. Nunca
                compartimos tus datos con terceros, y no hay anuncios en la aplicación. Tu
                viaje de elección de nombre para tu bebé es completamente personal y privado.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Puedo usar la aplicación con mi pareja?</h3>
              <p>
                ¡Sí! Puedes crear una cuenta y tanto tú como tu pareja pueden deslizar sobre
                nombres. Vean los favoritos del otro para encontrar nombres que ambos amen y tomar la
                decisión juntos.
              </p>
            </div>
          </div>

          <div className="support-section">
            <div className="section-header">
              <LightningIcon className="section-icon" />
              <h2>Primeros Pasos</h2>
            </div>
            <ol className="guide-list">
              <li>
                <strong>Descarga BibleNames</strong> desde la App Store
              </li>
              <li>
                <strong>Crea tu cuenta</strong> para guardar tus preferencias
              </li>
              <li>
                <strong>Establece tu preferencia de género</strong> (niño, niña o ambos)
              </li>
              <li>
                <strong>¡Comienza a deslizar!</strong> A la derecha para nombres que amas, a la izquierda para los que no
              </li>
              <li>
                <strong>Revisa tus favoritos</strong> y comparte tu lista con tu pareja
              </li>
            </ol>
          </div>

          <div className="support-section">
            <div className="section-header">
              <MailIcon className="section-icon" />
              <h2>Contáctanos</h2>
            </div>
            <p>
              ¿No encuentras la respuesta que buscas? ¡Estamos aquí para ayudarte!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <MailIcon className="contact-icon" />
                <h4>Soporte por Email</h4>
                <p>
                  <a href="mailto:krakendevgt@gmail.com">krakendevgt@gmail.com</a>
                </p>
                <p className="contact-note">
                  Típicamente respondemos dentro de 24-48 horas
                </p>
              </div>
            </div>
          </div>

          <div className="support-section">
            <div className="section-header">
              <QuestionIcon className="section-icon" />
              <h2>Reportar un Problema</h2>
            </div>
            <p>
              Si encuentras algún problema con la aplicación, por favor envíanos un email a{' '}
              <a href="mailto:krakendevgt@gmail.com">krakendevgt@gmail.com</a> con:
            </p>
            <ul className="report-list">
              <li>Una descripción del problema</li>
              <li>El modelo de tu dispositivo y versión de iOS</li>
              <li>Pasos para reproducir el problema (si aplica)</li>
              <li>Capturas de pantalla (si es relevante)</li>
            </ul>
          </div>

          <div className="support-section">
            <div className="section-header">
              <AcademicCapIcon className="section-icon" />
              <h2>Solicitudes de Funcionalidades</h2>
            </div>
            <p>
              ¡Nos encantaría escuchar tus ideas! Si tienes sugerencias de nuevos nombres para agregar,
              funcionalidades que te gustaría ver, o formas en que podemos mejorar tu experiencia, por favor
              envíanos un email a{' '}
              <a href="mailto:krakendevgt@gmail.com">krakendevgt@gmail.com</a>.
              Leemos cada mensaje y valoramos tus comentarios mientras continuamos haciendo
              BibleNames mejor para padres que esperan un bebé.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Support
