const Router=require("express");
const { handelHomePage } = require("../controllers/home");

const router=Router();
router.get("/",(req,res)=>{
    return res.redirect("/home")
})
router.get("/home",handelHomePage);

module.exports=router;