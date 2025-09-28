import React from "react";
import Nav from "../components/Nav";
import SecondSection from "../components/SecondSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import BackToTop from "../components/BackToTop";

export default function ServicesPage() {
  return (
    <div className="flex justify-center ">
      <div className="container w-[100%] lg:w-[90%]">
        <Nav />
        <div className="mt-16">
          <SecondSection />
        </div>
        <Footer />
      </div>
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
