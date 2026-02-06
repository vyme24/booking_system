import { useState } from 'react';

const ForgotPasswordModal = () => {
 

  return (
   <div className="modal fade" id="forgot-modal">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header d-flex align-items-center justify-content-end pb-0 border-0">
        <a href="#" data-bs-dismiss="modal" aria-label="Close">
          <i className="ti ti-x fs-20" />
        </a>
      </div>
      <div className="modal-body p-4 pt-0">
        <form action="#">
          <div className="text-center border-bottom mb-3">
            <h5 className="mb-1">Forgot Password</h5>
            <p>Reset Your DreamsTour Password</p>
          </div>
          <div className="mb-4">
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
            <button
              type="button"
              className="btn btn-xl btn-primary d-flex align-items-center justify-content-center w-100"
              data-bs-toggle="modal"
              data-bs-target="#change-password"
            >
              Reset Password
              <i className="isax isax-arrow-right-3 ms-2" />
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <p className="fs-14">
              Remember Password ?{" "}
              <a
                href="#"
                className="link-primary fw-medium"
                data-bs-toggle="modal"
                data-bs-target="#login-modal"
              >
                Sign In
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

export default ForgotPasswordModal;