import { Link } from "react-router-dom";
import { FiClock, FiUser } from 'react-icons/fi';

const HomePosts = ({ post }) => {
  return (
    <div className="card w-full mb-8 overflow-hidden fade-in">
      <Link to={`/posts/post/${post._id}`}>
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          {post.photo && (
            <div className="md:w-1/3">
              <img
                src={post.photo}
                alt={post.title}
                className="w-full h-48 md:h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          
          {/* Content Section */}
          <div className={`flex-1 p-6 ${post.photo ? 'md:w-2/3' : 'w-full'}`}>
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories.map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              {post.title}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {post.desc}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <FiUser className="w-4 h-4" />
                <span>{post.username}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <FiClock className="w-4 h-4" />
                <span>{new Date(post.updatedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomePosts;
