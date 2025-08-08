import React from "react";
import Header from "../components/Header";
import Footer from "./../components/Footer";

const AboutUs = () => {
  return (
    <div className="">
      <Header />

      <main className="py-17  px-6 md:px-12 flex flex-col items-center ">
        <p className="font-bold text-2xl sm:text-3xl font-grenze text-center mb-6">
          Who we are as a company
        </p>
        <div className="space-y-4 text-cyan-900 max-w-200  md:text-lg text-justify font-eczar">
          <p>
            We’re a modern car rental company based in Addis Ababa, Ethiopia,
            built to make transportation easy, reliable, and accessible for
            everyone. Whether you need a quick ride from Bole Airport, a car for
            your wedding day, or a long-term rental for work or NGO use, we’ve
            got you covered!
          </p>
          <p>
            Our fleet includes everything from compact cars for city drives to
            SUVs for Ethiopia’s rugged roads. We focus on safety, affordability,
            and flexibility. You can choose to drive yourself or hire a
            professional driver who knows local routes and traffic conditions.
          </p>
          <p>
            We understand the local challenges—from unpredictable road
            conditions to last-minute travel needs—so we’ve built our services
            to handle them. No hidden charges, no long wait times, just
            dependable service when you need it.
          </p>
          <p>
            Trusted by travelers, locals, businesses, and NGOs across Ethiopia,
            we’re proud to be part of your journey—wherever it takes you.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
