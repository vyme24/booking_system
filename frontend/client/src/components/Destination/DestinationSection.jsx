import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const DestinationSection = () => {
  return (
    <section className="section destination-section">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-10 text-center">
            <div className="section-header text-center">
              <h2 className="mb-2">
                Search by{" "}
                <span className="text-primary text-decoration-underline">
                  Destinations
                </span>{" "}
                Around the World
              </h2>
              <p className="sub-title">
                DreamsTour Marketplace is a platform designed to connect fans
                with exclusive experiences related to a specific tour
              </p>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={4}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="destination-slider"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <DestinationItem
              img="/assets/img/destination/destination-01.jpg"
              title="Turkey"
              reviews="452 Reviews"
            />
          </SwiperSlide>

          <SwiperSlide>
            <DestinationItem
              img="/assets/img/destination/destination-02.jpg"
              title="Thailand"
              reviews="400 Reviews"
            />
          </SwiperSlide>

          <SwiperSlide>
            <DestinationItem
              img="/assets/img/destination/destination-03.jpg"
              title="Australia"
              reviews="400 Reviews"
            />
          </SwiperSlide>

          <SwiperSlide>
            <DestinationItem
              img="/assets/img/destination/destination-04.jpg"
              title="Brazil"
              reviews="422 Reviews"
            />
          </SwiperSlide>

          <SwiperSlide>
            <DestinationItem
              img="/assets/img/destination/destination-05.jpg"
              title="Canada"
              reviews="370 Reviews"
            />
          </SwiperSlide>
        </Swiper>

        {/* View All */}
        <div className="text-center view-all mt-4">
          <a
            href="destination.html"
            className="btn btn-dark d-inline-flex align-items-center"
          >
            View All Locations
            <i className="isax isax-arrow-right-3 ms-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;

/* ---------------------------
   Destination Item Component
---------------------------- */
const DestinationItem = ({ img, title, reviews }) => {
  return (
    <div className="destination-item mb-4">
      <img src={img} alt={title} />

      <div className="destination-info text-center">
        <div className="destination-content">
          <h5 className="mb-1 text-white">{title}</h5>

          <div className="d-flex align-items-center justify-content-center">
            <div className="rating d-flex align-items-center me-2">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fa-solid fa-star filled me-1" />
              ))}
            </div>
            <p className="fs-14 text-white">{reviews}</p>
          </div>
        </div>

        <div className="destination-overlay bg-white mt-2">
          <div className="d-flex">
            <div className="col border-end">
              <div className="count-info text-center">
                <span className="d-block mb-1 text-indigo">
                  <i className="isax isax-airplane" />
                </span>
                <h6 className="fs-13 fw-medium">21 Flights</h6>
              </div>
            </div>

            <div className="col border-end">
              <div className="count-info text-center">
                <span className="d-block mb-1 text-cyan">
                  <i className="isax isax-buildings" />
                </span>
                <h6 className="fs-13 fw-medium">15 Hotels</h6>
              </div>
            </div>

            <div className="col">
              <div className="count-info text-center">
                <span className="d-block mb-1 text-success">
                  <i className="isax isax-ship" />
                </span>
                <h6 className="fs-13 fw-medium">06 Cruises</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="destination.html" className="overlay-circle-link">
        <i className="isax isax-arrow-right-1" />
      </a>
    </div>
  );
};
