async function handelgetAddBlog(req,res) {
    return res.render("Addblogs");
}


async function handelPostAddBlog(req,res) {
    console.log(req?.body)
    return res.end("meow");
}

module.exports={
    handelgetAddBlog,
    handelPostAddBlog
}