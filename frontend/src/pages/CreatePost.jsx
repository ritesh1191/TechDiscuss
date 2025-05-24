import Footer from "../components/Footer";
import { ImCross } from "react-icons/im";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { URL } from "../url";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import toast from "react-hot-toast";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(UserContext);
  const [cat, setCat] = useState(null);
  const [cats, setCats] = useState([]);

  const navigate = useNavigate();

  const deleteCategory = (i) => {
    let updatedCats = [...cats];
    updatedCats.splice(i, 1);
    setCats(updatedCats);
    toast.success("Deleted Category Successfully");
  };

  const addCategory = () => {
    let updatedCats = [...cats];
    updatedCats.push(cat);
    setCat("");
    setCats(updatedCats);
    toast.success("Added Category Successfully");
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      desc,
      username: user.username,
      userId: user._id,
      categories: cats,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("img", filename);
      data.append("file", file);
      post.photo = filename;

      //img upload
      try {
        const imgUpload = await axios.post(URL + "/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    //post upload
    try {
      const res = await axios.post(URL + "/api/posts/create", post, {
        withCredentials: true,
      });
      navigate("/posts/post/" + res.data._id);
      toast.success("Post Created Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="main-content flex-grow">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6">
          <h1 className="font-bold text-2xl mb-6">Create a Post</h1>

          <form className="w-full flex flex-col space-y-6">
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Post Title"
              className="input-field"
            />

            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <input
                  value={cat}
                  onChange={(e) => setCat(e.target.value)}
                  className="input-field"
                  type="text"
                  placeholder="Enter Post Category"
                />
                <button
                  type="button"
                  onClick={addCategory}
                  className="btn-primary whitespace-nowrap"
                >
                  Add Category
                </button>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {cats?.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
                  >
                    <span>{c}</span>
                    <button
                      type="button"
                      onClick={() => deleteCategory(i)}
                      className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
                    >
                      <ImCross className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <textarea
              onChange={(e) => setDesc(e.target.value)}
              rows={10}
              className="input-field"
              placeholder="Write Post Description"
            />
            
            <div className="flex justify-center">
              <button
                onClick={handleCreate}
                className="btn-primary w-full md:w-1/3"
              >
                Create Post
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreatePost;
