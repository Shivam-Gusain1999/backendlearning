import mongoose from "mongoose";
import { Category } from "./category.models";

const productSchema = new mongoose.Schema({
    productName : {
        type: String,
        required : true,
    },
    productPrice : {
        type: Number,
        required: true,
        default : 0
    },
    inStock :{
        type: Boolean,
        required: false
    },
    quantity:{
        type: Number,
        
    },
    description :{
        type : String,
        required : true

    }, 

    productImage : {
        type: String
        
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },

    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

export const Product = mongoose.model('Product', productSchema)