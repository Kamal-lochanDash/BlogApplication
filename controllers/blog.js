const Blog=require("../models/blog");


async function handelgetAddBlog(req,res) {
    return res.render("Addblogs");
}


async function handelPostAddBlog(req,res) {
    console.log(req?.user?._id)
    console.log(req?.body)
    console.log(req?.file)

    const{title,description,content}=req?.body;
   const blog= await Blog.create({
        title:title,
        description:description,
        content:content,
      createdBy:req?.user?._id,
      coverImageURL:`/uploads/${req?.file?.filename}`
    });
    return res.redirect("/")
}

module.exports={
    handelgetAddBlog,
    handelPostAddBlog
}