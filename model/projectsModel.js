const mongoose = require('mongoose');

const projectsSchema=mongoose.Schema({
    projectname:{type:String,required:[true,"project name required"],unique:true},
    projectdescription:{type:String,required:[true,"project description required"]},
    technicalskills:{type:String,required:[true,"technical skills required"]},
},
{
    timestamps:true
}
)

module.exports=mongoose.model('Projects',projectsSchema)