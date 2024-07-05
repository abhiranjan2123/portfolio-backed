const Project = require("../model/projectsModel");

const getProjects = async (req, res) => {
  try {
    const result = await Project.find({});
    res.status(200).json({ result });
  } catch (err) {
    res.json({ message: "error" });
  }
};

const createProjects = async (req, res) => {
  const { projectname, projectdescription, technicalskills } = req.body;

  try {
    const project = new Project({
      projectname,
      projectdescription,
      technicalskills,
    });

    const result = await project.save();

    res.status(200).json({ result });
  } catch (err) {
    res.json({ message: "error" });
  }
};


const updateProject = async (req, res) => {
    const { projectname, projectdescription, technicalskills } = req.body;
  
    try {
      const result = await Project.findByIdAndUpdate(
        req.params.id,{projectname,projectdescription,technicalskills},{new:true}
      )

      res.status(200).json({ result });
    } catch (err) {
      res.json({ message: "error" });
    }
  };


  const deleteProject = async (req, res) => {  
    try {
      const result = await Project.findByIdAndDelete(
        req.params.id
      )

      res.status(200).json({success:true,data:result});
    } catch (err) {
      res.json({ message: "error" });
    }
  };


module.exports = { getProjects, createProjects,updateProject,deleteProject};
