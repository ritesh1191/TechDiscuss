import { useNavigate, useParams } from "react-router-dom";
import Comment from "../components/Comment";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { FiEdit2, FiTrash2, FiClock, FiUser, FiMessageCircle } from "react-icons/fi";
import axios from "axios";
import { URL, IF } from "../url";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

const PostDetails = () => {
  const postId = useParams().id;
  const [post, setPost] = useState({});
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const fetchPost = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/posts/" + postId);
      setPost(res.data);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(true);
    }
  };

  const handleDeletePost = async () => {
    try {
      const res = await axios.delete(URL + "/api/posts/" + postId, {
        withCredentials: true,
      });
      navigate("/");
      toast.success("Post Deleted Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  const fetchPostComments = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/comments/post/" + postId);
      // Sort comments by createdAt in descending order (most recent first)
      const sortedComments = res.data.sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      );
      setComments(sortedComments);
      setLoader(false);
    } catch (err) {
      setLoader(true);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPostComments();
  }, [postId]);

  const postComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        URL + "/api/comments/create",
        {
          comment: comment,
          author: user.username,
          postId: postId,
          userId: user._id,
        },
        { withCredentials: true }
      );
      
      // Instead of reloading the page, fetch comments and clear the input
      await fetchPostComments();
      setComment("");
      toast.success("Commented Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to post comment");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="main-content flex-grow bg-gray-50 dark:bg-gray-900">
        {loader ? (
          <div className="h-[80vh] flex justify-center items-center w-full">
            <Loader />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto px-4 py-8">
            <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
              <header className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {post.title}
                  </h1>
                  {user?._id === post?.userId && (
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => navigate("/edit/" + postId)}
                        className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      >
                        <FiEdit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleDeletePost}
                        className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                      >
                        <FiTrash2 className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <FiUser className="w-4 h-4" />
                    <span>@{post.username}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiClock className="w-4 h-4" />
                    <time dateTime={post.updatedAt}>
                      {new Date(post.updatedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </header>

              <div className="prose dark:prose-invert max-w-none mb-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {post.desc}
                </p>
              </div>

              {post.categories?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.categories.map((category, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
            </article>

            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                <FiMessageCircle className="w-5 h-5 mr-2" />
                Discussions
              </h2>

              <div className="space-y-6 mb-8">
                {comments?.map((c) => (
                  <Comment key={c._id} c={c} post={post} />
                ))}
              </div>

              <form onSubmit={postComment} className="flex flex-col md:flex-row gap-4">
                <input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="input-field md:flex-1"
                  type="text"
                  placeholder="Add to the discussion"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary md:w-auto whitespace-nowrap px-6"
                >
                  Post Comment
                </button>
              </form>
            </section>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default PostDetails;
