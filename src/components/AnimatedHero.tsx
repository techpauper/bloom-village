import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl mx-4 lg:mx-0"
    >
      <motion.img
        src="https://picsum.photos/seed/community/1600/900"
        alt="Bloom Village"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-transparent flex items-center">
        <div className="max-w-2xl px-8 lg:px-16 text-white">
          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A Place Where <span className="text-emerald-400 italic">Community</span> Thrives
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl mb-8 text-emerald-50/90 font-light leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Welcome to Bloom Village Home Owners Association. Stay connected with your neighbors across all 5 subdivisions.
          </motion.p>
          <motion.a
            href="/news"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-emerald-900/40"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read Latest News
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}