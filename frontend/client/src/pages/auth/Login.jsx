import { Link, useNavigate } from "react-router-dom";
import SocialAuth from "../../components/Auth/SocialAuth";
import toast from "react-hot-toast";
import { useLoginMutation } from "../../services/authService";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("email");

  const [login, { isLoading, isError, error, isSuccess, data }] =
    useLoginMutation();

    const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && data) {

      toast.success(data.message);
        navigate("/auth/verify", {state : data.data})
    }

    if (error) {
      toast.error(error?.data?.message || "Login failed");
    }
  }, [isLoading, isSuccess, isError, error, data]);

  const [form, setForm] = useState({
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload =
      activeTab === "email"
        ? { email: form.email, password: form.password }
        : { mobile: form.mobile, password: form.password };

    await login(payload).unwrap();
  };

  return (
    <>
      <div className="card authentication-card">
        <div className="card-header text-center">
          <h5 className="mb-1">Sign In</h5>
          <p>Welcome back to DreamsTour ✨</p>
        </div>

        <div className="card-body">

          {/* Tabs */}
          <div className="auth-tabs mb-4">
            <ul className="nav nav-pills nav-justified">
              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link ${
                    activeTab === "email" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("email")}
                >
                  <i className="isax isax-message me-2"></i>
                  Email
                </button>
              </li>

              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link ${
                    activeTab === "mobile" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("mobile")}
                >
                  <i className="isax isax-call me-2"></i>
                  Mobile
                </button>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit}>

            {/* Email Field */}
            {activeTab === "email" && (
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
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            {/* Mobile Field */}
            {activeTab === "mobile" && (
              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <div className="input-icon">
                  <span className="input-icon-addon">+91</span>
                  <input
                    type="tel"
                    className="form-control form-control-lg"
                    placeholder="Enter Mobile Number"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    maxLength={10}
                  />
                </div>
              </div>
            )}

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-icon">
                <span className="input-icon-addon">
                  <i className="isax isax-lock" />
                </span>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter Password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
                <span className="input-icon-addon toggle-password">
                  <i className="isax isax-eye-slash" />
                </span>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="mt-3 mb-3 d-flex justify-content-between align-items-center flex-wrap">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember_me"
                />
                <label className="form-check-label" htmlFor="remember_me">
                  Remember Me
                </label>
              </div>

              <Link
                to="/auth/forgot-password"
                className="link-primary fw-medium"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-xl btn-primary w-100"
            >
              {isLoading ? "Loading..." : "Sign In"}
            </button>

            <SocialAuth />

            <div className="text-center mt-3">
              <p className="fs-14">
                Don't have an account?{" "}
                <Link to="/auth/register" className="link-primary fw-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;