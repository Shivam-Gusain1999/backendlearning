import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    patientName : {
        type : String,
        required : true
    },

    patientAge : {
        type : Number,
        required : true
    },
    diagonishedWith : {
        type : String,
        required : true
    },
    bloodGroup : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    docCheckUp: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Doctor'

    },
    admittedHospital : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
  
})

export const Patients = mongoose.model('Patients', patientSchema);