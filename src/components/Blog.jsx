import React from "react";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Top Hiring Trends in 2025",
    summary:
      "Discover the latest recruitment trends and strategies shaping the HR industry in 2025, from AI-powered sourcing to inclusive hiring.",
    date: "April 5, 2025",
    image:
      "https://www.lloydstaffing.com/wp-content/uploads/2024/12/Blog-Header-2-1920-x-800-px-1.jpg",
  },
  {
    id: 2,
    title: "How to Attract Top Talent in a Competitive Market",
    summary:
      "Learn how to craft compelling job offers and build a brand that draws top candidates to your organization.",
    date: "March 22, 2025",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQGcMgXry_7OSw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1724782162360?e=2147483647&v=beta&t=1F2d5Fj86uf3dkFJTq3jpRYXvwpKnLLdLtwU_VK39QU",
  },
  {
    id: 3,
    title: "Why HR Consultancy Services Are Essential for Startups",
    summary:
      "Startups often underestimate HR – here’s why an HR consultancy like Mann HR is a game-changer for scaling your team sustainably.",
    date: "March 10, 2025",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "5 Ways to Improve Your Hiring Funnel",
    summary:
      "Optimize your recruitment process with these 5 proven methods to reduce time-to-hire and improve candidate experience.",
    date: "February 27, 2025",
    image:
      "https://velocityglobal.com/sites/default/files/migrate_images/in-post01-what-are-the-stages-of-hiring-1024x885.png",
  },
  {
    id: 5,
    title: "Creating a Positive Workplace Culture",
    summary:
      "Happy employees are productive employees. Learn the key steps to building a culture people want to be part of.",
    date: "February 10, 2025",
    image:
      "https://danlok.com/wp-content/uploads/2020/06/Creating-A-Positive-Work-Environment-How-Your-Corporate-Culture-Can-Be-Supportive-Harmonious-and-Flexible.jpg",
  },
  {
    id: 6,
    title: "How Mann HR Helped 100+ Companies Grow",
    summary:
      "Explore real-world case studies where Mann HR Consultancy transformed hiring strategies and helped businesses scale fast.",
    date: "January 30, 2025",
    image:
      "https://hrforecast.com/wp-content/uploads/2022/02/Digital-frontiers.png",
  },
];

function Blog() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-12">
          Blog & Insights
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 group overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition duration-200 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.summary}
                </p>
                <button className="inline-block text-sm text-blue-600 font-semibold hover:underline transition">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
