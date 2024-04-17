import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors'
import { studentRoute } from "./routes/student.route.js";
const port = 3000;
const app: Express = express();
dotenv.config();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());
app.use(studentRoute)

const mongoURI = process.env.DB_URL || "mongodb://127.0.0.1:27017/Learn-typescript";
mongoose
    .connect(mongoURI)
    .then(
        () =>{
        console.log("Connect database successfully!");
        }
    )
    .catch((err) => {
        console.log(err);
    });
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
      });