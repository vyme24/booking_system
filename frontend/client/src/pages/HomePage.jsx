import React from "react";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import DestinationSection from "../components/Destination/DestinationSection";
import BenefitSection from "../components/Benefits/BenefitSection";
import PlaceSection from "../components/Place/PlaceSection";
import AboutSection from "../components/About/AboutSection";
import ExpertsSection from "../components/Experts/ExpertsSection";
import VideoSection from "../components/Video/VideoSection";
import TestimonialSection from "../components/Testimonial/TestimonialSection";
import FAQSection from "../components/FAQ/FAQSection";
import BlogSection from "../components/Blog/BlogSection";
import Footer from "../components/Footer/Footer";
import RegisterModal from "../components/Modal/RegisterModal";
import LoginModal from "../components/Modal/LoginModal";
import ForgotPasswordModal from "../components/Modal/ForgotPasswordModal";
import ClientSection from "../components/Client/ClientSection";
import UpdateSection from "../components/Update/UpdateSection";
import SupportSection from "../components/Support/SupportSection";
import Cursor from "../components/Cursor/Cursor";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header />

      <main id="top">
        <HeroSection />
        <DestinationSection />
        <BenefitSection />
        <PlaceSection />
        <AboutSection />
        <ExpertsSection />
        <VideoSection />
        <ClientSection />
        <TestimonialSection />
        <UpdateSection />
        <FAQSection />
        <BlogSection />
        <SupportSection />
      </main>

      <Footer />

      {/* Modals */}
      <LoginModal />
      <RegisterModal />
      <ForgotPasswordModal />

      {/* Back to top */}
      <Cursor />
    </>
  );
};

export default HomePage;
