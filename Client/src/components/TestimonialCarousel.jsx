import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testimonial from "../components/Testimonial";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1254 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1254, min: 700 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
  },
};

const TestimonialCarousel = ({ deviceType }) => {
  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={7000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        renderArrowsWhenDisabled={true}
        
      >
        <Testimonial
          name="Mark Cuban"
          type="customer"
          image="./avatarMale1.png"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque dolorem a error repudiandae possimus quidem labore laudantium! Odio odit nihil suscipit, excepturi distinctio nam voluptate voluptates similique maxime soluta."
        />
        <Testimonial
          name="Jhon Doe"
          type="customer"
          image="./avatarMale1.png"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque dolorem a error repudiandae possimus quidem labore laudantium! Odio odit nihil suscipit, excepturi distinctio nam voluptate voluptates similique maxime soluta."
        />
        <Testimonial
          name="Jane Smith"
          type="customer"
          image="./avatarFemale1.jpg"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque dolorem a error repudiandae possimus quidem labore laudantium! Odio odit nihil suscipit, excepturi distinctio nam voluptate voluptates similique maxime soluta."
        />
        <Testimonial
          name="Emily Clark"
          type="customer"
          image="./avatarFemale1.jpg"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque dolorem a error repudiandae possimus quidem labore laudantium! Odio odit nihil suscipit, excepturi distinctio nam voluptate voluptates similique maxime soluta."
        />
        <Testimonial
          name="Connor Jacobs"
          type="customer"
          image="./avatarMale1.png"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque dolorem a error repudiandae possimus quidem labore laudantium! Odio odit nihil suscipit, excepturi distinctio nam voluptate voluptates similique maxime soluta."
        />
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
