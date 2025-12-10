const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const rbac = require("../middlewares/rbac");

const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

router.get("/", auth, getProjects);

// Admin + Manager can CREATE
router.post("/", auth, rbac(["Admin", "Manager"]), createProject);

// Admin + Manager can UPDATE
router.put("/:id", auth, rbac(["Admin", "Manager"]), updateProject);

// Only Admin can DELETE
router.delete("/:id", auth, rbac(["Admin"]), deleteProject);

module.exports = router;
