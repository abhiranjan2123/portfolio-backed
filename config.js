const mongodb=require("mongoose")

const dbConnect=async ()=>{
try{
    await mongodb.connect(process.env.DB_ENDPOINT).then(
        ()=>{
            console.log("succesfully connected to db ")
        }
    )
}catch(err){
    console.log("connection not established to db",err)
}


}

module.exports=dbConnect


