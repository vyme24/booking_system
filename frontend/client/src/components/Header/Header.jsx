import React, { useState } from 'react';
import { Link } from 'react-router-dom';




const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Toggle dark mode class on document
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!offcanvasOpen);
    // Toggle body scroll
    if (!offcanvasOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
   <div className="main-header">
  {/* Header Topbar*/}
  <div className="header-topbar text-center bg-transparent">
    <div className="container">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <p className="d-flex align-items-center fw-medium fs-14 mb-2">
          <i className="isax isax-call5 me-2" />
          Toll Free : +1 56565 56594
        </p>
        <div className="d-flex align-items-center">
          <p className="mb-2 me-3 d-flex align-items-center fw-medium fs-14">
            <i className="isax isax-message-text-15 me-2" />
            Email :{" "}
            <a
              href="https://dreamstour.dreamstechnologies.com/cdn-cgi/l/email-protection"
              className="__cf_email__"
              data-cfemail="3b52555d547b5e435a564b575e15585456"
            >
              [dreamstour12@gmail]
            </a>
          </p>
          <div className="dropdown flag-dropdown mb-2 me-3">
            <a
              href="#"
              className="dropdown-toggle d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="assets/img/flags/us-flag.svg"
                className="me-2"
                alt="flag"
              />
              ENG
            </a>
            <ul className="dropdown-menu p-2 mt-2">
              <li>
                <a
                  className="dropdown-item rounded d-flex align-items-center"
                  href="#"
                >
                  <img
                    src="assets/img/flags/us-flag.svg"
                    className="me-2"
                    alt="flag"
                  />
                  ENG
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item rounded d-flex align-items-center"
                  href="#"
                >
                  <img
                    src="assets/img/flags/arab-flag.svg"
                    className="me-2"
                    alt="flag"
                  />
                  ARA
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item rounded d-flex align-items-center"
                  href="#"
                >
                  <img
                    src="assets/img/flags/france-flag.svg"
                    className="me-2"
                    alt="flag"
                  />
                  FRE
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown mb-2 me-3">
            <a
              href="#"
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              USD
            </a>
            <ul className="dropdown-menu p-2 mt-2">
              <li>
                <a className="dropdown-item rounded" href="#">
                  USD
                </a>
              </li>
              <li>
                <a className="dropdown-item rounded" href="#">
                  YEN
                </a>
              </li>
              <li>
                <a className="dropdown-item rounded" href="#">
                  EURO
                </a>
              </li>
            </ul>
          </div>
          <div className="fav-dropdown mb-2">
            <a href="wishlist.html" className="position-relative">
              <i className="isax isax-heart" />
              <span className="count-icon bg-secondary text-gray-9">0</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Header Topbar*/}
  {/* Header */}
  <header>
    <div className="container">
      <div className="offcanvas-info">
        <div className="offcanvas-wrap">
          <div className="offcanvas-detail">
            <div className="offcanvas-head">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <a href="index.html" className="black-logo-responsive">
                  <img src="assets/img/logo-dark.svg" alt="logo-img" />
                </a>
                <a href="index.html" className="white-logo-responsive">
                  <img src="assets/img/logo.svg" alt="logo-img" />
                </a>
                <div className="offcanvas-close">
                  <i className="ti ti-x" />
                </div>
              </div>
              <div className="wishlist-info d-flex justify-content-between align-items-center">
                <h6 className="fs-16 fw-medium">Wishlist</h6>
                <div className="d-flex align-items-center">
                  <div className="fav-dropdown">
                    <a href="wishlist.html" className="position-relative">
                      <i className="isax isax-heart" />
                      <span className="count-icon bg-secondary text-gray-9">
                        0
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-menu fix mb-3" />
            <div className="offcanvas__contact">
              <div className="mt-4">
                <div className="header-dropdown d-flex flex-fill">
                  <div className="w-100">
                    <div className="dropdown flag-dropdown mb-2">
                      <a
                        href="#"
                        className="dropdown-toggle bg-white border d-flex align-items-center"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="assets/img/flags/us-flag.svg"
                          className="me-2"
                          alt="flag"
                        />
                        ENG
                      </a>
                      <ul className="dropdown-menu p-2">
                        <li>
                          <a
                            className="dropdown-item rounded d-flex align-items-center"
                            href="#"
                          >
                            <img
                              src="assets/img/flags/us-flag.svg"
                              className="me-2"
                              alt="flag"
                            />
                            ENG
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item rounded d-flex align-items-center"
                            href="#"
                          >
                            <img
                              src="assets/img/flags/arab-flag.svg"
                              className="me-2"
                              alt="flag"
                            />
                            ARA
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item rounded d-flex align-items-center"
                            href="#"
                          >
                            <img
                              src="assets/img/flags/france-flag.svg"
                              className="me-2"
                              alt="flag"
                            />
                            FRE
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle bg-white border d-block"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        USD
                      </a>
                      <ul className="dropdown-menu p-2">
                        <li>
                          <a className="dropdown-item rounded" href="#">
                            USD
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item rounded" href="#">
                            YEN
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item rounded" href="#">
                            EURO
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
         <button
  onClick={() => {
    setShowLogin(true);
    toggleOffcanvas();
  }}
  className="w-full bg-black text-white py-3 rounded-lg mb-3"
