const router = require("express").Router();
const atcController = require("../controllers/atcController");
const { isAuthenticated } = require("../middlewares/auth");
const multer = require("multer");
const path = require("path");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/profilePic/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
});

router.get("/getAtc", atcController.getAtc);

router.get("/getProjectOffice", atcController.getProjectOffice);

router.get("/getStudent", atcController.getStudent);

router.put("/update", isAuthenticated, upload.single("image"), atcController.update);

module.exports = router;
