import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { FiMenu, FiX, FiUser, FiLogOut, FiEdit, FiHome } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
              TechDiscuss
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="nav-link flex items-center space-x-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200">
              <FiHome className="h-5 w-5" />
              <span>Home</span>
            </Link>
            {user ? (
              <>
                <Link to="/write" className="nav-link flex items-center space-x-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  <FiEdit className="h-5 w-5" />
                  <span>Write</span>
                </Link>
                <Link to={`/profile/${user._id}`} className="nav-link flex items-center space-x-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  <FiUser className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
                <button onClick={handleLogout} className="btn-primary flex items-center space-x-2">
                  <FiLogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="btn-secondary">Login</Link>
                <Link to="/register" className="btn-primary">Register</Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-3 space-y-3 bg-white dark:bg-gray-800 shadow-lg">
          <Link to="/" className="mobile-nav-link block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
            Home
          </Link>
          {user ? (
            <>
              <Link to="/write" className="mobile-nav-link block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Write
              </Link>
              <Link to={`/profile/${user._id}`} className="mobile-nav-link block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Profile
              </Link>
              <button onClick={handleLogout} className="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Logout
              </button>
            </>
          ) : (
            <div className="space-y-2 px-3">
              <Link to="/login" className="block w-full btn-secondary text-center">Login</Link>
              <Link to="/register" className="block w-full btn-primary text-center">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
