import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    productId : {
        type  : mongoose.Schema.Types.ObjectId,
        ref   : 'Product'
    },
    quantity : {
        type : Number,
        required : true
    }
})
const oderSchema = new mongoose.Schema({

    orderPrice : {
        type : Number,
        required : true
    },
    orderStatus :{
        type : String,
        enum : ["PENDING", "DELIEVERED", "REJECTED"],
        default : "PENDING"
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }, 
    orderItems : [itemSchema]
    
}, {timestamps: true})

export const Order = mongoose.model('Order', oderSchema)