import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NewsItem {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  subdivision: string;
  imageUrl: string;
  slug: string;
}

interface NewsFilterProps {
  news: NewsItem[];
  searchQuery: string;
}

export default function NewsFilter({ news, searchQuery }: NewsFilterProps) {
  const [activeSubdivision, setActiveSubdivision] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredNews, setFilteredNews] = useState(news);

  const subdivisions = ['All', 'Rose Gardens', 'Tulip Hill', 'Lavender Lane', 'Sunflower Square', 'Daisy Dale'];
  const categories = ['All', 'Events', 'Maintenance', 'Infrastructure', 'Community'];

  useEffect(() => {
    let filtered = news;

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subdivision.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by subdivision
    if (activeSubdivision !== 'All') {
      filtered = filtered.filter(item => item.subdivision === activeSubdivision);
    }

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    setFilteredNews(filtered);
  }, [news, searchQuery, activeSubdivision, activeCategory]);

  return (
    <div className="space-y-8">
      {/* Filter Section - Sticky filter bar that allows users to narrow down news by subdivision and category */}
      <section className="bg-emerald-50 dark:bg-slate-800 py-8 sticky top-0 z-40 border-y border-emerald-100 dark:border-slate-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          {/* Subdivision Filter - Buttons to show news from specific neighborhoods only */}
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4">Filter by Subdivision</h3>
            <div className="flex flex-wrap gap-3">
              {subdivisions.map((sub) => (
                <motion.button
                  key={sub}
                  onClick={() => setActiveSubdivision(sub)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    sub === activeSubdivision
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-emerald-200 dark:border-slate-600 hover:border-emerald-500 dark:hover:border-slate-500'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {sub}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Category Filter - Buttons to show news by type (Events, Maintenance, etc.) */}
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    cat === activeCategory
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-emerald-200 dark:border-slate-600 hover:border-emerald-500 dark:hover:border-slate-500'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Articles Grid - Displays filtered news articles as clickable cards */}
      <section className="max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeSubdivision}-${activeCategory}-${searchQuery}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredNews.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow group"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500 text-xs flex items-center">
                      <i className="far fa-calendar mr-1"></i>
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  {/* Article Title Link - Clicking takes user to the full news article page */}
                  <a href={post.slug} className="block">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {post.title}
                    </h3>
                  </a>
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs">
                    <i className="fas fa-map-marker-alt mr-1"></i>
                    {post.subdivision}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredNews.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <i className="fas fa-inbox text-5xl text-slate-300 dark:text-slate-600 mb-4"></i>
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">No news articles found</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </section>
    </div>
  );
}