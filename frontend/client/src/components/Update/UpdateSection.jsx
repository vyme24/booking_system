const UpdateSection =()=>{
    return(<>
    <section className="update-section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="update-sec">
          <div className="section-header text-center">
            <h2 className="mb-1">Stay Updated</h2>
            <p className="sub-title">
              Signup for New Offers &amp; Updates from DreamsTour{" "}
            </p>
          </div>
          <div className="input-group justify-content-center mx-auto">
            <span className="input-group-text px-1">
              <i className="isax isax-message-favorite5" />
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email Address"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </div>
          <div className="update-bg">
            <img src="assets/img/bg/update-bg.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>)
}
export default UpdateSection;