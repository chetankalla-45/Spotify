// import multer from "multer";

// const storage = multer.diskStorage({
//     fileName: function(req,file,callback){
//         callback(null,file.originalname)
//     }
// })

// const upload = multer({storage});

// export default upload;

import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "uploads/");
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

export default upload;