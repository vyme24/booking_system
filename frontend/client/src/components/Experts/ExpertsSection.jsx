import React from "react";
import Slider from "react-slick";

const expertsData = [
  {
    id: 1,
    name: "Damien Martien",
    rating: "5.0",
    reviews: "499 Reviews",
    country: "Brazil, Rio",
    flag: "assets/img/flags/brazil.svg",
    image: "assets/img/expert/expert-01.png",
    bg: "bg-purple-100",
    circle: "bg-info",
    listings: 14,
    price: 452,
  },
  {
    id: 2,
    name: "Connie Allen",
    rating: "4.9",
    reviews: "315 Reviews",
    country: "Tokyo, Japan",
    flag: "assets/img/flags/japan.svg",
    image: "assets/img/expert/expert-02.png",
    bg: "bg-orange-100",
    circle: "bg-orange",
    listings: 21,
    price: 689,
  },
  {
    id: 3,
    name: "Ida Olsen",
    rating: "4.7",
    reviews: "220 Reviews",
    country: "Cape Town, South Africa",
    flag: "assets/img/flags/africa.svg",
    image: "assets/img/expert/expert-03.png",
    bg: "bg-pink-100",
    circle: "bg-pink",
    listings: 15,
    price: 230,
  },
  {
    id: 4,
    name: "Damien Martien",
    rating: "5.0",
    reviews: "180 Reviews",
    country: "Sydney, Australia",
    flag: "assets/img/flags/australia.svg",
    image: "assets/img/expert/expert-04.png",
    bg: "bg-teal-100",
    circle: "bg-teal",
    listings: 15,
    price: 563,
  },
  {
    id: 5,
    name: "Catalina Schmeling",
    rating: "4.9",
    reviews: "160 Reviews",
    country: "Oslo, Norway",
    flag: "assets/img/flags/norway.svg",
    image: "assets/img/expert/expert-05.png",
    bg: "bg-purple-100",
    circle: "bg-purple",
    listings: 17,
    price: 550,
  },
];

const ExpertsSection = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="section experts-section">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-10 text-center">
            <div className="section-header">
              <h2 className="mb-2">
                Our{" "}
                <span className="text-primary text-decoration-underline">
                  Popular
                </span>{" "}
                Experts
              </h2>
              <p className="sub-title">
                Here are some famous tourist places around the world that are
                known for their historical significance, natural beauty, or
                cultural impact:
              </p>
            </div>
          </div>
        </div>

        {/* Slick Slider */}
        <Slider {...settings} className="experts-slider">
          {expertsData.map((expert) => (
            <div key={expert.id} className="px-3">
              <div className="expert-item mb-4">
                <a href="#" className="expert-img">
                  <div className={`${expert.bg} position-relative`}>
                    <img src={expert.image} alt={expert.name} />
                    <span className={`${expert.circle} circle-shape`} />
                  </div>
                </a>

                <div className="expert-content">
                  <div className="d-flex align-items-center mb-1">
                    <span className="badge badge-warning badge-xs me-2">
                      {expert.rating}
                    </span>
                    <p>({expert.reviews})</p>
                  </div>

                  <h5 className="mb-1">{expert.name}</h5>

                  <p className="d-flex align-items-center">
                    <img src={expert.flag} alt="" className="me-2" />
                    {expert.country}
                  </p>

                  <div className="d-flex border-top mt-3 pt-3">
                    <div className="flex-fill">
                      <p className="mb-1">Total Listings</p>
                      <h6>{expert.listings}</h6>
                    </div>
                    <div className="flex-fill">
                      <p className="mb-1">Starts From</p>
                      <h6>${expert.price}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Button */}
        <div className="text-center view-all">
          <a href="team.html" className="btn btn-dark">
            View All Experts
            <i className="isax isax-arrow-right-3 ms-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
