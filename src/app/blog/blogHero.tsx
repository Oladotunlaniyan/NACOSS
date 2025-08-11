"use client"
import React from 'react';
import {motion} from 'framer-motion'

const BlogHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
          <h1 className="text-5xl font-medium text-hero-text mb-6">
            Health & Wellness Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay informed with the latest health insights, medical updates, and wellness tips 
            from our experienced healthcare professionals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;