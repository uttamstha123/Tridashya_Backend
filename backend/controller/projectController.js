const Project = require("../models/projectModel");
const asyncHandler = require("express-async-handler");

// @route project /api/project/
const postProject = asyncHandler(async (req, res) => {
  const newProject = new Project(req.body);
  try {
    const savedProject = await newProject.save();
    res.status(200).json(savedProject);
  } catch (err) {
    res.status(401).json(err);
  }
});

// @route PUT /api/project/:id
const updateProject = asyncHandler(async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project.userId === req.body.userId) {
      await Project.updateOne({ $set: req.body });
      res.status(200).json(project);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// @route DELETE /api/project/:id
const deleteProject = asyncHandler(async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    // !!! need to add userId field in Project model
    //  if (project.userId === req.body.userId) {
      await Project.deleteOne({_id: req.params.id});
      res.status(200).json(project);
    // } else {
      // res.status(403).json("You can only delete your own projects");
    // }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// @route GET /api/project/
const getProjects = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// @route GET /api/project/:id
const getProject = asyncHandler(async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = {
  postProject,
  updateProject,
  deleteProject,
  getProjects,
  getProject,
};
