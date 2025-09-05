import React, { useEffect } from "react";
import Header from "./../components/Header";
import { motion } from "framer-motion";
import Call from "../Icons/Call";
import { useInView } from "react-intersection-observer";

import CountUp from "react-countup";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import MedalRibbonStar from "../Icons/MedalRibbonStar";
import Verified from "../Icons/Verified";
import XCircle from "../Icons/XCircle";
import TestimonialCarousel from "../components/TestimonialCarousel";


const App = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });


  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Header />
      <main className="relative pt-10 dark:text-gray-200">
        <section class="hero relative h-[400px] md:h-[600px] lg:h-screen bg-[url('https://images.unsplash.com/photo-1432462770865-65b70566d673?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE0fHx8ZW58MHx8fHx8')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
          <div class="absolute inset-0  bg-gray-900 opacity-60 z-10 dark:opacity-75 transition-opacity duration-500"></div>

          <motion.div
            class="relative z-10 text-white dark:text-gray-300 p-6 font-eczar sm:text-center justify-center"
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

        <section className="why mt-20  flex flex-col  items-center ">
          <div className="max-w-150">
            <h1 className="text-center font-bold font-grenze text-3xl sm:text-4xl 2xl:text-5xl mb-2 ">
              Why Choose Us
            </h1>
            <p className="text-center font-eczar sm:text-lg">
              We Stand As Your Trusted Partner. Our Dedication to Quality,
              Innovation, And Customer Satisfaction Sets Us Apart{" "}
            </p>
          </div>

          <div className=" mt-5 w-full lg:w-250 max-sm:space-y-2  md:grid grid-cols-2 gap-2 2xl:gap-10 font-eczar p-3">
            <motion.div
              className="flex gap-3  p-2 "
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              transition={{ duration: 0.8, ease: "easeInOut" }} // animation duration
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="size-10 text-blue-900 bg-cyan-400 dark:bg-cyan-500 flex justify-center items-center rounded-lg   ">
                <Call />
              </div>
              <div className="flex flex-col gap-y-2 w-9/10  ">
                <h2 className="font-medium">24 Hour Support</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {" "}
                  We’re here for you anytime, day or night. Our support team is
                  just a call or message away—24 hours a day, 7 days a week.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex gap-3  p-2 "
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              transition={{ duration: 0.8, ease: "easeInOut" }} 
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="size-10 text-blue-900 bg-cyan-400 dark:bg-cyan-500 flex justify-center items-center rounded-lg   ">
                <MedalRibbonStar />
              </div>
              <div className="flex flex-col gap-y-2 w-9/10  ">
                <h2 className="font-medium">Best Price</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {" "}
                  Get the best deals without hidden fees. We constantly check
                  market rates to ensure you get unbeatable prices for every car
                  in our fleet.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-3  p-2"
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              transition={{ duration: 0.8, ease: "easeInOut" }} 
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="size-10 text-blue-900 bg-cyan-400 dark:bg-cyan-500 flex justify-center items-center rounded-lg   ">
                <Verified />
              </div>
              <div className="flex flex-col gap-y-2  w-9/10  ">
                <h2 className="font-medium">Verified Lisence</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {" "}
                  Drive with confidence knowing all our vehicles are fully
                  licensed and verified for safety, legality, and top
                  performance.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex gap-3  p-2"
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              transition={{ duration: 0.8, ease: "easeInOut" }} 
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="size-10 text-blue-900 bg-cyan-400 dark:bg-cyan-500 flex justify-center items-center rounded-lg   ">
                <XCircle />
              </div>
              <div className="flex flex-col gap-y-2  w-9/10  ">
                <h2 className="font-medium">Free Cancelation</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {" "}
                  Plans changed? No problem. Cancel your booking for free within
                  our flexible policy—no stress, no extra charges.
                </p>
              </div>
            </motion.div>
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
          <div className="shadow-lg flex divide-x-1 py-2 sm:py-5 mt-4 md:mt-6">
            <div className=" pl-2 sm:pl-10 md:pl-15 lg:pl-20 pr-2 sm:pr-5 md:pr-10 lg:pr-12">
              <p className="font-bold text-cyan-500 dark:text-cyan-300  text-2xl sm:text-3xl 2xl:text-4xl font-grenze">
                {inView && <CountUp end={350} duration={3} suffix="+" />}
              </p>
              <p className="text-nowrap font-semibold font-eczar text-sm sm:text-base 2xl:text-lg ">
                Cars Availabe
              </p>
            </div>
            <div className="  px-2 sm:px-5 md:px-10 lg:px-12 ">
              <p className="font-bold text-cyan-500 dark:text-cyan-300 text-2xl sm:text-3xl 2xl:text-4xl font-grenze">
                {inView && <CountUp end={10000} duration={3} suffix="+" />}
              </p>
              <p className="text-nowrap font-semibold font-eczar text-sm sm:text-base 2xl:text-lg ">
                Total Bookings
              </p>
            </div>
            <div className="  pr-2 sm:pr-10 md:pr-15 lg:pr-20   pl-2 sm:pl-5 md:pl-10 lg:pl-12">
              <p className="font-bold text-cyan-500 dark:text-cyan-300 text-2xl sm:text-3xl 2xl:text-4xl font-grenze">
                {inView && <CountUp end={5000} duration={3} suffix="+" />}
              </p>
              <p className="text-nowrap font-semibold font-eczar text-sm sm:text-base 2xl:text-lg ">
                Happy Customers
              </p>
            </div>
          </div>
        </section>

        <section className="testimonials mt-20 flex flex-col justify-center items-center !w-full  mb-10 ">
          <h1 className="font-grenze font-bold text-3xl sm:text-4xl 2xl:text-5xl mb-5 text-center">
            What Our Customers Have To Say!
          </h1>
          <div className="w-full p-2">
            <TestimonialCarousel />
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default App;
