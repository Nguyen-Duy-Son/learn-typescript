import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please provide the name Student"]
        },
        password:{
            type:String,
            required:[true,"Please provide the password Student"]
        },
        msv:{
            type:String,
            required:[true,"Please provide the msv of Student"]
        },
        address:{
            type:String,
            default:null,
        },
        
    },
    {
        timestamps: true,
    }
)
const Student = mongoose.model('Student',studentSchema);

export{Student};