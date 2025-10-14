"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const timerRef = useRef<number | null>(null);

  const handleGetStarted = () => {
    setLoading(true);
    // Clear any existing timer so repeated clicks don't create multiple timers
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    const id = window.setTimeout(() => {
      // Only update state if this timer is still the active one
      if (timerRef.current === id) {
        setLoading(false);
        // clear the ref since the timer has completed
        timerRef.current = null;
      }
    }, 1000);

    timerRef.current = id;
  };

  // Cleanup on unmount: clear any pending timer to avoid setting state on unmounted component
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <header className="space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-100 bg-clip-text text-transparent">
            Next.js Starter
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
            Fast, optimized starter with smooth animations
          </p>
        </header>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <button
            onClick={handleGetStarted}
            disabled={loading}
            className={`btn-primary px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium ${
              loading ? "loading" : ""
            }`}
          >
            {loading ? "⏳ Loading..." : "🚀 Get Started"}
          </button>
          <button className="btn-secondary px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900">
            📚 Learn More
          </button>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 animate-fade-in-delayed">
          <div className="card p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-transparent hover:border-blue-200 dark:hover:border-blue-800">
            <div className="card-icon w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto text-xl">
              ⚡
            </div>
            <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
              Fast
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Optimized for performance and speed
            </p>
          </div>

          <div className="card p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-transparent hover:border-green-200 dark:hover:border-green-800">
            <div className="card-icon w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 mx-auto text-xl">
              ✓
            </div>
            <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
              Optimized
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Lighthouse best practices built-in
            </p>
          </div>

          <div className="card p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-transparent hover:border-purple-200 dark:hover:border-purple-800">
            <div className="card-icon w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 mx-auto text-xl">
              🚀
            </div>
            <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
              Modern
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Latest Next.js with TypeScript
            </p>
          </div>
        </section>

        <footer className="pt-8 text-xs text-neutral-500 dark:text-neutral-500">
          Built with ❤️ using Next.js 15 + TypeScript + Tailwind CSS
        </footer>
      </div>
    </main>
  );
}
