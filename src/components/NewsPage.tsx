import { useState } from 'react';
import SearchBar from './SearchBar.tsx';
import NewsFilter from './NewsFilter.tsx';

interface NewsItem {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  subdivision: string;
  imageUrl: string;
  slug: string;
}

interface NewsPageProps {
  news: NewsItem[];
}

export default function NewsPage({ news }: NewsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">Community News & Updates</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Stay informed about important announcements, events, and community updates from all our subdivisions.
          </p>
        </div>
        <SearchBar onSearch={setSearchQuery} />
      </section>

      <NewsFilter news={news} searchQuery={searchQuery} />
    </div>
  );
}