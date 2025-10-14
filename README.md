# Next.js Optimized Starter

A high-performance Next.js starter template optimized for Lighthouse scores with smooth animations.

## ✨ Features

- ⚡ **Lighthouse Optimized** - Perfect scores for Performance, Accessibility, Best Practices, and SEO
- 🎨 **Smooth Animations** - Lenis smooth scroll with CSS animations
- 🎯 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS v4** - Latest styling framework
- 📱 **Responsive Design** - Mobile-first approach
- 🔍 **SEO Ready** - Meta tags, sitemap, robots.txt
- 🚀 **Performance** - Optimized fonts, images, and bundle size
- ♿ **Accessible** - WCAG compliant
- 🌙 **Dark Mode** - System preference support

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Analyze bundle
npm run analyze
```

## 📊 Performance Features

- **Font Optimization**: Preloaded Google Fonts with `font-display: swap`
- **Image Optimization**: Next.js Image component with AVIF/WebP support
- **Bundle Optimization**: Tree shaking and code splitting
- **Caching**: Optimized cache headers for static assets
- **Security**: Security headers and CSP
- **Smooth Scroll**: Lenis for buttery smooth scrolling
- **Animations**: CSS animations with `prefers-reduced-motion` support

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Lenis + CSS animations
- **Fonts**: Geist Sans & Geist Mono
- **Linting**: ESLint with Next.js config

## 📁 Project Structure

```
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout with optimizations
│   ├── page.tsx         # Homepage
│   ├── ClientBody.tsx   # Client-side smooth scroll
│   ├── sitemap.ts       # SEO sitemap
│   └── manifest.ts      # PWA manifest
├── public/
│   └── robots.txt       # SEO robots file
└── next.config.ts       # Next.js configuration
```

## 🎯 Lighthouse Optimizations

- **Performance**: Optimized fonts, images, and bundle size
- **Accessibility**: Semantic HTML, ARIA labels, focus management
- **Best Practices**: Security headers, HTTPS, modern image formats
- **SEO**: Meta tags, structured data, sitemap

## 🎨 Customization

1. Update metadata in `app/layout.tsx`
2. Modify colors and animations in `app/globals.css`
3. Customize components in `app/page.tsx`
4. Update domain in `app/sitemap.ts` and `public/robots.txt`

## 📝 License

MIT License - feel free to use this template for your projects!