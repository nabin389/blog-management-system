import {Link, useNavigate, useParams} from "react-router-dom"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
// import {useNavigate} from "react"//to redirect to home page after deletion of blog

// import Test2 from "../components/Test2"
const Single = ()=>{
  const redirect = useNavigate();
  const {id} = useParams();// this 
  // const {id} = useParams();
  // console.log("Nabin subedi");
  // console.log("Nabin ID:", id);
  // const [blog, setBlog] = useState[{}]; this 
  const [blog, setBlog] = useState({});

  const fetchSingleBlog = async ()=>{//api hit here
    // const response = await axios.get(`http://localhost:3000/api/blogs/${id}`);//this
    const response = await axios.get(`http://localhost:3000/api/blogs/${id}`);
    setBlog(response.data.data);
  }

  useEffect(()=>{ //this 
    fetchSingleBlog()
  }, []);

  const handleDelete = async()=>{
    await axios.delete(`http://localhost:3000/api/blogs/${id}`)
    //redirect to homepage after deletion 
    redirect("/home");
  }


    return(
        <>
    <div className="container">
      <div className="single-blog">
          <h2>{blog.blogTitle}</h2>
          <h4>{blog.blogSubTitle}</h4>
        <p>{blog.blogDescription}</p>

        <div className="blog-actions">
       <Link to="/home" className="btn">Back Home</Link>
        <Link className="btn" to = {`/update/${id}`}>Edit</Link>
        <button className="btn delete-btn" onClick={handleDelete}>Delete</button>

        
        </div>
      </div>
    </div>
          {/* <Test2 title="Single Blog"/> */}
        </>
    )
}
export default Single;