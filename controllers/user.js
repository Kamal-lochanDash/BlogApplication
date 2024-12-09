const User=require("../models/user")


async  function handelUserSignup(req,res){
   res.render("signup");
}

async function handelUserLogin(req,res) {
    res.render("login");
}

async function handelPostUserSignup(req,res) {
  const {fullName,email,password,confirmPassword}=req?.body;
  console.log(req?.body)

  if(password!==confirmPassword){
    return res.render("signup",{message:"Try Again Password MissMatch"})
  }

 await User.create({
    fullName,
    email,
    password,
 })

 res.redirect("/home")

}

module.exports={
    handelUserSignup,
    handelUserLogin,
    handelPostUserSignup
}