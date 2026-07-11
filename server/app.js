

const express = require("express")
// const { Connection } = require("mongoose")
const app = express() //create instance of express
const mongoose = require("mongoose")//this is not needed here
// const Blog = require("./model/blogModel") //this is not needed here
const connectToDb = require("./database")
// const createBlog = require("./controllers/blogController") //importing function not works for object
// const { createBlog, getAllBlogs, getSingleBlog, deleteBlog, updateBlog} = require("./controllers/blogController") //this is also not needed here after the use of routes
const blogRoutes = require('./routes/blogRoutes');

//Cors
const cors = require("cors");

app.use(cors({
    // origin: "http://localhost:5173", //allow requests from this origin
    // optionsSuccessStatus: 200  
    origin: "https://blog-management-system-blue.vercel.app",
    optionsSuccessStatus: 200 
}))

// it is used when network issues occurs
// const dns = require("dns")
// dns.setServers(["8.8.8.8"], ["1.1.1.1"])

// parse json data 
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// app.get("/", (req, res)=>{
//     res.send("We're lieaning web development with express js!")
// })
// app.get("/about", (req, res)=>{
//     res.send("This is about page")
// })

// app.get("/signup", (req, res)=>{
//     res.send("<h2>This is signup page</h2>")
// })

// Create blog 
// app.post("/blogs", async(req, res)=>{
//     const blogTitle = req.body.blogTitle
//     const blogSubTitle = req.body.blogSubTitle
//     const blogDescription = req.body.blogDescription

//     if(!blogTitle || !blogSubTitle || !blogDescription){
//      return res.status(400).json({
//         message: "All fields are required"
//      })   
//     }

//     await Blog.create({
//         blogTitle : blogTitle, //here we can write only like this blogTitle, if key and value pair are same
//         blogSubTitle : blogSubTitle,
//         blogDescription : blogDescription        
//     })
//     res.status(200).json({
//         message: "Blog created successfully"
//     })
// })


// // DB Connection
// const dbURI = "mongodb+srv://subedinabin389_db_user:HIzOPgzBjJr6qjMH@cluster0.jenzl6h.mongodb.net/"

// async function connectToDb(){
//     try{
//         await mongoose.connect(dbURI)
//         console.log("Connected to MangoDB")
//     } catch(error){
//         console.error("Error connecting to MongoDB:", error)
//     }
// }
// connectToDb()
connectToDb();//writing database code on seperate folder's file

// Create blog 
// app.post("/blogs", createBlog); -

// // 23started 
// // Get all blogs 
// // app.get("/blogs", async (req, res) => {
// //     const blogs = await Blog.find()
// //     res.status(200).json({
// //         message: "Blogs retrived successfully",
// //         data: blogs
// //     })
// // })


// // 24started 
// // single get 

// app.get("/blogs",getAllBlogs); -

// // app.get("/blogs/:id", async (req, res)=>{
// //     const id = req.params.id
// //     const singleBlog = await Blog.findById(id)
// //     if(!singleBlog){
// //         return res.status(404).json({
// //             message: "Blog not found"
// //         })
// //     }
// //     res.status(200).json({
// //         message: "Blog retrieved successfully",
// //         data: singleBlog
// //     })
// // } )

// // 25started 
// // Delete a blog 

// app.get("/blogs/:id", getSingleBlog); -

// // app.delete("/blogs/:id", async (req, res)=>{
// //     const id = req.params.id
// //     await Blog.findByIdAndDelete(id)
// //     res.status(200).json({
// //         message: "Blog deleted successfully"
// //     })
// // })
// app.delete("/blogs/:id", deleteBlog); -

// // 26started 
// // Update a blog 

// // app.patch("/blogs/:id", async (req,res)=>{
// //     const id = req.params.id

// //     const blogTitle = req.body.blogTitle
// //     const blogSubTitle = req.body.blogSubTitle
// //     const blogDescription = req.body.blogDescription
// //     if(!blogTitle || !blogSubTitle || !blogDescription){
// //         return res.status(400).json({
// //             message: "All fields are required"
// //         })
// //     }
    
// //     await Blog.findByIdAndUpdate(id, {
// //         blogTitle,
// //         blogSubTitle,
// //         blogDescription
// //     })
// //     res.status(200).json({
// //         message: "Blog updated successfully"
// //     })
// // })

// // Server Starting 

// app.patch("/blogs/:id",updateBlog); -
app.use('/api', blogRoutes);

const port = 3000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

