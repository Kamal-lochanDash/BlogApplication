const {Router}=require("express");
const { handelUserSignup, handelUserLogin, handelPostUserSignup, handelPostUserLogin, handelPostUserLogout } = require("../controllers/user");

const router=Router();


router.get("/signup",handelUserSignup)
router.get("/login",handelUserLogin)
router.post("/login",handelPostUserLogin)
router.post("/signup",handelPostUserSignup)
router.post("/logout",handelPostUserLogout)
module.exports=router;
