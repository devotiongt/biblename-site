import './Terms.css'
import { DocumentIcon, ShieldIcon } from '../components/Icons'

function Terms() {
  return (
    <div className="terms">
      <section className="terms-hero">
        <div className="container">
          <DocumentIcon className="hero-icon" />
          <h1>Términos y Política de Privacidad</h1>
          <p>Última actualización: 12 de noviembre de 2025</p>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">
          <div className="terms-section">
            <div className="section-header">
              <DocumentIcon className="section-icon" />
              <h2>Términos de Servicio</h2>
            </div>

            <h3>1. Aceptación de Términos</h3>
            <p>
              Al descargar, instalar o usar la aplicación móvil BibleNames
              ("la Aplicación"), aceptas estar sujeto a estos Términos de Servicio. Si no
              estás de acuerdo con estos términos, por favor no uses la Aplicación.
            </p>

            <h3>2. Descripción del Servicio</h3>
            <p>
              BibleNames es una aplicación móvil diseñada para ayudar a los padres que esperan un bebé a descubrir
              y elegir nombres bíblicos para sus bebés. La Aplicación proporciona una interfaz basada en
              deslizamiento con recomendaciones personalizadas, información detallada de nombres incluyendo
              significados y orígenes, y la capacidad de guardar nombres favoritos.
            </p>

            <h3>3. Licencia de Uso</h3>
            <p>
              Te otorgamos una licencia personal, no transferible y no exclusiva para usar
              la Aplicación en tu dispositivo iOS. Esta licencia no te permite:
            </p>
            <ul>
              <li>Modificar o copiar los materiales de la Aplicación</li>
              <li>Usar los materiales para cualquier propósito comercial</li>
              <li>Intentar realizar ingeniería inversa del software contenido en la Aplicación</li>
              <li>Eliminar cualquier notación de derechos de autor o propiedad de los materiales</li>
            </ul>

            <h3>4. Descargo de Responsabilidad</h3>
            <p>
              La información proporcionada en BibleNames, incluyendo significados de nombres, orígenes y
              referencias bíblicas, es con fines informativos para asistir en el proceso de nombrar al bebé.
              Aunque investigamos y verificamos cuidadosamente todo el contenido, las interpretaciones de
              los significados de nombres pueden variar entre diferentes fuentes. La Aplicación y su contenido se
              proporcionan "tal cual" sin garantías de ningún tipo.
            </p>

            <h3>5. Limitaciones</h3>
            <p>
              En ningún caso BibleNames o sus desarrolladores serán responsables de ningún daño
              derivado del uso o la imposibilidad de usar la Aplicación, incluso si hemos sido
              notificados de la posibilidad de tales daños.
            </p>

            <h3>6. Modificaciones</h3>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuado de
              la Aplicación después de los cambios constituye la aceptación de los términos modificados.
            </p>

            <h3>7. Ley Aplicable</h3>
            <p>
              Estos términos se regirán e interpretarán de acuerdo con las leyes
              de la jurisdicción en la que se encuentra el desarrollador, sin tener en cuenta
              sus disposiciones sobre conflictos de leyes.
            </p>
          </div>

          <div className="terms-section">
            <div className="section-header">
              <ShieldIcon className="section-icon" />
              <h2>Política de Privacidad</h2>
            </div>

            <h3>1. Información que Recopilamos</h3>
            <p>
              BibleNames está diseñada pensando en tu privacidad. Recopilamos solo la información mínima
              necesaria para proporcionar nuestro servicio:
            </p>
            <ul>
              <li>Información de cuenta (email) para propósitos de autenticación</li>
              <li>Tus preferencias de nombres (nombres que te gustan/no te gustan) para proporcionar recomendaciones personalizadas</li>
              <li>Preferencias de filtro de género para mostrar nombres relevantes</li>
            </ul>
            <p>
              No recopilamos ninguna otra información personal sobre ti, tu embarazo
              o tu familia.
            </p>

            <h3>2. Almacenamiento de Datos</h3>
            <p>
              Tus datos se almacenan de forma segura usando Firebase, una plataforma de nube confiable:
            </p>
            <ul>
              <li>Tus credenciales de cuenta están encriptadas y seguras</li>
              <li>Tus preferencias de nombres (me gusta/no me gusta) se almacenan en tu cuenta privada</li>
              <li>Caché local para un rendimiento más rápido cuando estés sin conexión</li>
            </ul>
            <p>
              Utilizamos medidas de seguridad estándar de la industria para proteger tus datos.
            </p>

            <h3>3. Análisis y Rastreo</h3>
            <p>
              No utilizamos ningún servicio de análisis, herramientas de rastreo o redes
              publicitarias. Tu uso de la Aplicación es completamente privado.
            </p>

            <h3>4. Servicios de Terceros</h3>
            <p>
              BibleNames utiliza Firebase (Google) para autenticación y almacenamiento de datos. Firebase
              cumple con las principales regulaciones de privacidad incluyendo GDPR. No compartimos tus
              datos con ningún otro tercero. No se utilizan redes publicitarias ni servicios de análisis
              en la aplicación.
            </p>

            <h3>5. Privacidad de Menores</h3>
            <p>
              Dado que no recopilamos ninguna información personal, la Aplicación es segura para
              usuarios de todas las edades, incluyendo menores de 13 años.
            </p>

            <h3>6. Seguridad de Datos</h3>
            <p>
              Dado que todos los datos se almacenan localmente en tu dispositivo, la seguridad de tu
              información está protegida por las medidas de seguridad de tu dispositivo (código de acceso,
              Face ID, Touch ID, etc.).
            </p>

            <h3>7. Tus Derechos</h3>
            <p>
              Tienes control completo sobre tus datos:
            </p>
            <ul>
              <li>Eliminar tu cuenta y todos los datos asociados en cualquier momento</li>
              <li>Borrar tus preferencias y empezar de nuevo dentro de la Aplicación</li>
              <li>Solicitar una copia de tus datos contactando a soporte</li>
              <li>Optar por no recibir recomendaciones personalizadas y usar el modo de exploración</li>
            </ul>

            <h3>8. Cambios a la Política de Privacidad</h3>
            <p>
              Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos de
              cualquier cambio actualizando la fecha de "Última actualización" en la parte superior de esta política.
              El uso continuado de la Aplicación después de los cambios constituye la aceptación de la
              política actualizada.
            </p>

            <h3>9. Información de Contacto</h3>
            <p>
              Si tienes alguna pregunta sobre estos Términos o nuestra Política de Privacidad, por favor
              contáctanos en:{' '}
              <a href="mailto:krakendevgt@gmail.com">krakendevgt@gmail.com</a>
            </p>
          </div>

          <div className="terms-section">
            <h2>Cumplimiento de las Directrices de App Store</h2>
            <p>
              BibleNames está diseñada para cumplir con todas las directrices de Apple App Store.
              La Aplicación:
            </p>
            <ul>
              <li>No contiene ningún contenido inapropiado u ofensivo</li>
              <li>Respeta la privacidad del usuario y no recopila datos personales</li>
              <li>Proporciona información precisa sobre su funcionalidad</li>
              <li>No incluye ninguna característica o funcionalidad oculta</li>
              <li>Cumple con todas las leyes y regulaciones aplicables</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>Propiedad Intelectual</h2>
            <p>
              Todo el contenido dentro de la aplicación BibleNames, incluyendo pero no limitado a texto,
              gráficos, logotipos y software, es propiedad de BibleNames o sus proveedores de contenido
              y está protegido por derechos de autor y leyes de propiedad intelectual.
            </p>
          </div>

          <div className="terms-section">
            <h2>Descargo de Responsabilidad de Contenido</h2>
            <p>
              La información de nombres bíblicos proporcionada en esta Aplicación está compilada de varias
              fuentes históricas, lingüísticas y bíblicas. Aunque hacemos todo lo posible para garantizar
              la precisión, las interpretaciones de los significados y orígenes de los nombres pueden variar entre diferentes
              fuentes académicas. BibleNames está destinada a asistir en el proceso de nombrar al bebé
              y debe ser uno de varios recursos que consultes al elegir un nombre para tu
              hijo. Te animamos a investigar nombres de múltiples fuentes y consultar con
              tu familia, asesores religiosos o expertos culturales según corresponda.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms
