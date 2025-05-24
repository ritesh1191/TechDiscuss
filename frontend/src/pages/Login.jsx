import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import axios from "axios";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";
import toast from "react-hot-toast";
import NavBar from "../components/NavBar";
import { FiMail, FiLock } from 'react-icons/fi';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        URL + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      setUser(res.data);
      navigate("/");
      toast.success("User Login Successfully");
    } catch (err) {
      setError(true);
      toast.error("Invalid Credentials");
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="main-content flex-grow flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-md px-6 py-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg m-4 transform transition-all duration-300 hover:shadow-xl">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Welcome Back
          </h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-10"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-10"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-3 text-lg font-semibold"
            >
              Sign In
            </button>

            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              New to TechDiscuss?{" "}
              <Link 
                to="/register" 
                className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
              >
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
