import { Link } from "react-router-dom"
import { useForgotPasswordMutation, useResetPasswordMutation } from "../../services/authService";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ResetPasswordPage = () => {
   const [resetPassword, {isLoading,isError,error,isSuccess, data}] = useResetPasswordMutation();
   const token = window.location.search.split("token=")[1]
  useEffect(() => {

    if(isSuccess && data ){
     console.log("success",data)
     toast.success(data.message)
     window.location.href = "/auth/login"
  
    }
    if(error){
      toast.error(error.data.message)
    }

  },[isLoading,isSuccess,isError,error, data])

  const [form, setForm] = useState({
    password: "",
    confirm_password: ""
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
    if(!form.password || !form.confirm_password){
      toast.error("pls fill required input")
      return;
    }
    if(form.password !== form.confirm_password){
      toast.error("Password and Confirm Password must be same")
      return;
    }
    await resetPassword({body:form,token}).unwrap();

  }

    return (
        <>
      <div className="card authentication-card">
  <div className="card-header">
    <div className="text-center">
      <h5 className="mb-1">Reset Password</h5>
      <p>Reset Your DreamsTour Password</p>
    </div>
  </div>
  <div className="card-body">
    <form onSubmit={handleSubmit} method="POST">
      <div className="mb-3">
        <label className="form-label">Password</label>
        <div className="input-icon">
          <span className="input-icon-addon">
            <i className="isax isax-message" />
          </span>
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Enter Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Confirm Password</label>
        <div className="input-icon">
          <span className="input-icon-addon">
            <i className="isax isax-message" />
          </span>
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Enter Confirm Password"
            name="confirm_password"
            value={form.confirm_password}
            onChange={handleChange}
          />
        </div>
      </div>
     
      <div className="mb-3">
        <button
          type="submit"
          className="btn btn-xl btn-primary d-flex align-items-center justify-content-center w-100"
        >
         {isLoading ? "Loading..." : "Reset Password"}
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
export default ResetPasswordPage