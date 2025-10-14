# Next.js Optimized Starter

A high-performance Next.js starter template optimized for Lighthouse scores with exceptional UX and smooth animations.

## ✨ Features

- ⚡ **Lighthouse Optimized** - 90+ scores for Performance, Accessibility, Best Practices, and SEO
- 🎨 **Smooth Animations** - Lenis smooth scroll with micro-interactions
- 🎯 **TypeScript** - Full type safety with modern React patterns
- 🎨 **Tailwind CSS v4** - Latest styling framework with custom UX components
- 📱 **Responsive Design** - Mobile-first with touch-friendly interactions
- 🔍 **SEO Ready** - Complete meta tags, sitemap, robots.txt, and manifest
- 🚀 **Performance** - Lazy loading, optimized fonts, images, and bundle size
- ♿ **Accessible** - WCAG compliant with proper focus management
- 🌙 **Dark Mode** - System preference support with smooth transitions
- 🎭 **Enhanced UX** - Loading states, hover effects, and user feedback
- 📄 **Error Handling** - Custom 404 and loading pages
- 🎪 **Micro-interactions** - Button animations and card hover effects

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

- **Font Optimization**: Preloaded Google Fonts with `font-display: swap` and fallbacks
- **Image Optimization**: Next.js Image component with AVIF/WebP support
- **Bundle Optimization**: Tree shaking, code splitting, and lazy loading
- **Caching**: Optimized cache headers for static assets
- **Security**: Security headers and CSP
- **Smooth Scroll**: Lenis with async loading for better performance
- **Animations**: Lightweight CSS animations with `prefers-reduced-motion` support

## 🎭 UX Enhancements

- **Interactive Buttons**: Hover effects with elevation and loading states
- **Card Animations**: Smooth hover transitions with scale and shadow effects
- **Loading States**: Visual feedback during user interactions
- **Error Handling**: Custom 404 page with navigation back to home
- **Micro-interactions**: Icon scaling and button press feedback
- **Accessibility**: Proper focus states and keyboard navigation
- **Responsive Touch**: Optimized for mobile interactions

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
│   ├── globals.css      # Global styles, animations, and UX components
│   ├── layout.tsx       # Root layout with performance optimizations
│   ├── page.tsx         # Homepage with interactive components
│   ├── loading.tsx      # Loading UI component
│   ├── not-found.tsx    # Custom 404 error page
│   ├── ClientBody.tsx   # Client-side smooth scroll with lazy loading
│   ├── sitemap.ts       # SEO sitemap
│   └── manifest.ts      # PWA manifest
├── public/
│   └── robots.txt       # SEO robots file
└── next.config.ts       # Next.js configuration with performance settings
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