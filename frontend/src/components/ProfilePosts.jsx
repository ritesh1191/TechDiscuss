import { FiClock, FiUser } from 'react-icons/fi';

const ProfilePosts = ({ p }) => {
  // console.log(p)
  return (
    <div className="card overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            {p.title}
          </h2>

          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <FiUser className="w-4 h-4" />
              <span>@{p.username}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiClock className="w-4 h-4" />
              <time dateTime={p.updatedAt}>
                {new Date(p.updatedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
            {p.desc}
          </p>

          {p.categories?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {p.categories.map((category, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePosts;
