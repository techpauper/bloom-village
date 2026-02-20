# Bloom Village HOA Website

A modern, responsive website for the Bloom Village Home Owners Association built with Astro, React, and Tailwind CSS.

## Features

- ✅ **Modern Design**: Clean, professional design with dark mode support
- ✅ **Responsive**: Works perfectly on all devices
- ✅ **Interactive**: React components with smooth animations
- ✅ **Content Management**: Integrated with Storyblok CMS
- ✅ **SEO Ready**: Optimized for search engines
- ✅ **TypeScript**: Full type safety throughout

## Pages

- **Home** (`/`): Hero section, subdivision overview, latest news
- **News** (`/news`): Article listing with search and filtering
- **Board** (`/about`): Board of directors with contact information
- **Contact** (`/contact`): Contact form and information
- **Announcements** (`/announcements`): Dynamic content from Storyblok CMS

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Storyblok (Optional but recommended):**
   - Create a free account at [Storyblok](https://app.storyblok.com)
   - Create a new space for your project
   - Get your access token from Settings > Access Tokens
   - Copy `.env.example` to `.env` and add your token:
     ```
     STORYBLOK_TOKEN=your_actual_token_here
     ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # Reusable React/Astro components
├── layouts/            # Page layouts
├── pages/              # Route pages
├── content/            # Static content collections
└── env.d.ts           # TypeScript declarations
```

## Technologies Used

- **Astro**: Static site generator with islands architecture
- **React**: Interactive components
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations
- **Storyblok**: Headless CMS (optional)
- **TypeScript**: Type safety

## Development

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Use the `Layout` component for consistent structure
3. Update navigation in `Navbar.astro`

### Adding Components

1. Create components in `src/components/`
2. Use `.astro` for static components, `.tsx` for interactive React components
3. Import and use in pages/layouts

### Content Management

- **Static Content**: Use Astro content collections in `src/content/`
- **Dynamic Content**: Use Storyblok for editable content
- **News Articles**: Currently using content collections (can migrate to Storyblok if needed)

## Deployment

The site is configured for static deployment. Build with `npm run build` and deploy the `dist/` folder to any static hosting service like:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2024 Bloom Village Home Owners Association. All rights reserved.