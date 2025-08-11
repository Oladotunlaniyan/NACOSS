import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ExternalLink } from 'lucide-react';

interface BlogCardProps {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  author: string;
  readTime: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  description, 
  link, 
  pubDate, 
  author, 
  readTime 
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.article 
      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
        {title}
      </h2>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {description}
      </p>
      
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {formatDate(pubDate)}
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          {readTime}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">By {author}</span>
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read More
          <ExternalLink className="h-4 w-4 ml-1" />
        </motion.a>
      </div>
    </motion.article>
  );
};

export default BlogCard;