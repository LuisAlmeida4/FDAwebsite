import React from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

interface BlogPostProps {
  title: string;
  summary: string;
  date: string;
  image: string;
  tags: string[];
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, summary, date, image, tags, slug }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{summary}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={`/blog/${slug}`} 
          className="text-primary font-medium flex items-center transition-colors hover:text-primary-dark"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Drone Technology in Modern Agriculture",
      summary: "Exploring how drones are revolutionizing farming with precision agriculture and data-driven insights.",
      date: "May 15, 2025",
      image: "https://images.pexels.com/photos/4603874/pexels-photo-4603874.jpeg?auto=compress&cs=tinysrgb&w=1500",
      tags: ["Agriculture", "Technology", "Data Analytics"],
      slug: "future-drone-technology-agriculture"
    },
    {
      title: "Navigating FAA Regulations for Commercial Drone Operations",
      summary: "A comprehensive guide to understanding and complying with evolving drone regulations for businesses.",
      date: "April 22, 2025",
      image: "https://images.pexels.com/photos/912843/pexels-photo-912843.jpeg?auto=compress&cs=tinysrgb&w=1500",
      tags: ["Regulations", "Compliance", "Business"],
      slug: "faa-regulations-commercial-drones"
    },
    {
      title: "How Drones Are Transforming Construction Site Management",
      summary: "Case studies showing the impact of drone technology on construction efficiency, safety, and planning.",
      date: "March 8, 2025",
      image: "https://images.pexels.com/photos/2760250/pexels-photo-2760250.jpeg?auto=compress&cs=tinysrgb&w=1500",
      tags: ["Construction", "Safety", "Project Management"],
      slug: "drones-transforming-construction"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full mb-4">
            Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Latest Insights & Industry News
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Stay updated with the latest trends, technologies, and best practices in the drone industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost 
              key={index}
              title={post.title}
              summary={post.summary}
              date={post.date}
              image={post.image}
              tags={post.tags}
              slug={post.slug}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/blog" 
            className="btn-secondary inline-flex items-center"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;