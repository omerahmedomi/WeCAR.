import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Car name is required"],
  },
  model: String,
  year: Number,
  transmission: {
    type: String,
    trim: true,
    required: [true,"Transmission is required"],
    enum: ["auto", "manual"],
    
  },
  fuelType: {
    type: String,
    trim: true,
    required: [true,"Fuel Type is required"],
    enum: ["petrol","diesel","hybrid","electric"],
    
  },
  mileage: Number,
  pricePerDayInK:{
    type:Number,
    trim:true,
    required: [true,'Car Daily price is required']
  },
  color:{
    type:String,
    trim:true
  },
  seats:Number,
  doors:Number,
  luggageCapacity:Number,
  features:[String],
  available:{
    type:Boolean,
    default:true,
  },
  images:[String]
  
});

const Car = mongoose.model("Car", carSchema);

export default Car;
