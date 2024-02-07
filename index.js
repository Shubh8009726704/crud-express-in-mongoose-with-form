const { render } = require('ejs')
const express = require('express')
Student = require('./database.js') 
app = express()
port = 3000

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(port,()=>{console.log(`Server running on port no ${port}`)})

app.get('/',async(req,resp)=>{
    students = await Student.find()
    resp.render('index.ejs',{title:'CRUD Operation',students:students})
})

app.get('/register',((req,resp)=>{
    resp.render('register.ejs')
}))

app.post('/register',async(req,resp)=>{
    const {name,email,trade,age,address} = req.body;
    newStudent = new Student({
        name,email,trade,age,address
    });
    studentsave = await newStudent.save();
    resp.redirect('/')
})

app.get('/delete/:id',async(req,resp)=>{
    deleteStudent = await Student.findByIdAndDelete(req.params.id)
    resp.redirect('/')
})

app.get('/edit/:id',async(req,resp)=>{
    id = req.params.id;
    editStudent = await Student.findById({_id:id});
    if(editStudent==null){resp.redirect('/')}
    else{resp.render('edit.ejs',{editStudent:editStudent})}
})

app.post('/edit/:id',async(req,resp)=>{
    id = req.params.id;
    const {name,email,trade,age,address} = req.body;
    updateStudent = await Student.findByIdAndUpdate({_id:id},
    {name,email,trade,age,address},{new:true});
    resp.redirect('/')
})


 

