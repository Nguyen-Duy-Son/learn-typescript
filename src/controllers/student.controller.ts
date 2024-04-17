import { Student } from "../models/student.model.js";
import { Request, Response } from "express";
import httpStatus from "http-status";

const createStudent = async (req: Request, res: Response) => {
    const { name,password, msv, address } = req.body;
    const checkStudent = await Student.findOne({ name: name });
    if (checkStudent) {
        res.status(httpStatus.BAD_REQUEST).json({
            code: httpStatus.BAD_REQUEST,
            message: "Create Student failed!"
        });
    }
    else {
        const newStudent = await Student.create(req.body);
        res.status(httpStatus.CREATED).json({
            code: httpStatus.CREATED,
            message: "Create Student successful!",
            student: newStudent
        });
    }

}
const getStudents = async (req: Request, res: Response) => {
    const students = await Student.find();
    if (!students) {
        res.status(httpStatus.NOT_FOUND).json({
            code: httpStatus.NOT_FOUND,
            message: "students not found!"
        });
    }
    else {
        res.status(httpStatus.OK).json({
            code: httpStatus.OK,
            message: "get Students successful!",
            data: students
        });
    }

}
const getStudentById = async (req: Request, res: Response) => {
    const {studentId} = req.params;
    const student = await Student.findById(studentId);
    if (!student) {
        res.status(httpStatus.NOT_FOUND).json({
            code: httpStatus.NOT_FOUND,
            message: "student not found!"
        });
    }
    else {
        res.status(httpStatus.OK).json({
            code: httpStatus.OK,
            message: "get StudentByID successful!",
            data: student
        });
    }
}
const deleteStudentById = async (req: Request, res: Response) => {
    const {studentId} = req.params;
    const deletedStudent = await Student.findByIdAndDelete(studentId);
    if (!deletedStudent) {
        res.status(httpStatus.NOT_FOUND).json({
            code: httpStatus.NOT_FOUND,
            message: "student not found!"
        });
    }
    else {
        res.status(httpStatus.OK).json({
            code: httpStatus.OK,
            message: "delete StudentByID successful!",
            data: deletedStudent
        });
    }
}
const updateStudentById = async (req: Request, res: Response) => {
    const {studentId} = req.params;
    const studentBody = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(studentId,studentBody,{new:true});
    if (!updatedStudent) {
        res.status(httpStatus.NOT_FOUND).json({
            code: httpStatus.NOT_FOUND,
            message: "student not found!"
        });
    }
    else {
        res.status(httpStatus.OK).json({
            code: httpStatus.OK,
            message: "update StudentByID successful!",
            data: updatedStudent
        });
    }
}
export { createStudent, getStudents, getStudentById ,deleteStudentById,updateStudentById };