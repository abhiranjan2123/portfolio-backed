const express=require('express');
const {getProjects,createProjects,updateProject,deleteProject}=require("../controller/projectsController")
const router=express.Router();


router.get("/",getProjects);

router.post("/",createProjects);

router.put("/:id",updateProject)

router.delete("/:id",deleteProject)

module.exports=router