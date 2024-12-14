async function handelHomePage(req,res) {
console.log(req?.user)
    res.render("home",{
        user:req?.user,
    });
}

module.exports={
    handelHomePage,
}