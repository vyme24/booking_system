import { Link, useNavigate } from "react-router-dom"
import SocialAuth from "../../components/Auth/SocialAuth"
import { useState } from "react"
import {useRegisterMutation} from "../../services/authService"
import { useEffect } from "react"
import toast from "react-hot-toast"

const RegisterPage = () => {

  const [register, {isLoading,isError,error,isSuccess, data}] = useRegisterMutation();

const [activeTab, setActiveTab] = useState("email");
  const navigate = useNavigate();

  useEffect(() => {

    if(isSuccess && data ){
     console.log("success",data)
     navigate("/auth/verify", {state : data.data})
     toast.success(data.message)

     setForm(null)
    }
    if(error){
      toast.error(error.data.message)
    }

  },[isLoading,isSuccess,isError,error, data])

 

  const [form, setForm] = useState({
    first_name: "",
    last_name:"",
    email: "",
    mobile:"",
    password:""
  });


  const handleChange = (e) => {
    const {name, value} = e.target

    setForm(prev => ({
      ...prev,
      [name]: value
      })
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
     
      if (!form.first_name)
      return toast.error("First name required");
     if (!form.last_name)
      return toast.error("Last name required");

     if (activeTab === "email" && !form.email)
      return toast.error("Email required");

    if (activeTab === "mobile" && !form.mobile)
      return toast.error("Mobile required");

      if (!form.password)
      return toast.error("Password required");
   
    await register(form).unwrap();

  }

    return (
        <>
    <div className="auth-wrapper d-flex align-items-center justify-content-center">
  <div className="auth-card shadow-lg">

    {/* Header */}
    <div className="auth-header text-center">
      <h4 className="fw-bold mb-1">Create Account</h4>
      <p className="text-muted mb-0">Join DreamsTour & start exploring ✨</p>
    </div>

    {/* Tabs */}
    <div className="auth-switch mt-4">
      <div className="switch-pill">
        <button
          type="button"
          className={`switch-btn ${activeTab === "mobile" ? "active" : ""}`}
          onClick={() => setActiveTab("mobile")}
        >
          <i className="isax isax-call me-2"></i>Mobile
        </button>
        <button
          type="button"
          className={`switch-btn ${activeTab === "email" ? "active" : ""}`}
          onClick={() => setActiveTab("email")}
        >
          <i className="isax isax-message me-2"></i>Email
        </button>
      </div>
    </div>

    {/* Form */}
    <form className="mt-4" onSubmit={handleSubmit}>

      {/* Name Row */}
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              name="first_name"
              className="form-control"
              placeholder="First Name"
              value={form?.first_name}
              onChange={handleChange}
            />
            <label>First Name</label>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              name="last_name"
              className="form-control"
              placeholder="Last Name"
              value={form?.last_name}
              onChange={handleChange}
            />
            <label>Last Name</label>
          </div>
        </div>
      </div>

      {/* Email / Mobile */}
      {activeTab === "email" && (
        <div className="form-floating mt-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email Address"
            value={form?.email}
            onChange={handleChange}
          />
          <label>Email Address</label>
        </div>
      )}

      {activeTab === "mobile" && (
        <div className="input-group mt-3">
          <span className="input-group-text bg-light">+91</span>
          <div className="form-floating flex-grow-1">
            <input
              type="tel"
              name="mobile"
              className="form-control"
              placeholder="Mobile Number"
              value={form?.mobile}
              onChange={handleChange}
              maxLength={10}
            />
            <label>Mobile Number</label>
          </div>
        </div>
      )}

      {/* Password */}
      <div className="form-floating mt-3 position-relative">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={form?.password}
          onChange={handleChange}
        />
        <label>Password</label>
        <span className="password-toggle">
          <i className="isax isax-eye-slash"></i>
        </span>
      </div>

      {/* Terms */}
      <div className="form-check mt-3">
        <input className="form-check-input" type="checkbox" id="agree" />
        <label className="form-check-label small" htmlFor="agree">
          I agree to the{" "}
          <a href="terms-conditions.html" className="fw-semibold text-primary">
            Terms of Service
          </a>
        </label>
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="btn btn-primary w-100 mt-4 py-3 mb-2 fw-semibold rounded-pill"
      >
        {isLoading ? "Creating Account..." : "Create Account"}
      </button>
      <SocialAuth />

      <p className="text-center small">
        Already have an account?{" "}
        <Link to="/auth/login" className="fw-semibold text-primary">
          Sign In
        </Link>
      </p>

    </form>
  </div>
</div>

        </>
    )


}
export default RegisterPage