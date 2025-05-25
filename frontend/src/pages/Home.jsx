import axios from "axios";
import Footer from "../components/Footer";
import HomePosts from "../components/HomePosts";
import NavBar from "../components/NavBar";
import { URL } from "../url";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { UserContext } from "../context/UserContext";
import { FiSearch } from 'react-icons/fi';

const Home = () => {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts/" + search);
      // Sort posts by createdAt in descending order (most recent first)
      const sortedPosts = res.data.sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      );
      setPosts(sortedPosts);
      if (sortedPosts.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(true);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  // Filter posts based on search term
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (post.categories && post.categories.some(category => 
      category.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  );

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="main-content flex-grow">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search posts by title, description, or category..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white dark:bg-gray-800 dark:border-gray-700 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                />
              </div>
            </div>
          </div>

          {loader ? (
            <div className="h-[40vh] flex justify-center items-center">
              <Loader />
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <Link key={post._id} to={user ? `/posts/post/${post._id}` : "/login"}>
                  <HomePosts post={post} />
                </Link>
              ))}
            </div>
          ) : (
            <h3 className="text-center font-bold mt-16 text-lg text-gray-700 dark:text-gray-300">
              {searchTerm ? "No posts found matching your search" : "No Posts Available!"}
            </h3>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
