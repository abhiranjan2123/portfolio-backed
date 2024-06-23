const mongo=require("mongoose")

const contactDetails=new mongo.Schema({
    "name":{type:String,require:true},
    "email":{type:String,unique:true},
    "phone":{type:String,require:[true,"phone number required"]},
    
},
{ timestamps: true }  
)


module.exports=mongo.model('Contact',contactDetails)