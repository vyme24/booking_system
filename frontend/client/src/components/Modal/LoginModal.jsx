import { useState } from 'react';

const LoginModal = () => {
 

  return (
 <div className="modal fade" id="login-modal">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header d-flex align-items-center justify-content-end pb-0 border-0">
        <a href="#" data-bs-dismiss="modal" aria-label="Close">
          <i className="ti ti-x fs-20" />
        </a>
      </div>
      <div className="modal-body p-4 pt-0">
        <form action="index.html">
          <div className="text-center mb-3">
            <h5 className="mb-1">Sign In</h5>
            <p>Sign in to Start Manage your DreamsTour Account</p>
          </div>
          <div className="mb-2">
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
          <div className="mb-2">
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
              <a
                href="#"
                className="link-primary fw-medium fs-14 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#forgot-modal"
              >
                Forgot Password?
              </a>
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
          <div className="login-or mb-3">
            <span className="span-or">Or</span>
          </div>
          <div className="d-flex align-items-center mb-3">
            <a
              href="#"
              className="btn btn-light flex-fill d-flex align-items-center justify-content-center me-2"
            >
              <img
                src="assets/img/icons/google-icon.svg"
                className="me-2"
                alt="Img"
              />
              Google
            </a>
            <a
              href="#"
              className="btn btn-light flex-fill d-flex align-items-center justify-content-center"
            >
              <img
                src="assets/img/icons/fb-icon.svg"
                className="me-2"
                alt="Img"
              />
              Facebook
            </a>
          </div>
          <div className="d-flex justify-content-center">
            <p className="fs-14">
              Don't you have an account?{" "}
              <a
                href="#"
                className="link-primary fw-medium"
                data-bs-toggle="modal"
                data-bs-target="#register-modal"
              >
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  );
};

export default LoginModal;