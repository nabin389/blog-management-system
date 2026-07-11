const Blog = require("../model/blogModel");
const createBlog = async(req, res)=>{
    const blogTitle = req.body.blogTitle
    const blogSubTitle = req.body.blogSubTitle
    const blogDescription = req.body.blogDescription

    if(!blogTitle || !blogSubTitle || !blogDescription){
     return res.status(400).json({
        message: "All fields are required"
     })    
    }

    await Blog.create({
        blogTitle : blogTitle, //here we can write only like this blogTitle, if key and value pair are same
        blogSubTitle : blogSubTitle,
        blogDescription : blogDescription        
    })
    res.status(200).json({
        message: "Blog created successfully"
    })
}

// Get all blogs controller 
const getAllBlogs =  async (req, res) => {
    const blogs = await Blog.find()
    res.status(200).json({
        message: "Blogs retrived successfully",
        data: blogs
    })
}

const getSingleBlog = async (req, res)=>{
    const id = req.params.id
    const singleBlog = await Blog.findById(id)
    if(!singleBlog){
        return res.status(404).json({
            message: "Blog not found"
        })
    }
    res.status(200).json({
        message: "Blog retrieved successfully",
        data: singleBlog
    })
}

// delete 
const deleteBlog = async (req, res)=>{
    const id = req.params.id
    await Blog.findByIdAndDelete(id)
    res.status(200).json({
        message: "Blog deleted successfully"
    })
}

// update Blog 
const updateBlog = async (req,res)=>{
    const id = req.params.id

    const blogTitle = req.body.blogTitle
    const blogSubTitle = req.body.blogSubTitle
    const blogDescription = req.body.blogDescription
    if(!blogTitle || !blogSubTitle || !blogDescription){
        return res.status(400).json({
            message: "All fields are required"
        })
    }
    
    await Blog.findByIdAndUpdate(id, {
        blogTitle,
        blogSubTitle,
        blogDescription
    })
    res.status(200).json({
        message: "Blog updated successfully"
    })
};

module.exports ={
    createBlog,
     getAllBlogs,
     getSingleBlog,
     deleteBlog,
     updateBlog
}

// module.exports = getAllBlogs; //this is exporting function 
// module.exports = {  //this is exporting object, not a function
//     createBlog,
//     getAllBlogs
// }
// 
