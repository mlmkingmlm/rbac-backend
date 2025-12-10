const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  try {
    const { title, description } = req.body;

    const project = await Project.create({
      title,
      description,
      createdBy: req.user.id
    });

    res.json(project);
  } catch (err) {
    res.status(500).json({ message: "Error creating project" });
  }
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find().populate("createdBy", "name role");
  res.json(projects);
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(project);
  } catch (err) {
    res.status(500).json({ message: "Error updating project" });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting project" });
  }
};
