import { useNavigate , useLocation } from "react-router-dom";
import { useVerifyMutation } from "../../services/authService"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const VerifyPage = () => {
  const [verifyOTP, {isLoading, isSuccess, isError, error, data}] = useVerifyMutation();
  const navigate = useNavigate();
  const location = useLocation();

   const {userId, type, expiresAt} = location.state || {};


  const [form, setForm] = useState({
    otp: "",
     
  })

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
    if(!form.otp){
      return toast.error("OTP is required")
    }
    await verifyOTP({userId, otp: form.otp, type})
  } 

  useEffect(() => {
    console.log("verify", userId, type)

    if(isSuccess && data){
      toast.success(data.message)
      localStorage.setItem("token", data.data.token)
      navigate("/")
    }
    if(isError){
      toast.error(error.data.message)
    }
  },[isLoading,isSuccess,isError,error, data])


    return (
        <div className="auth-wrapper d-flex align-items-center justify-content-center">
            <div className="auth-card shadow-lg">
                <div className="auth-header text-center">
                    <h2 className="mb-2">Verify Your Account</h2>
                    <p className="text-muted mb-0">We emailed you the six digit code to cool down your account. Please enter the code below to confirm your email.</p>    
                </div>
                <form className="auth-form mt-4" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="verificationCode" className="form-label">Verification Code</label>
                        <input type="number" className="form-control form-control-lg" id="verificationCode" name="otp" value={form.otp} onChange={handleChange} placeholder="Enter 6 digit code"/>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-4 py-3 fw-semibold rounded-pill">Verify Account</button>
                </form>
            </div>
        </div>
    )
}

export default VerifyPage