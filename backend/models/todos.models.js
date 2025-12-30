import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todoTask : {
        type : String,
        required : true,

    },
    completed : {
        type : Boolean,
        default: false
        
    },
    createdBy :{
        type : mongoose.Schema.Types.ObjectId,
        ref  : "User"
    },
    subTodos :  [ {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Subtodos"
}]
    

}, {timestamps:true})

export const Todos = mongoose.model('Todos', todoSchema)