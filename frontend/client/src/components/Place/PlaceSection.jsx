import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const PlaceSection = () => {
  const [activeTab, setActiveTab] = useState('Hotels-list');

  const tabData = [
    { id: 'flight-list', name: 'Flights' },
    { id: 'Hotels-list', name: 'Hotels' },
    { id: 'Cars-list', name: 'Cars' },
    { id: 'Cruise-list', name: 'Cruise' },
    { id: 'Tour-list', name: 'Tour' },
    { id: 'Bus-list', name: 'Bus' }
  ];

  const handleTabClick = (tabId, e) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  const swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 }
    },
    modules: [ Autoplay]
  };

  return (
    <section className="section place-section bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-10 text-center wow fadeInUp" data-wow-delay="0.2s">
            <div className="section-header mb-4 text-center">
              <h2 className="mb-2">
                Our{" "}
                <span className="text-primary text-decoration-underline">
                  Trending
                </span>{" "}
                Places
              </h2>
              <p className="sub-title">
                Here are some famous tourist places around the world that are known
                for their historical significance, natural beauty, or cultural
                impact
              </p>
            </div>
          </div>
        </div>

        <div className="place-nav">
          <ul className="nav justify-content-center">
            {tabData.map((tab) => (
              <li key={tab.id}>
                <a
                  href="#"
                  className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={(e) => handleTabClick(tab.id, e)}
                >
                  {tab.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="tab-content">
          {/* Hotels List */}
          <div className={`tab-pane fade ${activeTab === 'Hotels-list' ? 'active show' : ''}`} id="Hotels-list">
            <Swiper {...swiperConfig} className="place-slider">
              {[1, 2, 3, 4, 5].map((item) => (
                <SwiperSlide key={item}>
                  <div className="place-item mb-4">
                    <div className="place-img">
                      <Swiper
                        {...{
                          ...swiperConfig,
                          navigation: false,
                          autoplay: { delay: 4000 }
                        }}
                        className="img-slider"
                      >
                        <SwiperSlide>
                          <div className="slide-images">
                            <a href="hotel-details.html">
                              <img
                                src={`assets/img/hotels/hotel-0${item}.jpg`}
                                className="img-fluid"
                                alt="img"
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="slide-images">
                            <a href="hotel-details.html">
                              <img
                                src={`assets/img/hotels/hotel-0${item + 1 || 1}.jpg`}
                                className="img-fluid"
                                alt="img"
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                      <div className="fav-item">
                        <span className="badge bg-info d-inline-flex align-items-center">
                          <i className="isax isax-ranking me-1" />
                          Trending
                        </span>
                        <a href="#" className="fav-icon selected">
                          <i className="isax isax-heart5" />
                        </a>
                      </div>
                    </div>
                    <div className="place-content">
                      <div className="d-flex align-items-center mb-1">
                        <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium me-2">
                          5.0
                        </span>
                        <p className="fs-14">(400 Reviews)</p>
                      </div>
                      <h5 className="mb-1">
                        <a href="hotel-details.html">Hotel Plaza Athenee</a>
                      </h5>
                      <p className="d-flex align-items-center mb-2">
                        <i className="isax isax-location5 me-2" />
                        Ciutat Vella, Barcelona
                      </p>
                      <div className="border-top pt-2 mb-2">
                        <h6 className="d-flex align-items-center">
                          Facilities :
                          <i className="isax isax-wifi ms-2 me-2 text-primary" />
                          <i className="isax isax-scissor me-2 text-primary" />
                          <i className="isax isax-profile-2user me-2 text-primary" />
                        </h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-between border-top pt-3">
                        <h5 className="text-primary">
                          $500{" "}
                          <span className="fs-14 fw-normal text-default">/ Night</span>
                        </h5>
                        <a href="#" className="d-flex align-items-center">
                          <span className="avatar avatar-md me-2">
                            <img
                              src="assets/img/users/user-01.jpg"
                              className="rounded-circle"
                              alt="img"
                            />
                          </span>
                          <p className="fs-14">Beth Williams</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Flight List */}
          <div className={`tab-pane fade ${activeTab === 'flight-list' ? 'active show' : ''}`} id="flight-list">
            <Swiper {...swiperConfig} className="place-slider">
              {[1, 2, 3, 4, 5].map((item) => (
                <SwiperSlide key={item}>
                  <div className="place-item mb-4">
                    <div className="place-img">
                      <a href="flight-details.html">
                        <img
                          src={`assets/img/flight/flight-0${item}.jpg`}
                          className="img-fluid"
                          alt="img"
                        />
                      </a>
                      <div className="fav-item">
                        <div className="d-flex align-items-center">
                          <a href="#" className="fav-icon me-2">
                            <i className="isax isax-heart5" />
                          </a>
                          <span className="badge bg-indigo">Cheapest</span>
                        </div>
                        <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium rounded">
                          4.3
                        </span>
                      </div>
                    </div>
                    <div className="place-content">
                      <div className="flight-loc d-flex align-items-center justify-content-between mb-2">
                        <span className="loc-name d-inline-flex align-items-center">
                          <i className="isax isax-airplane rotate-45 me-2" />
                          Toronto
                        </span>
                        <span className="arrow-icon">
                          <i className="isax isax-arrow-2" />
                        </span>
                        <span className="loc-name d-inline-flex align-items-center">
                          <i className="isax isax-airplane rotate-135 me-2" />
                          Bangkok
                        </span>
                      </div>
                      <h5 className="text-truncate mb-1">
                        <a href="flight-details.html">AstraFlight 215</a>
                      </h5>
                      <div className="d-flex align-items-center mb-2">
                        <span className="avatar avatar-sm me-2">
                          <img
                            src="assets/img/icons/airindia.svg"
                            className="rounded-circle"
                            alt="icon"
                          />
                        </span>
                        <p className="fs-14 mb-0">Indigo</p>
                        <p className="fs-14 mb-0">1-stop at Frankfurt</p>
                      </div>
                      <div className="date-info p-2 mb-3">
                        <p className="d-flex align-items-center">
                          <i className="isax isax-calendar-2 me-2" />
                          Sep 04, 2024 - Sep 07, 2024
                        </p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between border-top pt-3">
                        <h6 className="text-primary">
                          <span className="fs-14 fw-normal text-default">From </span>
                          $300
                        </h6>
                        <div className="d-flex align-items-center">
                          <span className="badge bg-outline-success fs-10 fw-medium p-2 me-2">
                            22 Seats Left
                          </span>
                          <a href="#" className="avatar avatar-sm">
                            <img
                              src="assets/img/users/user-11.jpg"
                              className="rounded-circle"
                              alt="img"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Cars List */}
          <div className={`tab-pane fade ${activeTab === 'Cars-list' ? 'active show' : ''}`} id="Cars-list">
            <Swiper {...swiperConfig} className="place-slider">
              {[6, 7, 8, 10, 11].map((item) => (
                <SwiperSlide key={item}>
                  <div className="place-item mb-4 flex-fill">
                    <div className="place-img">
                      <Swiper
                        {...{
                          ...swiperConfig,
                          navigation: false,
                          autoplay: { delay: 4000 }
                        }}
                        className="img-slider"
                      >
                        <SwiperSlide>
                          <div className="slide-images">
                            <a href="car-details.html">
                              <img
                                src={`assets/img/cars/car-${item}.jpg`}
                                className="img-fluid"
                                alt="img"
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                      <div className="fav-item">
                        <a href="#" className="fav-icon selected">
                          <i className="isax isax-heart5" />
                        </a>
                        <span className="badge bg-info d-inline-flex align-items-center">
                          <i className="isax isax-ranking me-1" />
                          Trending
                        </span>
                      </div>
                    </div>
                    <div className="place-content">
                      <a href="#" className="avatar avatar-md ms-3 car-avatar-image">
                        <img
                          src="assets/img/users/user-08.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </a>
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <div className="d-flex flex-wrap align-items-center">
                          <span className="badge badge-secondary fs-10 fw-medium me-1">
                            Sedan
                          </span>
                        </div>
                      </div>
                      <h5 className="mb-1 text-truncate">
                        <a href="car-details.html">Toyota Camry SE 400</a>
                      </h5>
                      <p className="d-flex align-items-center mb-3">
                        <i className="isax isax-location5 me-2" />
                        Ciutat Vella, Barcelona
                      </p>
                      <div className="mb-3 p-2 border rounded d-flex align-items-center justify-content-between">
                        <div className="pe-4 border-end">
                          <span className="fs-14 d-flex align-items-center text-dark">
                            <i className="isax isax-gas-station me-1" />
                            Fuel
                          </span>
                          <p className="text-dark fs-14">Hybrid</p>
                        </div>
                        <div className="pe-4 border-end">
                          <span className="fs-14 d-flex align-items-center text-dark">
                            <i className="isax isax-kanban me-1" />
                            Gear
                          </span>
                          <p className="text-dark fs-14">Manual</p>
                        </div>
                        <div>
                          <span className="fs-14 d-flex align-items-center text-dark">
                            <i className="isax isax-routing-2 me-1" />
                            Travelled
                          </span>
                          <p className="text-dark fs-14">14,000 KM</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between border-top pt-3">
                        <div className="d-flex flex-wrap align-items-center me-2">
                          <h5 className="text-primary">
                            $500{" "}
                            <span className="fs-14 text-gray-6 fw-normal">/ day</span>
                          </h5>
                        </div>
                        <div className="ms-2 d-flex align-items-center">
                          <div className="d-flex align-items-center flex-wrap">
                            <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium me-1">
                              5.0
                            </span>
                            <p className="fs-14">(400 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Cruise List */}
          <div className={`tab-pane fade ${activeTab === 'Cruise-list' ? 'active show' : ''}`} id="Cruise-list">
            <Swiper {...swiperConfig} className="place-slider">
              {[5, 12, 9, 10, 1].map((item) => (
                <SwiperSlide key={item}>
                  <div className="place-item mb-4 flex-fill">
                    <div className="place-img">
                      <Swiper
                        {...{
                          ...swiperConfig,
                          navigation: false,
                          autoplay: { delay: 4000 }
                        }}
                        className="img-slider"
                      >
                        <SwiperSlide>
                          <div className="slide-images">
                            <a href="cruise-details.html">
                              <img
                                src={`assets/img/cruise/cruise-${item.toString().padStart(2, '0')}.jpg`}
                                className="img-fluid"
                                alt="img"
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                      <div className="fav-item">
                        <a href="#" className="fav-icon selected">
                          <i className="isax isax-heart5" />
                        </a>
                        <span className="badge bg-info d-inline-flex align-items-center">
                          <i className="isax isax-ranking me-1" />
                          Trending
                        </span>
                      </div>
                    </div>
                    <div className="place-content">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <a href="#" className="d-flex align-items-center overflow-hidden me-2">
                          <span className="avatar avatar-md flex-shrink-0 me-2">
                            <img
                              src="assets/img/users/user-08.jpg"
                              className="rounded-circle"
                              alt="img"
                            />
                          </span>
                          <p className="fs-14 text-truncate">Beth Williams</p>
                        </a>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium me-2">
                            4.9
                          </span>
                          <p className="fs-14 text-truncate">(400)</p>
                        </div>
                      </div>
                      <h5 className="mb-1 text-truncate">
                        <a href="cruise-details.html">Super Aquamarine</a>
                      </h5>
                      <p className="d-flex align-items-center mb-3">
                        <i className="isax isax-location5 me-2" />
                        Ciutat Vella, Barcelona
                      </p>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <p className="mb-1">
                            <i className="isax isax-calendar-2 text-gray-6 me-1" />
                            Year : <span className="text-dark fw-medium">2021</span>
                          </p>
                          <p>
                            <i className="isax isax-user me-1" />
                            Guests : <span className="text-dark fw-medium">4</span>
                          </p>
                        </div>
                        <div>
                          <p className="mb-1">
                            <i className="isax isax-fatrows text-gray-6 me-1" />
                            Width : <span className="text-dark fw-medium">88.47 m</span>
                          </p>
                          <p>
                            <i className="isax isax-flash-1 me-1" />
                            Speed : <span className="text-dark fw-medium">19 Knots</span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between border-top pt-3">
                        <h6 className="d-flex align-items-center">
                          <i className="isax isax-home-wifi ms-2 me-2" />
                          <i className="isax isax-scissor me-2" />
                          <i className="isax isax-profile-2user me-2" />
                          <i className="isax isax-wind-2 me-2" />
                          <a href="#" className="fs-14 fw-normal text-default d-inline-block">
                            +2
                          </a>
                        </h6>
                        <h5 className="text-primary text-nowrap me-2">
                          $500{" "}
                          <span className="fs-14 fw-normal text-default">/ day</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Tour List */}
          <div className={`tab-pane fade ${activeTab === 'Tour-list' ? 'active show' : ''}`} id="Tour-list">
            <Swiper {...swiperConfig} className="place-slider">
              {[7, 8, 9, 10, 11].map((item) => (
                <SwiperSlide key={item}>
                  <div className="place-item mb-4 flex-fill">
                    <div className="place-img">
                      <Swiper
                        {...{
                          ...swiperConfig,
                          navigation: false,
                          autoplay: { delay: 4000 }
                        }}
                        className="img-slider"
                      >
                        <SwiperSlide>
                          <div className="slide-images">
                            <a href="tour-details.html">
                              <img
                                src={`assets/img/tours/tours-${item.toString().padStart(2, '0')}.jpg`}
                                className="img-fluid"
                                alt="img"
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                      <div className="fav-item">
                        <a href="#" className="fav-icon selected">
                          <i className="isax isax-heart5" />
                        </a>
                        <span className="badge bg-info d-inline-flex align-items-center">
                          <i className="isax isax-ranking me-1" />
                          Trending
                        </span>
                      </div>
                    </div>
                    <div className="place-content">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <div className="d-flex flex-wrap align-items-center">
                          <span className="me-1">
                            <i className="ti ti-receipt text-primary" />
                          </span>
                          <p className="fs-14 text-gray-9">Ecotourism</p>
                        </div>
                        <span className="d-inline-block border vertical-splits">
                          <span className="bg-light text-light d-flex align-items-center justify-content-center" />
                        </span>
                        <div className="d-flex align-items-center flex-wrap">
                          <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium me-1">
                            5.0
                          </span>
                          <p className="fs-14">(105 Reviews)</p>
                        </div>
                      </div>
                      <h5 className="mb-1 text-truncate">
                        <a href="tour-details.html">Rainbow Mountain Valley</a>
                      </h5>
                      <p className="d-flex align-items-center mb-3">
                        <i className="isax isax-location5 me-2" />
                        Ciutat Vella, Barcelona
                      </p>
                      <div className="mb-3">
                        <h6 className="d-flex align-items-center text-gray-6 fs-14 fw-normal">
                          Starts From{" "}
                          <span className="ms-1 fs-18 fw-semibold text-primary">
                            $500
                          </span>
                          <span className="ms-1 fs-18 fw-semibold text-gray-3 text-decoration-line-through">
                            $789
                          </span>
                        </h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-between border-top pt-3">
                        <div className="d-flex flex-wrap align-items-center me-2">
                          <span className="me-1">
                            <i className="isax isax-calendar-tick text-gray-6" />
                          </span>
                          <p className="fs-14 text-gray-9">4 Day,3 Night</p>
                        </div>
                        <span className="d-inline-block border vertical-splits">
                          <span className="bg-light text-light d-flex align-items-center justify-content-center" />
                        </span>
                        <div className="ms-2 d-flex align-items-center">
                          <p className="fs-14 text-gray-9 mb-0 text-truncate d-flex align-items-center">
                            <i className="isax isax-profile-2user me-1" />
                            14 Guests
                          </p>
                          <a href="#" className="avatar avatar-sm ms-3">
                            <img
                              src="assets/img/users/user-08.jpg"
                              className="rounded-circle"
                              alt="img"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Bus List */}
          <div className={`tab-pane fade ${activeTab === 'Bus-list' ? 'active show' : ''}`} id="Bus-list">
            <Swiper {...swiperConfig} className="place-slider">
              {[1, 2, 3, 4, 5].map((item) => (
                <SwiperSlide key={item}>
                  <div className="place-item mb-4 flex-fill bus-grid">
                    <div className="place-img">
                      <a href="bus-details.html">
                        <img
                          src={`assets/img/bus/grid/bus-grid-img-${item}.jpg`}
                          className="img-fluid"
                          alt="img"
                        />
                      </a>
                      <div className="fav-item">
                        <div className="d-flex align-items-center">
                          <a href="#" className="fav-icon me-2 selected">
                            <i className="isax isax-heart5" />
                          </a>
                          <span className="badge bg-indigo">Cheapest</span>
                        </div>
                        <span className="badge badge-warning badge-xs text-gray-9 fs-13 fw-medium rounded">
                          5.0
                        </span>
                      </div>
                    </div>
                    <div className="place-content">
                      <h5 className="text-truncate mb-1">
                        <a href="bus-details.html">Red Bird Luxury</a>
                      </h5>
                      <div className="d-flex align-items-center mb-3">
                        <span className="avatar avatar-sm me-2">
                          <img
                            src="assets/img/bus/bus-logo-01.svg"
                            className="rounded-circle"
                            alt="icon"
                          />
                        </span>
                        <p className="fs-14 mb-0 me-2">Tata</p>
                        <p className="fs-14 mb-0">
                          <i className="ti ti-point-filled text-primary me-2" />
                          Seater
                        </p>
                      </div>
                      <div className="date-info p-2 mb-3">
                        <div className="bus-title d-flex align-items-center justify-content-between gap-2">
                          <div className="bus-title-item">
                            <h5 className="text-truncate mb-1 fs-14 fw-semibold">
                              Chicago
                            </h5>
                            <p className="fs-14 text-default mt-1">09:30 AM</p>
                          </div>
                          <div className="dot-line">
                            <span>
                              <small className="text-muted">10h 40m</small>
                            </span>
                          </div>
                          <div className="bus-title-item">
                            <h5 className="text-truncate mb-1 fs-14 fw-semibold">
                              Miami
                            </h5>
                            <p className="fs-14 text-default mt-1">10:40 PM</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between border-top pt-3">
                        <div className="d-flex align-items-center">
                          <img
                            src="assets/img/users/user-08.jpg"
                            className="avatar avatar-sm rounded-circle"
                            alt="img"
                          />
                          <span className="badge bg-outline-success fs-10 fw-medium ms-2">
                            20 Seats Left
                          </span>
                        </div>
                        <h6 className="text-primary">
                          <span className="fs-14 text-default">From </span>$280
                        </h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="text-center view-all wow fadeInUp">
          <a
            href="hotel-grid.html"
            className="btn btn-dark d-inline-flex align-items-center"
          >
            View All Places
            <i className="isax isax-arrow-right-3 ms-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlaceSection;