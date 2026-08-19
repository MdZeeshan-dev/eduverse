const express = require("express");
const {
  createExam,
  addQuestions,
  getAllExams,
  getExamQuestions,
  enrollExam,
  getEnrolledExams,
  submitResult,
  getSubmittedResults,
  getCreatedExams,
  generateCertificate,
  updateExam,
  updateQuestion,
  deleteExam,
  deleteQuestion,
} = require("../controllers/examController");

const protect = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create", protect(["trainer", "admin"]), createExam);
router.post("/add-questions", protect(["trainer", "admin"]), addQuestions);

router.delete("/:examId", protect(["trainer", "admin"]), deleteExam);
router.delete("/:questionId", protect(["trainer", "admin"]), deleteQuestion);

router.put("/update-exam/:examId", protect(["trainer", "admin"]), updateExam);

router.put(
  "/update-question/:questionId",
  protect(["trainer", "admin"]),
  updateQuestion,
);

router.get(
  "/all",
  protect(["trainer", "examinee", "admin", "learner"]),
  getAllExams,
);

router.get(
  "/:examId/questions",
  protect(["trainer", "examinee", "admin", "learner"]),
  getExamQuestions,
);

router.post(
  "/enroll/:examId",
  protect(["learner", "examinee", "admin"]),
  enrollExam,
);

router.get(
  "/enrolledExam",
  protect(["learner", "examinee", "admin"]),
  getEnrolledExams,
);

router.post(
  "/submit-result",
  protect(["learner", "examinee", "trainer", "admin"]),
  submitResult,
);

router.get(
  "/submitted-results",
  protect(["learner", "examinee", "trainer", "admin"]),
  getSubmittedResults,
);

router.get("/created-exams", protect(["trainer", "admin"]), getCreatedExams);

router.get(
  "/:examId/certificate",
  protect(["learner", "examinee", "trainer", "admin"]),
  generateCertificate,
);

module.exports = router;
