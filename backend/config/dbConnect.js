const mongoose=require("mongoose")

exports.connect=()=>{
   mongoose.connect(process.env.DB_URL).then((con)=>{
    console.log(`database is connect ${con.connection.host}`)
   });

}