import React from "react";
import Header from "../components/Header";
import CarCard from "./../components/CarCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testimonial from "../components/Testimonial";
import TestimonialCarousel from './../components/TestimonialCarousel';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1254 },
    items: 1,
    
   
  },
  tablet: {
    breakpoint: { max: 1254, min: 600 },
    items: 1,
   
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
   
  },
};


const AboutUs = ({deviceType}) => {
  return (
    <div className="pt-20 -15 ">
      <Header />
     
       <TestimonialCarousel/>
        
   
    </div>
  );
};

export default AboutUs;
