const {Router}=require("express");
const { handelgetAddBlog, handelPostAddBlog } = require("../controllers/blog");
const upload = require("../config/multerStorage");

const router=Router();



router.get('/add-new',handelgetAddBlog);
router.post('/add-blog',upload.single('coverImage'),handelPostAddBlog);
module.exports=router;