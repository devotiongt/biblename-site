# Deployment Guide

## Configuración de GitHub Pages con Dominio Personalizado

### 1. Preparar el Repositorio

Este proyecto ya está configurado para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

### 2. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Navega a **Settings** > **Pages**
3. En **Source**, selecciona **GitHub Actions**

### 3. Configurar Dominio Personalizado

#### Opción A: Subdominio (Recomendado)

1. En tu proveedor de DNS, crea un registro CNAME:
   ```
   biblenames.tudominio.com -> tu-usuario.github.io
   ```

2. Edita el archivo `public/CNAME` y reemplaza el contenido con:
   ```
   biblenames.tudominio.com
   ```

3. En GitHub Settings > Pages > Custom domain, ingresa:
   ```
   biblenames.tudominio.com
   ```

4. Marca la casilla "Enforce HTTPS"

#### Opción B: Dominio Apex (tudominio.com)

1. En tu proveedor de DNS, crea registros A apuntando a:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

2. Edita el archivo `public/CNAME` con tu dominio:
   ```
   tudominio.com
   ```

3. En GitHub Settings > Pages > Custom domain, ingresa tu dominio

4. Marca la casilla "Enforce HTTPS"

### 4. URLs Requeridas para App Store

Una vez configurado el dominio, tendrás las siguientes URLs:

- **Marketing URL**: `https://tudominio.com` (Página principal)
- **Support URL**: `https://tudominio.com/support` (Página de soporte)
- **Terms & Privacy URL**: `https://tudominio.com/terms` (Términos y privacidad)

### 5. Deployment Automático

Cada vez que hagas push a la rama `main`, GitHub Actions automáticamente:

1. Instala las dependencias
2. Construye el proyecto
3. Despliega a GitHub Pages

### 6. Desarrollo Local

Para probar localmente:

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de la versión de producción
npm run preview
```

### 7. Verificación

Después del despliegue:

1. Verifica que el sitio carga en tu dominio
2. Prueba todas las rutas:
   - `/` - Home
   - `/support` - Support
   - `/terms` - Terms & Privacy
3. Verifica que la navegación funciona correctamente
4. Confirma que el diseño se ve bien en móvil y desktop

### 8. Solución de Problemas

**Las rutas no funcionan después del despliegue:**
- Asegúrate de que existe el archivo `public/.nojekyll`
- Verifica que el `base` en `vite.config.js` esté configurado correctamente

**El dominio personalizado no funciona:**
- Espera 24-48 horas para la propagación de DNS
- Verifica la configuración de DNS en tu proveedor
- Asegúrate de que el archivo CNAME esté en la carpeta `public/`

**HTTPS no está disponible:**
- Espera unos minutos después de configurar el dominio
- Asegúrate de que el dominio esté correctamente verificado en GitHub
