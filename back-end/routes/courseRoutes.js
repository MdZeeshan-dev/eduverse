const express = require("express");
const { uploadCourseFiles } = require("../middlewares/multerConfig");
const {
  createCourse,
  getCourse,
  getAllCourses,
  getTrainerCourses,
  updateCourse,
  enrollCourse,
  getEnrolledCourses,
  deleteCourse,
  updateCourseApproval,
  getPendingCourses,
} = require("../controllers/courseController");
const protect = require("../middlewares/authMiddleware");
const mongoose = require("mongoose");

const router = express.Router();

router.post(
  "/create-course",
  protect(["trainer"]),
  uploadCourseFiles,
  createCourse,
);

router.get("/all-approved", getAllCourses);

router.put("/approval/:courseId", protect(["admin"]), updateCourseApproval);

router.get("/pending", protect(["admin"]), getPendingCourses);

router.get("/trainer", protect(["trainer", "admin"]), getTrainerCourses);
router.delete("/:courseId", protect(["trainer", "admin"]), deleteCourse);

router.post(
  "/enroll/:courseId",
  protect(["learner", "trainer", "admin", "examinee"]),
  enrollCourse,
);

router.get(
  "/enrolled",
  protect(["learner", "trainer", "admin", "examinee"]),
  getEnrolledCourses,
);

router.patch(
  "/:courseId",
  protect(["admin", "trainer"]),
  async (req, res, next) => {
    const { courseId } = req.params;

    if (!mongoose.isValidObjectId(courseId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid course ID" });
    }

    next();
  },
  uploadCourseFiles,
  updateCourse,
);

router.get(
  "/:id",
  async (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid course ID" });
    }
    next();
  },
  getCourse,
);

module.exports = router;
