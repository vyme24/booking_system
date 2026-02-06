
const BlogSection = () => {
  

  return (
   <section className="section blog-section pt-0">
  <div className="container">
    <div className="row justify-content-center">
      <div
        className="col-xl-6 col-lg-10 text-center wow fadeInUp"
        data-wow-delay="0.2s"
      >
        <div className="section-header text-center">
          <h2 className="mb-2">
            Recent{" "}
            <span className="text-primary text-decoration-underline">
              Articles
            </span>
          </h2>
          <p className="sub-title">
            DreamsTour offers various blog resources that cater to travel
            enthusiasts, with a focus on adventure, gear reviews, and travel
            tips.
          </p>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      {/* Blog Item*/}
      <div className="col-lg-4 col-md-6">
        <div className="blog-item mb-4 wow fadeInUp" data-wow-delay="0.2s">
          <a href="blog-details.html" className="blog-img">
            <img src="assets/img/blog/blog-01.jpg" alt="img" />
          </a>
          <span className="badge bg-primary fs-13 fw-medium">Travel</span>
          <div className="blog-info text-center">
            <div className="d-inline-flex align-items-center justify-content-center">
              <div className="d-inline-flex align-items-center border-end pe-3 me-3 mb-2">
                <a href="#" className="d-flex align-items-center">
                  <span className="avatar avatar-sm flex-shrink-0 me-2">
                    <img
                      src="assets/img/users/user-01.jpg"
                      className="rounded-circle border border-white"
                      alt="img"
                    />
                  </span>
                  <p>Bryan Bradfield</p>
                </a>
              </div>
              <p className="d-inline-flex align-items-center text-white mb-2">
                <i className="isax isax-calendar-2 me-2" />
                14 May 2025
              </p>
            </div>
            <h5>
              <a href="blog-details.html">
                Top 10 Hidden Gems places in Central Europe in 2025
              </a>
            </h5>
          </div>
        </div>
      </div>
      {/* /Blog Item*/}
      {/* Blog Item*/}
      <div className="col-lg-4 col-md-6">
        <div className="blog-item mb-4 wow fadeInUp" data-wow-delay="0.2s">
          <a href="blog-details.html" className="blog-img">
            <img src="assets/img/blog/blog-02.jpg" alt="img" />
          </a>
          <span className="badge bg-primary fs-13 fw-medium">Guide</span>
          <div className="blog-info text-center">
            <div className="d-inline-flex align-items-center justify-content-center">
              <div className="d-inline-flex align-items-center border-end pe-3 me-3 mb-2">
                <a href="#" className="d-flex align-items-center">
                  <span className="avatar avatar-sm flex-shrink-0 me-2">
                    <img
                      src="assets/img/users/user-02.jpg"
                      className="rounded-circle border border-white"
                      alt="img"
                    />
                  </span>
                  <p>Michell West</p>
                </a>
              </div>
              <p className="d-inline-flex align-items-center text-white mb-2">
                <i className="isax isax-calendar-2 me-2" />
                12 May 2025
              </p>
            </div>
            <h5>
              <a href="blog-details.html">
                Exploring the World: Your Ultimate Dream Tour Itinerary
              </a>
            </h5>
          </div>
        </div>
      </div>
      {/* /Blog Item*/}
      {/* Blog Item*/}
      <div className="col-lg-4 col-md-6">
        <div className="blog-item mb-4 wow fadeInUp" data-wow-delay="0.2s">
          <a href="blog-details.html" className="blog-img">
            <img src="assets/img/blog/blog-03.jpg" alt="img" />
          </a>
          <span className="badge bg-primary fs-13 fw-medium">Rental</span>
          <div className="blog-info text-center">
            <div className="d-inline-flex align-items-center justify-content-center">
              <div className="d-inline-flex align-items-center border-end pe-3 me-3 mb-2">
                <a href="#" className="d-flex align-items-center">
                  <span className="avatar avatar-sm flex-shrink-0 me-2">
                    <img
                      src="assets/img/users/user-03.jpg"
                      className="rounded-circle border border-white"
                      alt="img"
                    />
                  </span>
                  <p>Patricia Hasbro</p>
                </a>
              </div>
              <p className="d-inline-flex align-items-center text-white mb-2">
                <i className="isax isax-calendar-2 me-2" />
                14 May 2025
              </p>
            </div>
            <h5>
              <a href="blog-details.html">
                New York City, USA - The City That Never Sleeps
              </a>
            </h5>
          </div>
        </div>
      </div>
      {/* /Blog Item*/}
    </div>
    <div className="text-center view-all wow fadeInUp">
      <a
        href="blog-grid.html"
        className="btn btn-dark d-inline-flex align-items-center"
      >
        View All Articles
        <i className="isax isax-arrow-right-3 ms-2" />
      </a>
    </div>
  </div>
</section>

  );
};

export default BlogSection;