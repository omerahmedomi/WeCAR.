import React from "react";
import Header from "./../components/Header";
import { motion } from "framer-motion";
import Call from "../Icons/Call";
import { useInView } from "react-intersection-observer";

import CountUp from "react-countup";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const App = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div className="">
      <Header />
      <main className="relative pt-10 ">
        <section class="hero relative h-[400px] md:h-[600px] lg:h-screen bg-[url('https://images.unsplash.com/photo-1432462770865-65b70566d673?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE0fHx8ZW58MHx8fHx8')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
          <div class="absolute inset-0  bg-black opacity-60 z-10"></div>

          <motion.div
            class="relative z-10 text-white p-6 font-eczar sm:text-center justify-center"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 class="text-5xl md:text-6xl font-bold max-w-200 ">
              First Class Car Rentals at Unbeatable Prices
            </h1>
            <p class="mt-2 text-lg md:text-xl">
              From economy to luxury, we’ve got the right car for your journey!
            </p>
          </motion.div>
        </section>

        <section className="why mt-20  flex flex-col justify-center items-center">
          <div className="max-w-150">
            <h1 className="text-center font-bold font-grenze text-3xl sm:text-4xl 2xl:text-5xl mb-2 ">
              Why Choose Us
            </h1>
            <p className="text-center font-eczar sm:text-lg">
              We Stand As Your Trusted Partner. Our Dedication to Quality,
              Innovation, And Customer Satisfaction Sets Us Apart{" "}
            </p>
          </div>

          <div className=" mt-3 w-full md:w-auto max-sm:space-y-2 md:grid grid-cols-2 gap-2 2xl:gap-10">
            <div className="flex gap-2 w- bg-red-200 p-2">
              <div className="size-10 text-blue-900 bg-cyan-200 flex justify-center items-center rounded-lg   ">
                <Call />
              </div>
              <div className="flex flex-col gap-y-2 w-100">
                <h2>24 Hour Support</h2>
                <p>
                  {" "}
                  We Stand As Your Trusted Partner. Our Dedication to Quality,
                  Innovation, And Customer Satisfaction Sets Us Apart
                </p>
              </div>
            </div>
            <div className="flex gap-2 w- bg-red-200 p-2">
              <div className="size-10 text-blue-900 bg-cyan-200 flex justify-center items-center rounded-lg   ">
                <Call />
              </div>
              <div className="flex flex-col gap-y-2 w-100">
                <h2>24 Hour Support</h2>
                <p>
                  {" "}
                  We Stand As Your Trusted Partner. Our Dedication to Quality,
                  Innovation, And Customer Satisfaction Sets Us Apart
                </p>
              </div>
            </div>
            <div className="flex gap-2 w- bg-red-200 p-2">
              <div className="size-10 text-blue-900 bg-cyan-200 flex justify-center items-center rounded-lg   ">
                <Call />
              </div>
              <div className="flex flex-col gap-y-2 w-100">
                <h2>24 Hour Support</h2>
                <p>
                  {" "}
                  We Stand As Your Trusted Partner. Our Dedication to Quality,
                  Innovation, And Customer Satisfaction Sets Us Apart
                </p>
              </div>
            </div>
            <div className="flex gap-2 w- bg-red-200 p-2">
              <div className="size-10 text-blue-900 bg-cyan-200 flex justify-center items-center rounded-lg   ">
                <Call />
              </div>
              <div className="flex flex-col gap-y-2 w-100">
                <h2>24 Hour Support</h2>
                <p>
                  {" "}
                  We Stand As Your Trusted Partner. Our Dedication to Quality,
                  Innovation, And Customer Satisfaction Sets Us Apart
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="achievement flex flex-col justify-center items-center text-center mt-15 p-2"
          ref={ref}
        >
          <h1 className="font-grenze font-bold text-3xl sm:text-4xl 2xl:text-5xl mb-2">
            Our Achievement
          </h1>
          <p className="font-eczar sm:text-lg">
            Our journey of success is a testament to collective effort and
            determination of our team.
          </p>
          <div className="shadow-2xl flex divide-x-1 py-2 sm:py-5 mt-4 md:mt-6">
            <div className=" pl-2 sm:pl-10 md:pl-15 lg:pl-20 pr-2 sm:pr-5 md:pr-10 lg:pr-12">
              <p className="font-bold text-cyan-500 text-2xl sm:text-3xl 2xl:text-4xl font-grenze">
                {inView && <CountUp end={4000} duration={3} suffix="+" />}
              </p>
              <p className="text-nowrap font-semibold font-eczar text-sm sm:text-base 2xl:text-lg ">
                Active member
              </p>
            </div>
            <div className="  px-2 sm:px-5 md:px-10 lg:px-12 ">
              <p className="font-bold text-cyan-500 text-2xl sm:text-3xl 2xl:text-4xl font-grenze">
                {inView && <CountUp end={4000} duration={3} suffix="+" />}
              </p>
              <p className="text-nowrap font-semibold font-eczar text-sm sm:text-base 2xl:text-lg ">
                Active member
              </p>
            </div>
            <div className="  pr-2 sm:pr-10 md:pr-15 lg:pr-20   pl-2 sm:pl-5 md:pl-10 lg:pl-12">
              <p className="font-bold text-cyan-500 text-2xl sm:text-3xl 2xl:text-4xl font-grenze">
                {inView && <CountUp end={4000} duration={3} suffix="+" />}
              </p>
              <p className="text-nowrap font-semibold font-eczar text-sm sm:text-base 2xl:text-lg ">
                Active member
              </p>
            </div>
          </div>
        </section>

        <section className="testimonials mt-20 flex flex-col justify-center items-center !w-full bg-green-300  ">
          <h1 className="font-grenze font-bold text-3xl sm:text-4xl 2xl:text-5xl mb-5 text-center">
            What Our Customers Have To Say!
          </h1>
          <div>
            <Testimonial
              name="Umer Ahmed"
              type="customer"
              image
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque dolorem a error repudiandae possimus quidem labore laudantium! Odio odit nihil suscipit, excepturi distinctio nam voluptate voluptates similique maxime soluta."
            />
          </div>
        </section>

        <Footer/>
      </main>
    </div>
  );
};


export default App;
