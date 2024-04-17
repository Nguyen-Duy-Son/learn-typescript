import { createStudent,deleteStudentById,getStudentById,getStudents, updateStudentById } from "../controllers/student.controller.js";
import express from "express";

const studentRoute = express.Router();

studentRoute
    .route('/students')
    .get(getStudents)
    .post(createStudent)
studentRoute
    .route('/students/:studentId')
    .get(getStudentById)
    .delete(deleteStudentById)
    .put(updateStudentById)
export {studentRoute};