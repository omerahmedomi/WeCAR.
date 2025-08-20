import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    car:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Car',
        required:true
    },
    price:{
        type:Number,
        required:true,

    },
    stauts:{
        type:String,
        enum:['submitted','in use','completed'],
        default:'submitted'

    }

})

const Order =  mongoose.model('Order',orderSchema)
export default Order;