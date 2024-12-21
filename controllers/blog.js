async function handelgetAddBlog(req,res) {
    return res.render("Addblogs");
}


async function handelPostAddBlog(req,res) {
    console.log(req?.body)
    console.log(req?.file)
    return res.end("meow");
}

module.exports={
    handelgetAddBlog,
    handelPostAddBlog
}