const {Router}=require("express");
const { handelUserSignup, handelUserLogin } = require("../controllers/user");

const router=Router();


router.get("/signup",handelUserSignup)
router.get("/login",handelUserLogin)
module.exports=router;
