import React, { useState } from "react";
import SearchTabs from "./SearchTabs";
import SearchForms from "./SearchForms";

import banner1 from "/assets/img/banner/banner-01.jpg";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("flight");

  return (
    <section className="hero-section relative">
      {/* Background Image */}
      <div className="banner-slider">
        <div className="banner-sec active">
          <img
            src={banner1}
            alt="Hero Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container">
        <div className="hero-content">
          <div className="row align-items-center">
            <div className="col-md-12 mx-auto">
              <div className="banner-content mx-auto">
                <h1 className="text-white display-5 mb-2">
                  Get Closer to the Dream:{" "}
                  <span>Your Tour</span> Essentials Await
                </h1>
                <h6 className="text-light mx-auto">
                  Your ultimate destination for all things help you celebrate &
                  remember tour experience.
                </h6>
              </div>

              <div className="banner-form card w-6xl py-2 ml-15 mb-0">
                <SearchTabs
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <SearchForms activeTab={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
