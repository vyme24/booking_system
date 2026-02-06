import { Link } from "react-router-dom"
import SocialAuth from "../../components/Auth/SocialAuth"

const LoginPage = () => {

    return (
        <>
       <div className="card authentication-card">
            <div className="card-header">
              <div className="text-center">
                <h5 className="mb-1">Sign In</h5>
                <p>Sign in to Start Manage your DreamsTour Account</p>
              </div>
            </div>
            <div className="card-body">
              <form action="index.html">
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
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="input-icon">
                    <span className="input-icon-addon">
                      <i className="isax isax-lock" />
                    </span>
                    <input
                      type="password"
                      className="form-control form-control-lg pass-input"
                      placeholder="Enter Password"
                    />
                    <span className="input-icon-addon toggle-password">
                      <i className="isax isax-eye-slash" />
                    </span>
                  </div>
                </div>
                <div className="mt-3 mb-3">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <div className="form-check d-flex align-items-center mb-2">
                      <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        defaultValue=""
                        id="remembers_me"
                      />
                      <label
                        className="form-check-label ms-2 text-gray-9 fs-14"
                        htmlFor="remembers_me"
                      >
                        Remember Me
                      </label>
                    </div>
                    <Link
                      to="/auth/forgot-password"
                      className="link-primary fw-medium fs-14 mb-2"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-xl btn-primary d-flex align-items-center justify-content-center w-100"
                  >
                    Login
                    <i className="isax isax-arrow-right-3 ms-2" />
                  </button>
                </div>
                <SocialAuth/>
                <div className="d-flex justify-content-center">
                  <p className="fs-14">
                    Don't you have an account?{" "}
                    <Link to="/auth/register" className="link-primary fw-medium">
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </>
    )


}
export default LoginPage