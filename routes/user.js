const {Router}=require("express");
const { handelUserSignup, handelUserLogin, handelPostUserSignup } = require("../controllers/user");

const router=Router();


router.get("/signup",handelUserSignup)
router.get("/login",handelUserLogin)
router.post("/signup",handelPostUserSignup)
module.exports=router;
