const express=require("express");
const path=require("path");
const app=express();
const userRouter=require("./routes/user")
const defaultRouter=require("./routes/home")
const mongoose=require("mongoose");
const cookieParser=require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");
const PORT=8000;
mongoose
.connect('mongodb://localhost:27017/ChroniQ')
.then((error)=>{;
    console.log("MongoDB connected")
})

app.set("view engine",'ejs')
app.set("views",path.resolve("./views"))
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"))

app.use("/user",userRouter)
app.use("/",defaultRouter)
app.listen(PORT,()=>{
    console.log(`Server started a port ${PORT}`)
})


