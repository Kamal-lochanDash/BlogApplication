async  function handelUserSignup(req,res){
   res.render("signup");
}

async function handelUserLogin(req,res) {
    res.render("login");
}

module.exports={
    handelUserSignup,
    handelUserLogin
}