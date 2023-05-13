const router = require("express").Router();
const {
  getProject,
  getProjects,
  postProject,
  updateProject,
  deleteProject,
} = require("../controller/projectController");
router.get("/", getProjects);
router.get("/:id", getProject);
router.post("/", postProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;
