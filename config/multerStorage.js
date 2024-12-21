const multer=require("multer");
const path=require("path")

const storages=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.resolve("./public/uploads"));
    },

    filename: function(req,file,cb){
        const filename=`${Date.now()}-${file.originalname}`;
        cb(null,filename);
    },


})


const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true); // Accept the file
    } else {
      cb(new Error('Only image files are allowed!'), false); // Reject the file
    }
  };

const upload=multer({storage:storages,fileFilter});

module.exports=upload;