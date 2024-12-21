async function handelHomePage(req,res) {

    res.render("home",{
        user:req?.user,
    });
}

module.exports={
    handelHomePage,
}