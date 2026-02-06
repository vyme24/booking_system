import { Link } from "react-router-dom"

const ForgotPage = () => {

    return (
        <>
      <div className="card authentication-card">
  <div className="card-header">
    <div className="text-center">
      <h5 className="mb-1">Forgot Password</h5>
      <p>Reset Your DreamsTour Password</p>
    </div>
  </div>
  <div className="card-body">
    <form action="change-password.html">
      <div className="mb-3">
        <label className="form-label">Email</label>
        <div className="input-icon">
          <span className="input-icon-addon">
            <i className="isax isax-message" />
          </span>
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter Email"
          />
        </div>
      </div>
      <div className="mb-4">
        <p className="text-success">
          <i className="isax isax-tick-circle5 me-1" />
          Reset Password Sent to “
          <a
            href="https://dreamstour.dreamstechnologies.com/cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="e58481978c848ba5809d8488958980cb868a88"
          >
            [email&nbsp;protected]
          </a>
          ”
        </p>
      </div>
      <div className="mb-3">
        <button
          type="submit"
          className="btn btn-xl btn-primary d-flex align-items-center justify-content-center w-100"
        >
          Reset Password
          <i className="isax isax-arrow-right-3 ms-2" />
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <p className="fs-14">
          Remember Password ?{" "}
          <Link to="/auth/login" className="link-primary fw-medium">
            Sign In
          </Link>
        </p>
      </div>
    </form>
  </div>
</div>

        </>
    )


}
export default ForgotPage