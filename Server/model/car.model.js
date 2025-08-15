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
    required: true,
    enum: ["auto", "manual"],
    default: "auto",
  },
  fuelType: {
    type: String,
    trim: true,
    required: true,
    enum: ["petrol","diesel","hybrid","electric"],
    default: "petrol",
  },
  mileage: Number,
  pricePerDayInK:{
    type:String,
    trim:true,
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
  }
  
});

const Car = mongoose.model("Car", carSchema);

export default Car;
