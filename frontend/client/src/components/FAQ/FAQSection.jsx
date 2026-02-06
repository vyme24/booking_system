import React, { useState } from 'react';


const FAQSection = () => {
 

  return (
   <section className="faq-section section">
  <div className="container">
    <div className="faq-sec">
      <div className="row justify-content-center">
        <div
          className="col-xl-6 col-lg-10 text-center wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="section-header text-center">
            <h2 className="mb-2">
              Frequently Asked{" "}
              <span className="text-primary  text-decoration-underline">
                Questions
              </span>
            </h2>
            <p className="sub-title">
              DreamsTour, a tour operator specializing in dream destinations,
              offers a variety of benefits for travelers.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="accordion accordion-flush" id="accordionFaq">
            <div
              className="accordion-item show mb-3 pb-3 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-collapseOne"
                  aria-expanded="false"
                  aria-controls="faq-collapseOne"
                >
                  What types of tours do you offer?
                </button>
              </h2>
              <div
                id="faq-collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionFaq"
              >
                <div className="accordion-body">
                  <p className="mb-0">
                    We offer a wide range of tours, including cultural,
                    adventure, luxury, and customized itineraries.
                  </p>
                  <p>
                    Popular destinations include Europe, Africa (e.g., Morocco),{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="accordion-item mb-3 pb-3 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-collapsetwo"
                  aria-expanded="false"
                  aria-controls="faq-collapsetwo"
                >
                  Are the tours customizable?
                </button>
              </h2>
              <div
                id="faq-collapsetwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFaq"
              >
                <div className="accordion-body">
                  <p>
                    We offer a wide range of tours, including cultural,
                    adventure, luxury, and customized itineraries.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="accordion-item mb-3 pb-3 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-collapsthree"
                  aria-expanded="false"
                  aria-controls="faq-collapsthree"
                >
                  What safety measures do you follow?
                </button>
              </h2>
              <div
                id="faq-collapsthree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFaq"
              >
                <div className="accordion-body">
                  <p>
                    We offer a wide range of tours, including cultural,
                    adventure, luxury, and customized itineraries.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="accordion-item mb-3 pb-3 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-collapsefour"
                  aria-expanded="false"
                  aria-controls="faq-collapsefour"
                >
                  How far in advance should I book?
                </button>
              </h2>
              <div
                id="faq-collapsefour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFaq"
              >
                <div className="accordion-body">
                  <p>
                    We offer a wide range of tours, including cultural,
                    adventure, luxury, and customized itineraries.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="1.0s">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-collapsefive"
                  aria-expanded="false"
                  aria-controls="faq-collapsefive"
                >
                  What is your cancellation policy?
                </button>
              </h2>
              <div
                id="faq-collapsefive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFaq"
              >
                <div className="accordion-body">
                  <p>
                    We offer a wide range of tours, including cultural,
                    adventure, luxury, and customized itineraries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default FAQSection;