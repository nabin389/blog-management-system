import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; //this i have added for redirect
const Create = () => {
   const navigate = useNavigate(); //this is also needed for redirect
  const [blog, setBlog] = useState({
    //states are immutable
    blogTitle: "",
    blogSubTitle: "",
    blogDescription: "",
  });

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
    const response = await axios.post("http://localhost:3000/api/blogs", blog);

    if(response.status === 200){
      alert("Blog created successfully");
    }else{
      alert("Failed to create blog");
    }
    navigate("/home");//this redrict into home page
  };

  return (
    <>
      <h1>Create Blog Page</h1>
      <div className="create-blog-container">
        <div className="create-blog-card">
          <h1>Create New Blog</h1>

          <form className="create-blog-form"
          onSubmit = {handleSubmit}>
            {/* here onSubmit is written  */}
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                placeholder="Enter blog title"
                name="blogTitle" //this
                onChange={handleChange}
                // onChange={(e)=> e.target.value}
              />
            </div>

            <div className="form-group">
              <label>Subtitle</label>
              <input
                type="text"
                placeholder="Enter blog subtitle"
                name="blogSubTitle"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="10"
                placeholder="Write your blog here..."
                name="blogDescription"
                onChange={handleChange}
              ></textarea>
            </div>

            {/* <button type="submit" onClick={handleSubmit}> in place of this
              Create Blog
            </button> */}
            <button type="submit">
              Create Blog
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Create;
