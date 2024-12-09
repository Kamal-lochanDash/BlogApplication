const {Router}=require("express");
const { handelUserSignup } = require("../controllers/user");

const router=Router();


router.get("/signin",handelUserSignup)
module.exports=router;
