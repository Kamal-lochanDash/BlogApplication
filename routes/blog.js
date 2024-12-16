const {Router}=require("express");
const { handelgetAddBlog } = require("../controllers/blog");

const router=Router();



router.get('/add-new',handelgetAddBlog);
module.exports=router;