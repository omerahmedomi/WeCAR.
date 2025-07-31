import React from "react";
import Header from "./../components/Header";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="">
      <Header />
      <main>
        <div class="relative h-[400px] md:h-[600px] lg:h-screen bg-[url('https://images.unsplash.com/photo-1432462770865-65b70566d673?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE0fHx8ZW58MHx8fHx8')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">
          <div class="absolute inset-0  bg-black opacity-60 "></div>

          <motion.div
            class="relative z-10 text-white p-6 font-eczar sm:text-center justify-center"
            initial={{ x: -200, opacity:0}}
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
        </div>

        <div>
          <p className="">ffjf</p>
        </div>
      </main>
    </div>
  );
};

export default App;
