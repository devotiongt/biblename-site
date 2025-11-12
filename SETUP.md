# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Test Production Build**
   ```bash
   npm run build
   npm run preview
   ```

## Initial Configuration

### Before First Deployment

1. **Update CNAME File**
   - Edit `public/CNAME`
   - Replace `biblenames.yourdomain.com` with your actual domain

2. **Update Contact Email**
   - Edit `src/components/Footer.jsx` - line 18
   - Edit `src/pages/Support.jsx` - multiple locations
   - Edit `src/pages/Terms.jsx` - bottom of page
   - Replace `support@biblenames.app` with your actual email

3. **Update App Store Links**
   - Edit `src/pages/Home.jsx`
   - Update the download button links (currently `href="#"`)
   - Add your actual App Store URL when available

4. **Customize Last Updated Date**
   - Edit `src/pages/Terms.jsx` - line 8
   - Update the date to when you finalize your terms

## GitHub Repository Setup

1. **Create GitHub Repository**
   ```bash
   git remote add origin https://github.com/your-username/biblename-site.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to Settings > Pages
   - Source: GitHub Actions
   - Wait for the first deployment to complete

3. **Configure Custom Domain** (if using)
   - In Settings > Pages > Custom Domain
   - Enter your domain
   - Wait for DNS check to complete
   - Enable "Enforce HTTPS"

## DNS Configuration

### For Subdomain (biblenames.yourdomain.com)

Add a CNAME record in your DNS provider:
```
Type: CNAME
Name: biblenames
Value: your-username.github.io
```

### For Apex Domain (yourdomain.com)

Add A records in your DNS provider:
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

## Verification Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] Navigation menu works
- [ ] All three pages are accessible:
  - [ ] Home (/)
  - [ ] Support (/support)
  - [ ] Terms (/terms)
- [ ] Mobile responsive design works
- [ ] HTTPS is enabled
- [ ] No console errors in browser
- [ ] All links work correctly

## URLs for App Store Connect

Once deployed and verified, use these URLs in App Store Connect:

1. **Marketing URL**: `https://yourdomain.com`
2. **Support URL**: `https://yourdomain.com/support`
3. **Privacy Policy URL**: `https://yourdomain.com/terms`

## Development Tips

### Hot Reload
The development server supports hot module replacement. Changes to React components will update instantly without full page reload.

### Adding New Pages

1. Create new component in `src/pages/`
2. Create corresponding CSS file
3. Add route in `src/App.jsx`
4. Add navigation link in `src/components/Header.jsx`

### Styling
- Use CSS variables defined in `src/index.css` for consistent theming
- Component-specific styles go in their own CSS files
- Global utilities and resets are in `src/index.css`

## Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails
Check that all imports are correct and no syntax errors exist:
```bash
npm run lint
```

### GitHub Actions deployment fails
- Check the Actions tab in your GitHub repository
- Ensure GitHub Pages is enabled in Settings
- Verify that the workflow file is in `.github/workflows/deploy.yml`

### Domain not working
- Wait 24-48 hours for DNS propagation
- Use `dig yourdomain.com` to verify DNS records
- Check that CNAME file contains the correct domain
- Verify DNS configuration in GitHub Pages settings

## Project Structure Overview

```
biblename-site/
├── .github/workflows/      # GitHub Actions CI/CD
├── public/                 # Static files (copied to dist/)
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Route pages
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
└── vite.config.js        # Build configuration
```

## Support

For issues with the site itself, check:
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
