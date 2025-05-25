import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProfilePosts from "../components/ProfilePosts";
import axios from "axios";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { FiUser, FiMail, FiEdit3, FiTrash2, FiSearch } from 'react-icons/fi';

const Profile = () => {
  const param = useParams().id;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [updated, setUpdated] = useState(false);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(URL + "/api/users/" + user._id);
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUserUpdate = async () => {
    setUpdated(false);
    try {
      const res = await axios.put(
        URL + "/api/users/" + user._id,
        { username, email, password },
        { withCredentials: true }
      );
      // console.log(res.data)
      setUpdated(true);
      navigate("/");
      toast.success("User Updated Successfully");
    } catch (err) {
      console.log(err);
      setUpdated(false);
    }
  };

  const handleUserDelete = async () => {
    try {
      const res = await axios.delete(URL + "/api/users/" + user._id, {
        withCredentials: true,
      });
      setUser(null);
      navigate("/");
      toast.success("User Deleted Successfully");
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(user)
  const fetchUserPosts = async () => {
    try {
      const res = await axios.get(URL + "/api/posts/user/" + user._id);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [param]);

  useEffect(() => {
    fetchUserPosts();
  }, [param]);

  // Filter posts based on search term
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.categories.some(category => 
      category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="main-content flex-grow bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Profile Section */}
            <div className="w-full lg:w-1/3 order-2 lg:order-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Profile Settings
                </h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="username" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      Username
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input-field pl-10"
                        placeholder="Your username"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field pl-10"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={handleUserUpdate}
                      className="btn-primary flex-1 inline-flex items-center justify-center"
                    >
                      <FiEdit3 className="w-4 h-4 mr-2" />
                      Update Profile
                    </button>
                    <button
                      type="button"
                      onClick={handleUserDelete}
                      className="btn-secondary bg-red-600 hover:bg-red-700 text-white flex-1 inline-flex items-center justify-center"
                    >
                      <FiTrash2 className="w-4 h-4 mr-2" />
                      Delete Account
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Posts Section */}
            <div className="w-full lg:w-2/3 order-1 lg:order-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Your Posts
                  </h2>
                  
                  {/* Search Bar */}
                  <div className="relative w-full sm:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiSearch className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search posts..."
                      className="input-field pl-10 w-full"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  {filteredPosts.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-600 dark:text-gray-400">
                        {searchTerm ? "No posts found matching your search" : "No posts available"}
                      </p>
                    </div>
                  ) : (
                    filteredPosts.map((p) => (
                      <Link 
                        key={p._id} 
                        to={user ? `/posts/post/${p._id}` : "/login"}
                        className="block transition-transform hover:scale-[1.02] duration-200"
                      >
                        <ProfilePosts p={p} />
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
