const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "user_image") {
      cb(null, "./public/User/");
    } else if (file.fieldname === "blog_image") {
      cb(null, "./public/Blogs/");
    } else if (file.fieldname === "product_image") {
      cb(null, "./public/Product/");
    }
    else if (file.fieldname === "chat_attachment") {
      cb(null, "./public/Chat/");
    }
  },
  filename: function (req, file, cb) {
    if (file.fieldname === "user_image") {
      const filename = file.originalname.split(" ").join("-");
      cb(null, `${filename}`);
    } else if (file.fieldname === "blog_image") {
      const filename = file.originalname.split(" ").join("-");
      cb(null, `${filename}`);
    } else if (file.fieldname === "product_image") {
      const filename = file.originalname.split(" ").join("-");
      cb(null, `${filename}`);
    } else if (file.fieldname === "chat_attachment") {
      const filename = file.originalname.split(" ").join("-");
      cb(null, `${filename}`);
    }
  },
});

const upload = multer({
  storage: storage,
}).fields([
  { name: "user_image", maxCount: 8 },
  { name: "blog_image", maxCount: 8 },
  { name: "product_image", maxCount: 8 },
  { name: "chat_attachment", maxCount: 8 },
]);

const user = multer({
  storage : storage,
}).single('user_image')

module.exports = { upload , user };