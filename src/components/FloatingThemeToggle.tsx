import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FloatingThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
    >
      <motion.button
        onClick={toggleTheme}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-slate-600 dark:text-slate-300 text-lg`}></i>
        </motion.div>

        <motion.div
          className="absolute -top-8 right-0 bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? 'Light mode' : 'Dark mode'}
        </motion.div>
      </motion.button>
    </motion.div>
  );
}