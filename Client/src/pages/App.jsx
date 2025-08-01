import React from "react";
import Header from "./../components/Header";
import { motion } from "framer-motion";
import Call from "../Icons/Call";

const App = () => {
  return (
    <div className="">
      <Header />
      <main>
        <section class="hero relative h-[400px] md:h-[600px] lg:h-screen bg-[url('https://images.unsplash.com/photo-1432462770865-65b70566d673?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE0fHx8ZW58MHx8fHx8')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
          <div class="absolute inset-0  bg-black opacity-60 "></div>

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

        <section className="why mt-5  flex flex-col justify-center items-center">
          <div className="max-w-150">
            <h1 className="text-center font-bold font-grenze text-3xl sm:text-4xl 2xl:text-5xl mb-2">
              Why Choose Us
            </h1>
            <p className="text-center font-eczar sm:text-lg">
              We Stand As Your Trusted Partner. Our Dedication to Quality,
              Innovation, And Customer Satisfaction Sets Us Apart{" "}
            </p>
          </div>

          <div className=" mt-3 w-full md:w-auto max-sm:space-y-2 md:grid grid-cols-2 gap-2">
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

        <section className="testimonials"></section>
      </main>
    </div>
  );
};

export default App;
