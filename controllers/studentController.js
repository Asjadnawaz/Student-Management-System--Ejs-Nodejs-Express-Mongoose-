import Student from "../models/Students.js";



const calculateResult = (data) => {
const total = parseInt(data.subject1) + parseInt(data.subject2) + parseInt(data.subject3) + parseInt(data.subject4) + parseInt(data.subject5);
const percentage = (total / 500) * 100;
let grade = "Fail";


if (percentage >= 80) grade = "A";
else if (percentage >= 60) grade = "B";
else if (percentage >= 40) grade = "C";


return { total, percentage, grade };
};


export const addStudent = async (req, res) => {
    const result = calculateResult(req.body);
    await Student.create({ ...req.body, ...result });
    res.redirect("/students");
};

export const getStudents = async (req, res) => {
    const students = await Student.find();
    
    if(students.length === 0) {
        res.render("list", { students, message: "No students found." });
    } else {
        res.render("list", { students });
    }
};


export const getStudent = async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.render("detail", { student });
};

export const getStudentForEdit = async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.render("edit", { student });
};


export const updateStudent = async (req, res) => {
    const result = calculateResult(req.body);
    await Student.findByIdAndUpdate(req.params.id, { ...req.body, ...result });
    res.redirect("/students");
};


export const deleteStudent = async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);

    res.redirect("/students");


};