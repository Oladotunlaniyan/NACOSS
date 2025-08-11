"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogCard from './blogCard';
import { Loader2 } from 'lucide-react';

interface MediumItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  author?: string;
}

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  author: string;
}

const BlogGrid = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        // RSS JSON key here
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@healthcare'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data = await response.json();
        
        const formattedPosts: BlogPost[] = data.items.slice(0, 9).map((item: MediumItem) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
          author: item.author || 'RAYO Medical Team'
        }));
        
        setPosts(formattedPosts);
      } catch{
        setError('Unable to load blog posts at this time');
        // Fallback mock data
        setPosts([
          {
            title: "Understanding Preventive Care: Your Guide to Better Health",
            link: "#",
            pubDate: "2025-01-15T10:00:00Z",
            description: "Learn about the importance of preventive healthcare and how regular check-ups can help detect health issues early...",
            author: "Dr. Sarah Johnson"
          },
          {
            title: "The Benefits of In-House Medical Testing",
            link: "#",
            pubDate: "2025-01-12T14:30:00Z",
            description: "Discover how on-site diagnostic testing can provide faster results and more convenient healthcare experiences...",
            author: "RAYO Medical Team"
          },
          {
            title: "Workplace Health: Pre-Employment Exams Explained",
            link: "#",
            pubDate: "2025-01-10T09:15:00Z",
            description: "Everything you need to know about pre-employment medical examinations and their importance for workplace safety...",
            author: "Dr. Michael Chen"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Loading articles...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {error && (
          <div className="text-center mb-8">
            <p className="text-amber-600 bg-amber-50 p-4 rounded-lg inline-block">
              {error}
            </p>
          </div>
        )}

        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard
                title={post.title}
                description={post.description}
                link={post.link}
                pubDate={post.pubDate}
                author={post.author}
                readTime="5 min read"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogGrid;