const ChangePassword=()=>{
    return(<>
    <div className="modal fade" id="change-password">
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
            <h5 className="mb-1">Change Password</h5>
            <p className="mb-3">Enter Details to Change Password</p>
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
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
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
          <div className="mb-0">
            <button
              type="button"
              className="btn btn-xl btn-primary d-flex align-items-center justify-content-center w-100"
              data-bs-toggle="modal"
              data-bs-target="#login-password"
            >
              Change Password
              <i className="isax isax-arrow-right-3 ms-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </>)
}
export default ChangePassword;