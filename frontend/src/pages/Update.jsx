import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Update = () => {
  const { id } = useParams();
  // const [singleBlog, setSingleBlog] = useState({});
  const navigate = useNavigate();

  //   const [blog, setBlog] = useState({
  //     //states are immutable
  //     blogTitle: "",
  //     blogSubTitle: "",
  //     blogDescription: "",
  //   });

  // const [blog, setBlog] = useState({});//this creates error so i initialize by another method 
  const [blog, setBlog] = useState({
    blogTitle: "",
    blogSubTitle: "",
    blogDescription: "",  
  });

  const fetchSingleBlog = async () => {
    //api hit here
    const response = await axios.get(`http://localhost:3000/api/blogs/${id}`);
    setBlog(response.data.data);
  };

  useEffect(() => {
    //this
    fetchSingleBlog();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value)
    setBlog({
      ...blog, //spread operator
      [name]: value,
    });
  };
  console.log(blog);

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent the default form submission
    const response = await axios.patch(`http://localhost:3000/api/blogs/${id}`, blog);
    // redirect("/home"); //this i have include over here (this doesnot works)
    if(response.status === 200){
    alert("Blog Edited successfully");
  }else{
    alert("Failed to Edit blog");
  }
    navigate("/home");//now i have written this

  };

  return (
    <>
      <h1>Create Blog Page</h1>
      <div className="create-blog-container">
        <div className="create-blog-card">
          <h1>Update Blog</h1>

          <form className="create-blog-form" onSubmit={handleSubmit}>
            {/* here onSubmit is written  */}
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                placeholder="Edit blog title"
                name="blogTitle" //this
                onChange={handleChange}
                value={blog.blogTitle}
                // onChange={(e)=> e.target.value}
              />
            </div>

            <div className="form-group">
              <label>Subtitle</label>
              <input
                type="text"
                placeholder="Edit blog subtitle"
                name="blogSubTitle"
                onChange={handleChange}
                value={blog.blogSubTitle}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="10"
                placeholder="Edit your blog here..."
                name="blogDescription"
                onChange={handleChange}
                value={blog.blogDescription}
              ></textarea>
            </div>

            {/* <button type="submit" onClick={handleSubmit}> in place of this
              Create Blog
            </button> */}
            <button type="submit">Edit Blog</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Update;
