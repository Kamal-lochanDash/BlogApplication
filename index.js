const express=require("express");
const path=require("path");
const app=express();
const userRouter=require("./routes/user")
const PORT=8000;

app.set("view engine",'ejs')
app.set("views",path.resolve("./views"))


app.use("/user",userRouter)
app.listen(PORT,()=>{
    console.log(`Server started a port ${PORT}`)
})