>
  Sign In
</button>


                </div>
                <a
                  href="become-an-expert.html"
                  className="btn btn-primary w-100"
                >
                  Become Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-overlay" />
      <div className="header-nav">
        <div className="main-menu-wrapper">
          <div className="navbar-logo">
            <a className="logo-white header-logo" href="index.html">
              <img src="assets/img/logo.svg" className="logo" alt="Logo" />
            </a>
            <a className="logo-dark header-logo" href="index.html">
              <img src="assets/img/logo-dark.svg" className="logo" alt="Logo" />
            </a>
          </div>
          <nav id="mobile-menu">
            <ul className="main-nav">
              <li className="has-submenu megamenu active">
                <a href="#">
                  Home
                  <i className="fa-solid fa-angle-down" />
                </a>
                <ul className="submenu mega-submenu">
                  <li>
                    <div className="megamenu-wrapper">
                      <div className="d-none d-lg-flex align-items-center justify-content-between flex-wrap">
                        <h6 className="mb-3">Home Pages</h6>
                        <a
                          href="#"
                          className="btn btn-dark btn-md mb-3 text-white d-inline-block w-auto"
                        >
                          Purchase Template
                        </a>
                      </div>
                      <div className="row g-lg-4">
                        <div className="col-lg-2">
                          <div className="single-demo active">
                            <div className="demo-img">
                              <a href="index.html">
                                <img
                                  src="assets/img/menu/home-01.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </a>
                            </div>
                            <div className="demo-info">
                              <a href="index.html">All Bookings</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo">
                            <div className="demo-img">
                              <a href="index-2.html">
                                <img
                                  src="assets/img/menu/home-02.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </a>
                            </div>
                            <div className="demo-info">
                              <a href="index-2.html">Hotels</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo">
                            <div className="demo-img">
                              <a href="index-3.html">
                                <img
                                  src="assets/img/menu/home-03.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </a>
                            </div>
                            <div className="demo-info">
                              <a href="index-3.html">Cars</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo">
                            <div className="demo-img">
                              <a href="index-4.html">
                                <img
                                  src="assets/img/menu/home-04.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </a>
                            </div>
                            <div className="demo-info">
                              <a href="index-4.html">Flight</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo">
                            <div className="demo-img">
                              <a href="index-5.html">
                                <img
                                  src="assets/img/menu/home-05.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </a>
                            </div>
                            <div className="demo-info">
                              <a href="index-5.html">Cruise</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo">
                            <div className="demo-img">
                              <a href="index-6.html">
                                <img
                                  src="assets/img/menu/home-06.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </a>
                            </div>
                            <div className="demo-info">
                              <a href="index-6.html">Tours</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo">
                            <div className="demo-img">
                              <a href="index-7.html">
                                <img
                                  src="assets/img/menu/home-07.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </a>
                            </div>
                            <div className="demo-info">
                              <a href="index-7.html">Bus</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo coming-soon-item">
                            <div className="demo-img">
                              <img
                                src="assets/img/bg/coming-soon.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </div>
                            <div className="demo-info">
                              <h6>Coming Soon</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo coming-soon-item">
                            <div className="demo-img">
                              <img
                                src="assets/img/bg/coming-soon.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </div>
                            <div className="demo-info">
                              <h6>Coming Soon</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo coming-soon-item">
                            <div className="demo-img">
                              <img
                                src="assets/img/bg/coming-soon.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </div>
                            <div className="demo-info">
                              <h6>Coming Soon</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo coming-soon-item">
                            <div className="demo-img">
                              <img
                                src="assets/img/bg/coming-soon.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </div>
                            <div className="demo-info">
                              <h6>Coming Soon</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="single-demo coming-soon-item">
                            <div className="demo-img">
                              <img
                                src="assets/img/bg/coming-soon.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </div>
                            <div className="demo-info">
                              <h6>Coming Soon</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="has-submenu mega-innermenu">
                <a href="#">
                  Flight
                  <i className="fa-solid fa-angle-down" />
                </a>
                <ul className="submenu mega-submenu">
                  <li>
                    <div className="megamenu-wrapper">
                      <div className="row">
                        <div className="col-lg-6">
                          <h6>Flight Bookings</h6>
                          <ul>
                            <li>
                              <a href="flight-grid.html">Flight Grid</a>
                            </li>
                            <li>
                              <a href="flight-list.html">Flight List</a>
                            </li>
                            <li>
                              <a href="flight-details.html">Flight Details</a>
                            </li>
                            <li>
                              <a href="flight-booking-confirmation.html">
                                Flight Booking
                              </a>
                            </li>
                            <li>
                              <a href="add-flight.html">Add Flight</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <div className="menu-img">
                            <img
                              src="assets/img/menu/flight.jpg"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="has-submenu mega-innermenu">
                <a href="#">
                  Hotel
                  <i className="fa-solid fa-angle-down" />
                </a>
                <ul className="submenu mega-submenu">
                  <li>
                    <div className="megamenu-wrapper">
                      <div className="row">
                        <div className="col-lg-6">
                          <h6>Hotel Bookings</h6>
                          <ul>
                            <li>
                              <a href="hotel-grid.html">Hotel Grid</a>
                            </li>
                            <li>
                              <a href="hotel-list.html">Hotel List</a>
                            </li>
                            <li>
                              <a href="hotel-map.html">Hotel Map</a>
                            </li>
                            <li>
                              <a href="hotel-details.html">Hotel Details</a>
                            </li>
                            <li>
                              <a href="booking-confirmation.html">
                                Hotel Booking
                              </a>
                            </li>
                            <li>
                              <a href="add-hotel.html">Add Hotel</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <div className="menu-img">
                            <img
                              src="assets/img/menu/hotel.jpg"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="has-submenu mega-innermenu">
                <a href="#">
                  Car
                  <i className="fa-solid fa-angle-down" />
                </a>
                <ul className="submenu mega-submenu">
                  <li>
                    <div className="megamenu-wrapper">
                      <div className="row">
                        <div className="col-lg-6">
                          <h6>Car Bookings</h6>
                          <ul>
                            <li>
                              <a href="car-grid.html">Car Grid</a>
                            </li>
                            <li>
                              <a href="car-list.html">Car List</a>
                            </li>
                            <li>
                              <a href="car-map.html">Car Map</a>
                            </li>
                            <li>
                              <a href="car-details.html">Car Details</a>
                            </li>
                            <li>
                              <a href="car-booking-confirmation.html">
                                Car Booking
                              </a>
                            </li>
                            <li>
                              <a href="add-car.html">Add Car</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <div className="menu-img">
                            <img
                              src="assets/img/menu/car.jpg"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="has-submenu mega-innermenu">
                <a href="#">
                  Cruise
                  <i className="fa-solid fa-angle-down" />
                </a>
                <ul className="submenu mega-submenu">
                  <li>
                    <div className="megamenu-wrapper">
                      <div className="row">
                        <div className="col-lg-6">
                          <h6>Cruise Bookings</h6>
                          <ul>
                            <li>
                              <a href="cruise-grid.html">Cruise Grid</a>
                            </li>
                            <li>
                              <a href="cruise-list.html">Cruise List</a>
                            </li>
                            <li>
                              <a href="cruise-map.html">Cruise Map</a>
                            </li>
                            <li>
                              <a href="cruise-details.html">Cruise Details</a>
                            </li>
                            <li>
                              <a href="cruise-booking-confirmation.html">
                                Cruise Booking
                              </a>
                            </li>
                            <li>
                              <a href="add-cruise.html">Add Cruise</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <div className="menu-img">
                            <img
                              src="assets/img/menu/cruise.jpg"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="has-submenu mega-innermenu">
                <a href="#">
                  Tour
                  <i className="fa-solid fa-angle-down" />
                </a>
                <ul className="submenu mega-submenu">
                  <li>
                    <div className="megamenu-wrapper">
                      <div className="row">
                        <div className="col-lg-6">
                          <h6>Tour Bookings</h6>
                          <ul>
                            <li>
                              <a href="tour-grid.html">Tour Grid</a>
                            </li>
                            <li>
                              <a href="tour-list.html">Tour List</a>
                            </li>
                            <li>
                              <a href="tour-map.html">Tour Map</a>
                            </li>
                            <li>
                              <a href="tour-details.html">Tour Details</a>
                            </li>
                            <li>
                              <a href="tour-booking-confirmation.html">
                                Tour Booking
                              </a>
                            </li>
                            <li>
                              <a href="add-tour.html">Add Tour</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <div className="menu-img">
                            <img
                              src="assets/img/menu/tour.jpg"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="has-submenu mega-innermenu">
                <a href="#">
                  Bus
                  <i className="fa-solid fa-angle-down" />
                </a>
                <ul className="submenu mega-submenu">
                  <li>
                    <div className="megamenu-wrapper">
                      <div className="row">
                        <div className="col-lg-6">
                          <h6>Bus Bookings</h6>
                          <ul>
                            <li>
                              <a href="bus-list.html">Bus List</a>
                            </li>
                            <li>
                              <a href="bus-left-sidebar.html">
                                Bus Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="bus-right-sidebar.html">
                                Bus Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="bus-details.html">Bus Details</a>
                            </li>
                            <li>
                              <a href="bus-booking.html">Bus Booking</a>
                            </li>
                            <li>
                              <a href="add-bus.html">Add Bus</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <div className="menu-img">
                            <img
                              src="assets/img/menu/bus.jpg"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="has-submenu mega-innermenu">
                <a href="#">
                  Pages
                  <i className="fa-solid fa-angle-down" />
                </a>
                <ul className="submenu mega-submenu">
                  <li>
                    <div className="megamenu-wrapper">
                      <h6>Pages</h6>
                      <div className="row g-lg-4">
                        <div className="col-lg-6">
                          <ul>
                            <li>
                              <a href="about-us.html">About</a>
                            </li>
                            <li>
                              <a href="gallery.html">Gallery</a>
                            </li>
                            <li>
                              <a href="testimonial.html">Testimonials</a>
                            </li>
                            <li>
                              <a href="faq.html">Faq</a>
                            </li>
                            <li>
                              <a href="pricing-plan.html">Pricing Plan</a>
                            </li>
                            <li>
                              <a href="team.html">Teams</a>
                            </li>
                            <li>
                              <a href="invoices.html">Invoice</a>
                            </li>
                            <li>
                              <a href="blog-grid.html">Blogs Grid</a>
                            </li>
                            <li>
                              <a href="blog-list.html">Blogs List</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blogs Details</a>
                            </li>
                            <li>
                              <a href="contact-us.html">Contact Us</a>
                            </li>
                            <li>
                              <a href="booking-confirmation.html">
                                Booking Confirmation
                              </a>
                            </li>
                            <li>
                              <a href="destination.html">Destination</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <ul>
                            <li>
                              <a href="dashboard.html">User Dashboard</a>
                            </li>
                            <li>
                              <a href="agent-dashboard.html">Agent Dashboard</a>
                            </li>
                            <li>
                              <a href="terms-conditions.html">
                                Terms &amp; Conditions
                              </a>
                            </li>
                            <li>
                              <a href="privacy-policy.html">Privacy Policy</a>
                            </li>
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                            <li>
                              <a href="register.html">Register</a>
                            </li>
                            <li>
                              <a href="forgot-password.html">Forgot Password</a>
                            </li>
                            <li>
                              <a href="change-password.html">Change Password</a>
                            </li>
                            <li>
                              <a href="error-404.html">404 Error</a>
                            </li>
                            <li>
                              <a href="error-500.html">500 Error</a>
                            </li>
                            <li>
                              <a href="under-maintenance.html">
                                Under Maintenance
                              </a>
                            </li>
                            <li>
                              <a href="coming-soon.html">Coming Soon</a>
                            </li>
                            <li>
                              <a href="index-rtl.html">RTL</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="header-btn d-flex align-items-center">
            <div className="me-3">
              <a href="#" id="dark-mode-toggle" className="theme-toggle">
                <i className="isax isax-moon" />
              </a>
              <a href="#" id="light-mode-toggle" className="theme-toggle">
                <i className="isax isax-sun-1" />
              </a>
            </div>
            <div>
              <Link
                to={"/auth/login"}
                className="btn btn-white me-3"
              >
                Sign In
              </Link>
            </div>
            <a href="become-an-expert.html" className="btn btn-primary me-0">
              Become Expert
            </a>
            <div className="header__hamburger d-xl-none my-auto">
              <div className="sidebar-menu">
                <i className="isax isax-menu5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>


  );
};

export default Header;