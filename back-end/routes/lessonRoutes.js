const express = require("express");
const {
  createLesson,
  deleteLesson,
} = require("../controllers/lessonController");

const protect = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multerConfig");

const router = express.Router();

router.post(
  "/create/:courseId",
  protect(["trainer"]),
  upload.single("video"),
  createLesson,
);

router.delete("/delete/:lessonId", protect(["trainer"]), deleteLesson);

module.exports = router;
