import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      // Header
      nav: {
        home: 'Home',
        support: 'Support',
        terms: 'Terms'
      },

      // Home Page
      home: {
        badge: 'Find the Perfect Name',
        title: 'Biblical Baby Names - Discover the Perfect Name',
        subtitle: 'Explore over 1,000 biblical names with meanings and origins. Find names for boys and girls with AI-powered personalized recommendations. The best app to choose your baby\'s name.',
        downloadBtn: 'Download on App Store',
        learnMore: 'Learn More',
        stats: {
          names: 'Biblical Names',
          languages: 'Languages',
          free: 'Free'
        },
        howItWorks: {
          title: 'How It Works',
          subtitle: 'Finding the perfect biblical name for your baby has never been easier',
          swipe: {
            title: 'Swipe & Discover',
            text: 'Swipe right on names you love, left on ones you don\'t. Our smart algorithm learns your preferences to show you more names you\'ll love'
          },
          recommendations: {
            title: 'Personalized Recommendations',
            text: 'Get AI-powered name suggestions based on your likes. The more you swipe, the better the recommendations become'
          },
          information: {
            title: 'Complete Biblical Information',
            text: 'Learn the meaning, origin and biblical significance of each name to help you make an informed choice'
          },
          favorites: {
            title: 'Save Your Favorites',
            text: 'Create a collection of names you love and share them with your partner to make the final decision together'
          },
          gender: {
            title: 'Boy & Girl Names',
            text: 'Filter by gender to find the perfect name for your baby, with hundreds of options to explore'
          },
          privacy: {
            title: 'Private & Secure',
            text: 'Your name choices are personal. We never share your data or show ads, keeping your experience pure and distraction-free'
          }
        },
        about: {
          title: 'About BibleNames',
          text1: 'BibleNames makes choosing a biblical name for your baby fun and meaningful. Our app combines ancient wisdom with modern technology, offering you a personalized experience through an intuitive swipe interface.',
          text2: 'Whether you\'re expecting your first child or adding to your growing family, BibleNames helps you discover names that carry deep spiritual significance and timeless beauty. With detailed meanings, origins and biblical stories for each name, you\'ll find the perfect name that resonates with your faith and values.'
        },
        cta: {
          title: 'Ready to Find the Perfect Name?',
          subtitle: 'Join thousands of parents discovering meaningful biblical names for their babies',
          downloadBtn: 'Download Now'
        }
      },

      // Support Page
      support: {
        title: 'Support & Help',
        subtitle: 'Find answers to common questions and get help with BibleNames',
        faq: {
          title: 'Frequently Asked Questions',
          q1: {
            question: 'How does the swipe feature work?',
            answer: 'Swipe right on names you like and left on ones you don\'t. The app learns from your choices and shows you more names that match your preferences. The more you swipe, the better the recommendations become!'
          },
          q2: {
            question: 'How many names are available?',
            answer: 'BibleNames features hundreds of carefully curated biblical names for both boys and girls. Each name includes detailed information about its meaning, origin, and biblical significance to help you make an informed choice.'
          },
          q3: {
            question: 'How do personalized recommendations work?',
            answer: 'Our AI-powered recommendation engine analyzes your likes and dislikes to understand your naming preferences. It considers factors like name length, sound patterns, and origins to suggest names you\'re most likely to love.'
          },
          q4: {
            question: 'Can I filter names by gender?',
            answer: 'Yes! You can easily filter names to show only boy names, girl names, or both. This helps you focus on names that are relevant for your baby.'
          },
          q5: {
            question: 'How do I save my favorite names?',
            answer: 'When you swipe right on a name, it\'s automatically saved to your favorites. You can view all your liked names in the Favorites section and share your list with your partner or family.'
          },
          q6: {
            question: 'Is my data private?',
            answer: 'Absolutely! Your name preferences are stored securely and privately. We never share your data with third parties, and there are no ads in the app. Your baby name journey is completely personal and private.'
          },
          q7: {
            question: 'Can I use the app with my partner?',
            answer: 'Yes! You can create an account and both you and your partner can swipe on names. View each other\'s favorites to find names you both love and make the decision together.'
          }
        },
        gettingStarted: {
          title: 'Getting Started',
          step1: 'Download BibleNames from the App Store',
          step2: 'Create your account to save your preferences',
          step3: 'Set your gender preference (boy, girl, or both)',
          step4: 'Start swiping! Right for names you love, left for ones you don\'t',
          step5: 'Review your favorites and share your list with your partner'
        },
        contact: {
          title: 'Contact Us',
          text: 'Can\'t find the answer you\'re looking for? We\'re here to help!',
          emailSupport: 'Email Support',
          responseTime: 'We typically respond within 24-48 hours'
        },
        reportProblem: {
          title: 'Report a Problem',
          text: 'If you encounter any issues with the app, please email us at',
          with: 'with:',
          item1: 'A description of the problem',
          item2: 'Your device model and iOS version',
          item3: 'Steps to reproduce the issue (if applicable)',
          item4: 'Screenshots (if relevant)'
        },
        featureRequests: {
          title: 'Feature Requests',
          text: 'We\'d love to hear your ideas! If you have suggestions for new names to add, features you\'d like to see, or ways we can improve your experience, please email us at',
          text2: 'We read every message and value your feedback as we continue to make BibleNames better for expecting parents.'
        }
      },

      // Terms Page
      terms: {
        title: 'Terms & Privacy Policy',
        lastUpdated: 'Last Updated: November 12, 2025',
        tos: {
          title: 'Terms of Service',
          section1: {
            title: '1. Acceptance of Terms',
            text: 'By downloading, installing, or using the BibleNames mobile application ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.'
          },
          section2: {
            title: '2. Description of Service',
            text: 'BibleNames is a mobile application designed to help expecting parents discover and choose biblical names for their babies. The App provides a swipe-based interface with personalized recommendations, detailed name information including meanings and origins, and the ability to save favorite names.'
          },
          section3: {
            title: '3. Use License',
            text: 'We grant you a personal, non-transferable, non-exclusive license to use the App on your iOS device. This license does not allow you to:',
            items: [
              'Modify or copy the App materials',
              'Use the materials for any commercial purpose',
              'Attempt to reverse engineer any software contained in the App',
              'Remove any copyright or proprietary notations from the materials'
            ]
          },
          section4: {
            title: '4. Disclaimer',
            text: 'The information provided in BibleNames, including name meanings, origins, and biblical references, is for informational purposes to assist in the baby naming process. While we carefully research and verify all content, interpretations of name meanings may vary among different sources. The App and its content are provided "as is" without any warranties of any kind.'
          },
          section5: {
            title: '5. Limitations',
            text: 'In no event shall BibleNames or its developers be liable for any damages arising out of the use or inability to use the App, even if we have been notified of the possibility of such damages.'
          },
          section6: {
            title: '6. Modifications',
            text: 'We reserve the right to modify these terms at any time. Continued use of the App after changes constitutes acceptance of the modified terms.'
          },
          section7: {
            title: '7. Governing Law',
            text: 'These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the developer is located, without regard to its conflict of law provisions.'
          }
        },
        privacy: {
          title: 'Privacy Policy',
          section1: {
            title: '1. Information We Collect',
            text: 'BibleNames is designed with your privacy in mind. We collect only the minimum information necessary to provide our service:',
            items: [
              'Account information (email) for authentication purposes',
              'Your name preferences (liked/disliked names) to provide personalized recommendations',
              'Gender filter preferences to show relevant names'
            ],
            note: 'We do not collect any other personal information about you, your pregnancy, or your family.'
          },
          section2: {
            title: '2. Data Storage',
            text: 'Your data is stored securely using Firebase, a trusted cloud platform:',
            items: [
              'Your account credentials are encrypted and secure',
              'Your name preferences (likes/dislikes) are stored in your private account',
              'Local caching for faster performance when offline'
            ],
            note: 'We use industry-standard security measures to protect your data.'
          },
          section3: {
            title: '3. Analytics and Tracking',
            text: 'We do not use any analytics services, tracking tools, or advertising networks. Your usage of the App is completely private.'
          },
          section4: {
            title: '4. Third-Party Services',
            text: 'BibleNames uses Firebase (Google) for authentication and data storage. Firebase is compliant with major privacy regulations including GDPR. We do not share your data with any other third parties. No advertising networks or analytics services are used in the app.'
          },
          section5: {
            title: '5. Children\'s Privacy',
            text: 'Because we do not collect any personal information, the App is safe for users of all ages, including children under 13.'
          },
          section6: {
            title: '6. Data Security',
            text: 'Since all data is stored locally on your device, the security of your information is protected by your device\'s security measures (passcode, Face ID, Touch ID, etc.).'
          },
          section7: {
            title: '7. Your Rights',
            text: 'You have complete control over your data:',
            items: [
              'Delete your account and all associated data at any time',
              'Clear your preferences and start fresh within the App',
              'Request a copy of your data by contacting support',
              'Opt out of personalized recommendations and use browse mode'
            ]
          },
          section8: {
            title: '8. Changes to Privacy Policy',
            text: 'We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date at the top of this policy. Continued use of the App after changes constitutes acceptance of the updated policy.'
          },
          section9: {
            title: '9. Contact Information',
            text: 'If you have any questions about these Terms or our Privacy Policy, please contact us at:'
          }
        },
        appStore: {
          title: 'App Store Guidelines Compliance',
          text: 'BibleNames is designed to comply with all Apple App Store guidelines. The App:',
          items: [
            'Does not contain any inappropriate or offensive content',
            'Respects user privacy and does not collect personal data',
            'Provides accurate information about its functionality',
            'Does not include any hidden features or functionality',
            'Complies with all applicable laws and regulations'
          ]
        },
        intellectual: {
          title: 'Intellectual Property',
          text: 'All content within the BibleNames app, including but not limited to text, graphics, logos, and software, is the property of BibleNames or its content suppliers and is protected by copyright and intellectual property laws.'
        },
        contentDisclaimer: {
          title: 'Content Disclaimer',
          text: 'The biblical name information provided in this App is compiled from various historical, linguistic, and biblical sources. While we make every effort to ensure accuracy, interpretations of name meanings and origins may vary among different scholarly sources. BibleNames is intended to assist in the baby naming process and should be one of several resources you consult when choosing a name for your child. We encourage you to research names from multiple sources and consult with your family, religious advisors, or cultural experts as appropriate.'
        }
      },

      // Footer
      footer: {
        tagline: 'Discover the meaning and origin of biblical names',
        links: 'Links',
        contact: 'Contact',
        rights: 'All rights reserved.'
      }
    }
  },
  es: {
    translation: {
      // Header
      nav: {
        home: 'Inicio',
        support: 'Soporte',
        terms: 'Términos'
      },

      // Home Page
      home: {
        badge: 'Encuentra el Nombre Perfecto',
        title: 'Nombres Bíblicos para Bebés - Descubre el Nombre Perfecto',
        subtitle: 'Explora más de 1,000 nombres bíblicos con significados y orígenes. Encuentra nombres para niño y niña con recomendaciones personalizadas por IA. La mejor app para elegir el nombre de tu bebé.',
        downloadBtn: 'Descargar en App Store',
        learnMore: 'Conocer Más',
        stats: {
          names: 'Nombres Bíblicos',
          languages: 'Idiomas',
          free: 'Gratis'
        },
        howItWorks: {
          title: 'Cómo Funciona',
          subtitle: 'Encontrar el nombre bíblico perfecto para tu bebé nunca ha sido tan fácil',
          swipe: {
            title: 'Desliza y Descubre',
            text: 'Desliza a la derecha en los nombres que te gustan, a la izquierda en los que no. Nuestro algoritmo inteligente aprende tus preferencias para mostrarte más nombres que amarás'
          },
          recommendations: {
            title: 'Recomendaciones Personalizadas',
            text: 'Obtén sugerencias de nombres impulsadas por IA basadas en tus gustos. Mientras más deslizas, mejores se vuelven las recomendaciones'
          },
          information: {
            title: 'Información Bíblica Completa',
            text: 'Aprende el significado, origen y relevancia bíblica de cada nombre para ayudarte a tomar una decisión informada'
          },
          favorites: {
            title: 'Guarda tus Favoritos',
            text: 'Crea una colección de nombres que te encantan y compártelos con tu pareja para tomar la decisión final juntos'
          },
          gender: {
            title: 'Nombres de Niño y Niña',
            text: 'Filtra por género para encontrar el nombre perfecto para tu bebé, con cientos de opciones para explorar'
          },
          privacy: {
            title: 'Privado y Seguro',
            text: 'Tus elecciones de nombres son personales. Nunca compartimos tus datos ni mostramos anuncios, manteniendo tu experiencia pura y sin distracciones'
          }
        },
        about: {
          title: 'Acerca de BibleNames',
          text1: 'BibleNames hace que elegir un nombre bíblico para tu bebé sea divertido y significativo. Nuestra aplicación combina la sabiduría antigua con tecnología moderna, ofreciéndote una experiencia personalizada a través de una interfaz intuitiva de deslizamiento.',
          text2: 'Ya sea que estés esperando tu primer hijo o añadiendo a tu familia en crecimiento, BibleNames te ayuda a descubrir nombres que llevan un profundo significado espiritual y belleza atemporal. Con significados detallados, orígenes e historias bíblicas para cada nombre, encontrarás el nombre perfecto que resuena con tu fe y valores.'
        },
        cta: {
          title: '¿Listo para Encontrar el Nombre Perfecto?',
          subtitle: 'Únete a miles de padres que descubren nombres bíblicos significativos para sus bebés',
          downloadBtn: 'Descargar Ahora'
        }
      },

      // Support Page
      support: {
        title: 'Soporte y Ayuda',
        subtitle: 'Encuentra respuestas a preguntas comunes y obtén ayuda con BibleNames',
        faq: {
          title: 'Preguntas Frecuentes',
          q1: {
            question: '¿Cómo funciona la función de deslizar?',
            answer: 'Desliza a la derecha en los nombres que te gustan y a la izquierda en los que no. La aplicación aprende de tus elecciones y te muestra más nombres que coinciden con tus preferencias. ¡Mientras más deslizas, mejores se vuelven las recomendaciones!'
          },
          q2: {
            question: '¿Cuántos nombres están disponibles?',
            answer: 'BibleNames presenta cientos de nombres bíblicos cuidadosamente seleccionados tanto para niños como para niñas. Cada nombre incluye información detallada sobre su significado, origen y relevancia bíblica para ayudarte a tomar una decisión informada.'
          },
          q3: {
            question: '¿Cómo funcionan las recomendaciones personalizadas?',
            answer: 'Nuestro motor de recomendaciones impulsado por IA analiza tus "me gusta" y "no me gusta" para entender tus preferencias de nombres. Considera factores como la longitud del nombre, patrones de sonido y orígenes para sugerir nombres que probablemente amarás.'
          },
          q4: {
            question: '¿Puedo filtrar nombres por género?',
            answer: '¡Sí! Puedes filtrar fácilmente los nombres para mostrar solo nombres de niño, de niña o ambos. Esto te ayuda a enfocarte en nombres que son relevantes para tu bebé.'
          },
          q5: {
            question: '¿Cómo guardo mis nombres favoritos?',
            answer: 'Cuando deslizas a la derecha en un nombre, se guarda automáticamente en tus favoritos. Puedes ver todos tus nombres que te gustan en la sección de Favoritos y compartir tu lista con tu pareja o familia.'
          },
          q6: {
            question: '¿Mis datos son privados?',
            answer: '¡Absolutamente! Tus preferencias de nombres se almacenan de forma segura y privada. Nunca compartimos tus datos con terceros, y no hay anuncios en la aplicación. Tu viaje de elección de nombre para tu bebé es completamente personal y privado.'
          },
          q7: {
            question: '¿Puedo usar la aplicación con mi pareja?',
            answer: '¡Sí! Puedes crear una cuenta y tanto tú como tu pareja pueden deslizar sobre nombres. Vean los favoritos del otro para encontrar nombres que ambos amen y tomar la decisión juntos.'
          }
        },
        gettingStarted: {
          title: 'Primeros Pasos',
          step1: 'Descarga BibleNames desde la App Store',
          step2: 'Crea tu cuenta para guardar tus preferencias',
          step3: 'Establece tu preferencia de género (niño, niña o ambos)',
          step4: '¡Comienza a deslizar! A la derecha para nombres que amas, a la izquierda para los que no',
          step5: 'Revisa tus favoritos y comparte tu lista con tu pareja'
        },
        contact: {
          title: 'Contáctanos',
          text: '¿No encuentras la respuesta que buscas? ¡Estamos aquí para ayudarte!',
          emailSupport: 'Soporte por Email',
          responseTime: 'Típicamente respondemos dentro de 24-48 horas'
        },
        reportProblem: {
          title: 'Reportar un Problema',
          text: 'Si encuentras algún problema con la aplicación, por favor envíanos un email a',
          with: 'con:',
          item1: 'Una descripción del problema',
          item2: 'El modelo de tu dispositivo y versión de iOS',
          item3: 'Pasos para reproducir el problema (si aplica)',
          item4: 'Capturas de pantalla (si es relevante)'
        },
        featureRequests: {
          title: 'Solicitudes de Funcionalidades',
          text: '¡Nos encantaría escuchar tus ideas! Si tienes sugerencias de nuevos nombres para agregar, funcionalidades que te gustaría ver, o formas en que podemos mejorar tu experiencia, por favor envíanos un email a',
          text2: 'Leemos cada mensaje y valoramos tus comentarios mientras continuamos haciendo BibleNames mejor para padres que esperan un bebé.'
        }
      },

      // Terms Page
      terms: {
        title: 'Términos y Política de Privacidad',
        lastUpdated: 'Última actualización: 12 de noviembre de 2025',
        tos: {
          title: 'Términos de Servicio',
          section1: {
            title: '1. Aceptación de Términos',
            text: 'Al descargar, instalar o usar la aplicación móvil BibleNames ("la Aplicación"), aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con estos términos, por favor no uses la Aplicación.'
          },
          section2: {
            title: '2. Descripción del Servicio',
            text: 'BibleNames es una aplicación móvil diseñada para ayudar a los padres que esperan un bebé a descubrir y elegir nombres bíblicos para sus bebés. La Aplicación proporciona una interfaz basada en deslizamiento con recomendaciones personalizadas, información detallada de nombres incluyendo significados y orígenes, y la capacidad de guardar nombres favoritos.'
          },
          section3: {
            title: '3. Licencia de Uso',
            text: 'Te otorgamos una licencia personal, no transferible y no exclusiva para usar la Aplicación en tu dispositivo iOS. Esta licencia no te permite:',
            items: [
              'Modificar o copiar los materiales de la Aplicación',
              'Usar los materiales para cualquier propósito comercial',
              'Intentar realizar ingeniería inversa del software contenido en la Aplicación',
              'Eliminar cualquier notación de derechos de autor o propiedad de los materiales'
            ]
          },
          section4: {
            title: '4. Descargo de Responsabilidad',
            text: 'La información proporcionada en BibleNames, incluyendo significados de nombres, orígenes y referencias bíblicas, es con fines informativos para asistir en el proceso de nombrar al bebé. Aunque investigamos y verificamos cuidadosamente todo el contenido, las interpretaciones de los significados de nombres pueden variar entre diferentes fuentes. La Aplicación y su contenido se proporcionan "tal cual" sin garantías de ningún tipo.'
          },
          section5: {
            title: '5. Limitaciones',
            text: 'En ningún caso BibleNames o sus desarrolladores serán responsables de ningún daño derivado del uso o la imposibilidad de usar la Aplicación, incluso si hemos sido notificados de la posibilidad de tales daños.'
          },
          section6: {
            title: '6. Modificaciones',
            text: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuado de la Aplicación después de los cambios constituye la aceptación de los términos modificados.'
          },
          section7: {
            title: '7. Ley Aplicable',
            text: 'Estos términos se regirán e interpretarán de acuerdo con las leyes de la jurisdicción en la que se encuentra el desarrollador, sin tener en cuenta sus disposiciones sobre conflictos de leyes.'
          }
        },
        privacy: {
          title: 'Política de Privacidad',
          section1: {
            title: '1. Información que Recopilamos',
            text: 'BibleNames está diseñada pensando en tu privacidad. Recopilamos solo la información mínima necesaria para proporcionar nuestro servicio:',
            items: [
              'Información de cuenta (email) para propósitos de autenticación',
              'Tus preferencias de nombres (nombres que te gustan/no te gustan) para proporcionar recomendaciones personalizadas',
              'Preferencias de filtro de género para mostrar nombres relevantes'
            ],
            note: 'No recopilamos ninguna otra información personal sobre ti, tu embarazo o tu familia.'
          },
          section2: {
            title: '2. Almacenamiento de Datos',
            text: 'Tus datos se almacenan de forma segura usando Firebase, una plataforma de nube confiable:',
            items: [
              'Tus credenciales de cuenta están encriptadas y seguras',
              'Tus preferencias de nombres (me gusta/no me gusta) se almacenan en tu cuenta privada',
              'Caché local para un rendimiento más rápido cuando estés sin conexión'
            ],
            note: 'Utilizamos medidas de seguridad estándar de la industria para proteger tus datos.'
          },
          section3: {
            title: '3. Análisis y Rastreo',
            text: 'No utilizamos ningún servicio de análisis, herramientas de rastreo o redes publicitarias. Tu uso de la Aplicación es completamente privado.'
          },
          section4: {
            title: '4. Servicios de Terceros',
            text: 'BibleNames utiliza Firebase (Google) para autenticación y almacenamiento de datos. Firebase cumple con las principales regulaciones de privacidad incluyendo GDPR. No compartimos tus datos con ningún otro tercero. No se utilizan redes publicitarias ni servicios de análisis en la aplicación.'
          },
          section5: {
            title: '5. Privacidad de Menores',
            text: 'Dado que no recopilamos ninguna información personal, la Aplicación es segura para usuarios de todas las edades, incluyendo menores de 13 años.'
          },
          section6: {
            title: '6. Seguridad de Datos',
            text: 'Dado que todos los datos se almacenan localmente en tu dispositivo, la seguridad de tu información está protegida por las medidas de seguridad de tu dispositivo (código de acceso, Face ID, Touch ID, etc.).'
          },
          section7: {
            title: '7. Tus Derechos',
            text: 'Tienes control completo sobre tus datos:',
            items: [
              'Eliminar tu cuenta y todos los datos asociados en cualquier momento',
              'Borrar tus preferencias y empezar de nuevo dentro de la Aplicación',
              'Solicitar una copia de tus datos contactando a soporte',
              'Optar por no recibir recomendaciones personalizadas y usar el modo de exploración'
            ]
          },
          section8: {
            title: '8. Cambios a la Política de Privacidad',
            text: 'Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos de cualquier cambio actualizando la fecha de "Última actualización" en la parte superior de esta política. El uso continuado de la Aplicación después de los cambios constituye la aceptación de la política actualizada.'
          },
          section9: {
            title: '9. Información de Contacto',
            text: 'Si tienes alguna pregunta sobre estos Términos o nuestra Política de Privacidad, por favor contáctanos en:'
          }
        },
        appStore: {
          title: 'Cumplimiento de las Directrices de App Store',
          text: 'BibleNames está diseñada para cumplir con todas las directrices de Apple App Store. La Aplicación:',
          items: [
            'No contiene ningún contenido inapropiado u ofensivo',
            'Respeta la privacidad del usuario y no recopila datos personales',
            'Proporciona información precisa sobre su funcionalidad',
            'No incluye ninguna característica o funcionalidad oculta',
            'Cumple con todas las leyes y regulaciones aplicables'
          ]
        },
        intellectual: {
          title: 'Propiedad Intelectual',
          text: 'Todo el contenido dentro de la aplicación BibleNames, incluyendo pero no limitado a texto, gráficos, logotipos y software, es propiedad de BibleNames o sus proveedores de contenido y está protegido por derechos de autor y leyes de propiedad intelectual.'
        },
        contentDisclaimer: {
          title: 'Descargo de Responsabilidad de Contenido',
          text: 'La información de nombres bíblicos proporcionada en esta Aplicación está compilada de varias fuentes históricas, lingüísticas y bíblicas. Aunque hacemos todo lo posible para garantizar la precisión, las interpretaciones de los significados y orígenes de los nombres pueden variar entre diferentes fuentes académicas. BibleNames está destinada a asistir en el proceso de nombrar al bebé y debe ser uno de varios recursos que consultes al elegir un nombre para tu hijo. Te animamos a investigar nombres de múltiples fuentes y consultar con tu familia, asesores religiosos o expertos culturales según corresponda.'
        }
      },

      // Footer
      footer: {
        tagline: 'Descubre el significado y origen de nombres bíblicos',
        links: 'Enlaces',
        contact: 'Contacto',
        rights: 'Todos los derechos reservados.'
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

export default i18n
