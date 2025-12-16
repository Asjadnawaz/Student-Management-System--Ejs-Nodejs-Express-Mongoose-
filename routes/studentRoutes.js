import express from "express";
import {
addStudent,
getStudents,
getStudent,
getStudentForEdit,
updateStudent,
deleteStudent
} from "../controllers/studentController.js";


const router = express.Router();


router.get("/", (req, res) => res.render("index"));
router.get("/add", (req, res) => res.render("add"));
router.post("/add", addStudent);
router.get("/students", getStudents);
router.get("/student/:id", getStudent);
router.get("/edit/:id", getStudentForEdit);
router.post("/edit/:id", updateStudent);
router.get("/delete/:id", deleteStudent);


export {
    router
}