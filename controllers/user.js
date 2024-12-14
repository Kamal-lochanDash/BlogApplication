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
  //console.log(req.body);
  const {email,password}=req?.body;
  try{
  
    const token= await User.matchPasswordAndGenerateToken(email,password);

  return res.cookie('token',token).redirect("/home");

  }catch(error){
    return res.render("login",{error:error.message})
  }
  
}



module.exports={
    handelUserSignup,
    handelUserLogin,
    handelPostUserSignup,
    handelPostUserLogin
}