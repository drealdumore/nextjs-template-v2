import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-neutral-900 dark:text-neutral-100">404</h1>
          <h2 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">Page Not Found</h2>
          <p className="text-neutral-600 dark:text-neutral-400">The page you're looking for doesn't exist.</p>
        </div>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          🏠 Go Home
        </Link>
      </div>
    </div>
  );
}