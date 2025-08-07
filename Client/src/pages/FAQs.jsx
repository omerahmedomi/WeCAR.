import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import QuestionAndAnswer from "../components/QuestionAndAnswer";

const FAQs = () => {
  

 
  return (
    <div>
      <Header />
      <main className="w-full max-w-200 mx-auto py-16 px-5 h-svh font-eczar pt-20 divide-y-1 divide-white">
        <div>
          <QuestionAndAnswer question="Questions" answer="answer" />
        </div>
        <div>
          <QuestionAndAnswer question="Question" answer="answer" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
