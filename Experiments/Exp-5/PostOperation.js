const express = require('express');

const app = express();

app.use(express.json());

let student = [
    {
        id: 1,
        name: "Rahul",
        branch: "CSE"
    },
    {
        id: 2,
        name: "Aman",
        branch: "CSWE"
    }
];

// Home Route
app.get('/', (req, res) => {
    res.send("Server is running");
});

// Get All Students
app.get('/student', (req, res) => {
    res.json(student);
});

// Add New Student
app.post('/student', (req, res) => {
    const newStudent = req.body;

    student.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});

// Start Server
app.listen(3005, () => {
    console.log("Server Running at port 3005");
});