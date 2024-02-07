const mongoose = require('mongoose')

// connection
mongoose.connect('mongodb+srv://shubham:DT5SvH6z7hEx1gfs@crud.psxambf.mongodb.net/CrudExpress').then(()=>{
    console.log('Connection Successfully')
}).catch((error)=>{
    console.log(error)
})

// Schema 
StudentSchema = mongoose.Schema({
    name:String,
    email:String,
    // trade:String,
    age:Number,
    address:String
})

// model 
StudentModel = mongoose.model('student',StudentSchema)

module.exports = StudentModel


