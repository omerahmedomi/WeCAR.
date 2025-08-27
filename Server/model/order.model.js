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
    status:{
        type:String,
        enum:['submitted','in use','completed'],
        default:'submitted'

    },
    pickUpDate:{
        type:Date,
        required:true
    },
    returnDate:{
        type:Date,
        required:true
    }

})

const Order =  mongoose.model('Order',orderSchema)
export default Order;