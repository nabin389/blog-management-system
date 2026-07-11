import {Link} from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  // Function to fetch blogs from the backend 
  const fetchBlogs = async ()=>{
    // const response = await axios.get("http://localhost:3000/api/blogs")
    const response = await axios.get("https://blog-management-system-xnag.onrender.com/api/blogs")
    // console.log(response);
    // console.log(response.data.data);
    setBlogs(response.data.data);
    // console.log(blogs)

  }

  //fetch the blogs when the component mounts
  useState(()=>{
    fetchBlogs()
  }, []) //Empty dependency array to run only once on mount
  // console.log(blogs)

  return(
    <>
    <h1>Home Page</h1>
    <div className="container">
      {blogs.map((blog, index)=>{
        return (
           <div className="blog-container">
        <div className="blog-card">
          <h2>{blog.blogTitle}</h2>
          <h4>{blog.blogSubTitle}</h4>

          <p>{blog.blogDescription}</p>
          {/* <Link to={`/single/${blog._id}`}>Read More</Link>  */}
          <Link className="read-btn" to={`/single/${blog._id}`}>Read More</Link> 
        </div>
      </div>
        )
      })}
    </div>
    </>
  )
}

export default Home