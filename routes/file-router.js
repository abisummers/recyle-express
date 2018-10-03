const express = require("express");
const fileUploader = require("../config/file-uploader");
const router = express.Router();

router.post(
  "/upload-image",
  fileUploader.single("imageFile"),

  (req, res, next) => {
    console.log("New file upload", req.file);

    if (!req.file) {
      next(new Error("no image uploaded"));
    } else {
      const { originalname, secure_url, format, width, height } = req.file;
      res.json({
        imageName: originalname,
        imageUrl: secure_url,
        format,
        width,
        height
      });
    }
  }
);
module.exports = router;
