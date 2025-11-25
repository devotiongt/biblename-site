# Sistema de Internacionalización (i18n)

## 🌍 Idiomas Disponibles

- **Español (ES)** - Idioma por defecto
- **English (EN)**

## 📁 Archivos Principales

### Configuración
- **`src/i18n.js`** - Configuración principal de i18next con todas las traducciones

### Componentes
- **`src/components/LanguageSwitcher.jsx`** - Botón para cambiar entre idiomas
- **`src/components/LanguageSwitcher.css`** - Estilos del selector de idioma

### Páginas Traducidas
- ✅ `src/pages/Home.jsx` - Página principal
- ✅ `src/pages/Support.jsx` - Página de soporte
- ✅ `src/pages/Terms.jsx` - Términos y privacidad
- ✅ `src/components/Header.jsx` - Navegación
- ✅ `src/components/Footer.jsx` - Pie de página

## 🚀 Cómo Funciona

### Detección Automática
El sistema detecta automáticamente el idioma del navegador del usuario:
- Si el navegador está en inglés → muestra contenido en inglés
- Si el navegador está en español u otro idioma → muestra contenido en español (default)

### Persistencia
El idioma seleccionado por el usuario se guarda en `localStorage`, por lo que la próxima vez que visite el sitio, verá el contenido en el idioma que eligió.

### Cambio Manual
El botón en el header permite cambiar entre idiomas:
- Cuando está en inglés muestra: **🇪🇸 ES**
- Cuando está en español muestra: **🇬🇧 EN**

## 💻 Uso en Componentes

### Importar el hook
```jsx
import { useTranslation } from 'react-i18next'

function MiComponente() {
  const { t } = useTranslation()

  return <h1>{t('clave.de.traduccion')}</h1>
}
```

### Acceder a traducciones
```jsx
// Texto simple
{t('home.title')}

// Texto con objetos anidados
{t('home.about.text1')}

// Arrays (para listas)
{t('terms.tos.section3.items', { returnObjects: true }).map((item, index) => (
  <li key={index}>{item}</li>
))}
```

## 📝 Agregar Nuevas Traducciones

1. Abre `src/i18n.js`
2. Agrega la clave en ambos idiomas (en y es):

```javascript
const resources = {
  en: {
    translation: {
      nuevaSeccion: {
        titulo: 'New Title',
        descripcion: 'New description'
      }
    }
  },
  es: {
    translation: {
      nuevaSeccion: {
        titulo: 'Nuevo Título',
        descripcion: 'Nueva descripción'
      }
    }
  }
}
```

3. Usa la traducción en tu componente:
```jsx
{t('nuevaSeccion.titulo')}
```

## 🔧 Configuración

### Idioma por defecto
```javascript
fallbackLng: 'es'  // Español es el idioma por defecto
```

### Orden de detección
```javascript
detection: {
  order: ['localStorage', 'navigator'],  // Primero localStorage, luego navegador
  caches: ['localStorage']  // Guardar en localStorage
}
```

## 🌐 SEO y Meta Tags

El sistema actualiza automáticamente:
- Los meta tags de idioma
- El atributo `lang` del HTML
- Las URLs canónicas (si se configuran por idioma)

## 📱 Responsive

El botón de cambio de idioma es completamente responsive y se adapta a:
- Desktop (gap: 2rem)
- Tablet (gap: 1rem)
- Mobile (gap: 0.75rem)

## 🎨 Personalización del Botón

Para cambiar el estilo del botón de idiomas, edita:
```css
/* src/components/LanguageSwitcher.css */
.language-switcher {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  /* ... más estilos */
}
```

## 📦 Dependencias

```json
{
  "i18next": "^23.x.x",
  "react-i18next": "^14.x.x",
  "i18next-browser-languagedetector": "^7.x.x"
}
```

## 🚨 Troubleshooting

### Las traducciones no aparecen
1. Verifica que `'./i18n'` está importado en `src/main.jsx`
2. Asegúrate de usar `useTranslation()` en cada componente
3. Revisa la consola del navegador para errores

### El idioma no cambia
1. Limpia el localStorage del navegador
2. Verifica que las claves de traducción existen en ambos idiomas
3. Recarga la página con Ctrl+Shift+R (hard reload)

### El botón no aparece
1. Verifica que `LanguageSwitcher` está importado en Header.jsx
2. Revisa que los estilos CSS se estén cargando correctamente

## 📖 Recursos

- [Documentación de i18next](https://www.i18next.com/)
- [Documentación de react-i18next](https://react.i18next.com/)
- [Language Detector Plugin](https://github.com/i18next/i18next-browser-languageDetector)
