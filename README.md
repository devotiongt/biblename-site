# BibleNames Website

Landing page for the BibleNames iOS app, including support and terms pages required for App Store submission.

## Features

- **Home Page**: Marketing landing page with app features and download links
- **Support Page**: FAQ and contact information for users
- **Terms & Privacy**: Complete terms of service and privacy policy

## Tech Stack

- React 18
- Vite
- React Router
- GitHub Pages for hosting

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is configured to automatically deploy to GitHub Pages when you push to the main branch.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment and domain configuration instructions.

## URLs for App Store Submission

Once deployed, use these URLs for your App Store submission:

- **Marketing URL**: `https://yourdomain.com`
- **Support URL**: `https://yourdomain.com/support`
- **Terms & Privacy URL**: `https://yourdomain.com/terms`

## Project Structure

```
biblename-site/
├── public/               # Static assets
│   ├── CNAME            # Custom domain configuration
│   └── .nojekyll        # Disable Jekyll processing
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Support.jsx
│   │   └── Terms.jsx
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment
└── vite.config.js       # Vite configuration
```

## Customization

### Update Domain

1. Edit `public/CNAME` with your domain
2. Configure DNS settings with your provider
3. Enable custom domain in GitHub Pages settings

### Update Content

- **App Features**: Edit `src/pages/Home.jsx`
- **FAQ**: Edit `src/pages/Support.jsx`
- **Terms**: Edit `src/pages/Terms.jsx`

### Styling

- Global styles: `src/index.css`
- Component-specific styles: Located next to each component

## License

Copyright © 2025 BibleNames. All rights reserved
