import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);

  return (
    <motion.div
      className="relative max-w-md mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="relative">
        <motion.input
          type="text"
          placeholder="Search news articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full px-4 py-3 pl-12 pr-4 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
          animate={{
            boxShadow: isFocused
              ? '0 0 0 3px rgba(16, 185, 129, 0.1)'
              : '0 0 0 0px rgba(16, 185, 129, 0)'
          }}
        />
        <motion.div
          className="absolute left-4 top-1/2 transform -translate-y-1/2"
          animate={{ scale: isFocused ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <i className="fas fa-search text-slate-400 dark:text-slate-500"></i>
        </motion.div>
        {query && (
          <motion.button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <i className="fas fa-times"></i>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}