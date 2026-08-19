const express = require("express");
const {
  getAdminStats,
  banUser,
  unbanUser,
} = require("../controllers/adminController");

const router = express.Router();

router.get("/stats", getAdminStats);

router.put("/ban/:userId", banUser);
router.put("/unban/:userId", unbanUser);

module.exports = router;
