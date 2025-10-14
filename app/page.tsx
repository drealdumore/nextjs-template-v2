export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <header className="space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-6xl font-bold text-neutral-900 dark:text-neutral-100">
            Next.js Starter
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
            Fast, optimized starter with smooth animations
          </p>
        </header>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <button className="px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Get Started
          </button>
          <button className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
            Learn More
          </button>
        </div>
        
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 animate-fade-in-delayed">
          <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              ⚡
            </div>
            <h3 className="font-semibold mb-2">Fast</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Optimized for performance</p>
          </div>
          
          <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              ✓
            </div>
            <h3 className="font-semibold mb-2">Optimized</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Lighthouse best practices</p>
          </div>
          
          <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              🚀
            </div>
            <h3 className="font-semibold mb-2">Modern</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Latest Next.js stack</p>
          </div>
        </section>
      </div>
    </main>
  );
}
