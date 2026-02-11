import { Link } from "react-router-dom"
import SocialAuth from "../../components/Auth/SocialAuth"
import { useState } from "react"
import {useRegisterMutation} from "../../services/authService"
import { useEffect } from "react"
import toast from "react-hot-toast"

const RegisterPage = () => {

  const [register, {isLoading,isError,error,isSuccess, data}] = useRegisterMutation();


  useEffect(() => {

    if(isSuccess && data ){
     console.log("success",data)
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
    await register(form).unwrap();

  }

    return (
        <>
      <div className="card authentication-card">
  <div className="card-header">
    <div className="text-center">
      <h5 className="mb-1">Sign Up</h5>
      <p>Create your DreamsTour Account</p>
    </div>
  </div>
  <div className="card-body">
    <form method="POST" onSubmit={handleSubmit}>
    <div className="d-flex gap-2">
        <div className="mb-3">
        <label className="form-label">First Name</label>
        <div className="input-icon">
          <span className="input-icon-addon">
            <i className="isax isax-user" />
          </span>
          <input
            type="text"
            name="first_name"
            className="form-control form-control-lg"
            placeholder="Enter First Name"
            value={form.first_name}
            onChange={handleChange}
          />
        </div>
      </div>
        <div className="mb-3">
        <label className="form-label">Last Name</label>
        <div className="input-icon">
          <span className="input-icon-addon">
            <i className="isax isax-user" />
          </span>
          <input
            type="text"
              name="last_name"
            className="form-control form-control-lg"
            placeholder="Enter Last Name"
            value={form.last_name}
            onChange={handleChange}
          />
        </div>
      </div>

    </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <div className="input-icon">
          <span className="input-icon-addon">
            <i className="isax isax-message" />
          </span>
          <input
            type="email"
              name="email"
            className="form-control form-control-lg"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
         
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
              name="password"
            className="form-control form-control-lg pass-input"
            placeholder="Enter Password"
             value={form.password}
            onChange={handleChange}
        
          />
          <span className="input-icon-addon toggle-password">
            <i className="isax isax-eye-slash" />
          </span>
        </div>
      </div>
     
      <div className="mt-3 mb-3">
        <div className="d-flex">
          <div className="form-check d-flex align-items-center mb-2">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              defaultValue=""
              id="agree"
            />
            <label
              className="form-check-label ms-2 text-gray-9 fs-14"
              htmlFor="agree"
            >
              I agree with the&nbsp;
              <a
                href="terms-conditions.html"
                className="link-primary fw-medium"
              >
                Terms Of Service.
              </a>
            </label>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-xl btn-primary d-flex align-items-center justify-content-center w-100"
        >
          {isLoading ? "loading" : "Register"}
          <i className="isax isax-arrow-right-3 ms-2" />
        </button>
      </div>
    <SocialAuth/>
      <div className="d-flex justify-content-center">
        <p className="fs-14">
          Already have an account?{" "}
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
export default RegisterPage