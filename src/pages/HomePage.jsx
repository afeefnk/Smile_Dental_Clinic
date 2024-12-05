// import React from 'react'

import AppointmentBanner from "../components/HomePage/AppointmentBanner";
import BlogSection from "../components/HomePage/BlogSection";
import FAQSection from "../components/HomePage/FAQSection";
import Footer from "../components/HomePage/Footer";
import Offer from "../components/HomePage/Offer";
import Partner from "../components/HomePage/Partner";
import Services from "../components/HomePage/Services";
import Team from "../components/HomePage/Team";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import Hero from "../components/HomePage/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Team />
      <Offer />
      <TestimonialSection />
      <Partner />
      <BlogSection />
      <FAQSection />
      <AppointmentBanner />
      <Footer />
    </>
  );
};

export default HomePage;
