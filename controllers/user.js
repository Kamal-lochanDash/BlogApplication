const User=require("../models/user")


async  function handelUserSignup(req,res){
  return res.render("signup");
}

async function handelUserLogin(req,res) {
   return res.render("login");
}

async function handelPostUserSignup(req,res) {
  const {fullName,email,password,confirmPassword}=req?.body;
  

  if(password!==confirmPassword){
    return res.render("signup",{message:"Try Again Password MissMatch"})
  }

 await User.create({
    fullName,
    email,
    password,
 })

 return res.redirect("/home")

}

async function handelPostUserLogin(req,res) {
  console.log(req.body);
  const {email,password}=req?.body;
  const user= await User.matchPassword(email,password);
  console.log(user);
  return res.redirect("/home");
}



module.exports={
    handelUserSignup,
    handelUserLogin,
    handelPostUserSignup,
    handelPostUserLogin
}