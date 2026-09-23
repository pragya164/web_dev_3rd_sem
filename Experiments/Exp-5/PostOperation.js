const express=require('express');
const app=express();

app.use(express.json());

let student=[
    {
        id: 1, name: "Rahul" , branch: "CSE"
    },
    {id: 2, name:"Aman", branch: "CSWE"}
];

app.get('/' , (req, res)=>{
    res.send("Server is running");
});

app.post('/student', (req, res)=> {
    const newStudent = req.body;
    student.push(newStudnet);
    res.student.status(201).json({message : "Student added successfully", stundent: newStudent})
});

app.listen(3005, ()=> {
    console.log("Server running at port 3005");
})