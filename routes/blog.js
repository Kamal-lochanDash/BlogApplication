const {Router}=require("express");
const { handelgetAddBlog, handelPostAddBlog } = require("../controllers/blog");

const router=Router();



router.get('/add-new',handelgetAddBlog);
router.post('/add-blog',handelPostAddBlog)
module.exports=router;