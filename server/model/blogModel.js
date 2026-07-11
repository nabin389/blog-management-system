// const mongoose = require('mongoose');

// // from here 




// const blogSchema = new mongoose.Schema({//creating a schema for the blog model
//     blogTitle:{
//         type: String,
//         require: true
//     },
//     blogSubTitle:{
//         type: String,
//         require: true
//     },
//     blogDescription:{
//         type:String,
//         require: true
//     }
// })

// const Blog = mongoose.model('Blog', blogSchema); //creating a model named Blog using the blogSchema

// module.exports = Blog; //exporting the Blog model to be used in other parts of the application

const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({
    blogTitle:{
        type: String,
        require: true
    },
    blogSubTitle:{
        type: String,
        require: true
    },
    blogDescription:{
        type: String,
        require: true
    }
},{
    timestamps: true
}

)
const Blog = mongoose.model('Blog', blogSchema)

    module.exports = Blog;