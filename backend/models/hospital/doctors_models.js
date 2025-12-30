import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema({
     
    docName : {
        type : String,
        required : true
    },
    designation : {
        type : String,
        required : true
    },
    address1: {
        type : String,
        required : true
    },
    address2 : {
        type : String,
        required : true
    },
    hospital : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Hospital"
    }

}, {timestamps : true})

export const Doctor = mongoose.model('Doctor', doctorSchema);