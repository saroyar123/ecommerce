const mongoose=require("mongoose")

exports.connect=()=>{
   mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then((con)=>{
    console.log(`database is connect ${con.connection.host}`)
   });

}