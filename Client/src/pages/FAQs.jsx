import React, { useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import QuestionAndAnswer from "../components/QuestionAndAnswer";

const faqs = [
  {
    question: "What documents do I need to rent a car in Ethiopia?",
    answer:
      "You will need a valid driver’s license (Ethiopian or international), a government-issued ID or passport, and in some cases, proof of residence or hotel booking.",
  },
  {
    question: "Can I rent a car without a driver?",
    answer:
      "Yes, if you have a valid driver’s license. However, many visitors prefer renting with a driver, especially for intercity travel, as local road rules and routes can be challenging for first-time visitors.",
  },
  {
    question: "Do you offer chauffeur services?",
    answer:
      "Yes, we provide experienced local drivers who speak English and Amharic, and who know the safest and fastest routes.",
  },
  {
    question: "How is fuel handled for rentals?",
    answer:
      "Our cars are provided with a full tank. You are expected to return the vehicle with a full tank, or we will charge for the missing fuel at market price.",
  },
  {
    question: "Can I take the rental car outside Addis Ababa?",
    answer:
      "Yes, you can travel anywhere in Ethiopia. If you plan to travel outside the city, please inform us in advance so we can recommend suitable vehicles for long-distance travel.",
  },
  {
    question: "What happens if the car breaks down?",
    answer:
      "We provide roadside assistance across major Ethiopian cities and highways. Call our 24/7 support number, and we will send help or arrange a replacement vehicle.",
  },
  {
    question:
      "Do you have cars for special events like weddings or conferences?",
    answer:
      "Yes, we offer luxury and premium vehicles for weddings, VIP guests, and corporate events.",
  },
  {
    question: "How are rental rates calculated?",
    answer:
      "Rates depend on the vehicle type, rental duration, and whether you choose with or without a driver. Long-term rentals may get discounted rates.",
  },
  {
    question: "Can I pay in Ethiopian Birr or USD?",
    answer:
      "Yes, we accept payments in Ethiopian Birr (ETB) and US Dollars (USD). Mobile money (Telebirr), bank transfer, and cash are all accepted.",
  },
  {
    question: "Do you offer airport pickup and drop-off?",
    answer:
      "Yes, we provide convenient pickup and drop-off services at Bole International Airport so you can start your journey without delay.",
  },
];

const FAQs = () => {

  useEffect(() => {
    
    window.scrollTo(0,0)
      
  }, []);
  return (
    <div>
      <Header />
      <div className="pt-20 mb-15 space-y-4">
        <h1 className="text-center font-grenze font-bold text-xl md:text-2xl max-w-200 mx-auto">
          Below we have outlined some of most frequently asked questions about
          WeCAR with their answers!
        </h1>
        <main className="w-full max-w-250 mx-auto  px-5 font-eczar  divide-y-1 divide-white">
          {faqs.map((faq, index) => (
            <div key={index}>
              <QuestionAndAnswer question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default FAQs;
