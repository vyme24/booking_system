import { useEffect } from "react";
import toast from "react-hot-toast";

const LoginSuccessPage = () => {
    const userSession = window.location.search.split("?token=")[1];

    useEffect(()=> {
       

        if(userSession){
            localStorage.setItem("token",userSession);
            toast.success("Login Success")
            window.location.href="/"
        }

    },[])


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
             Processing
            </div>
          </div>
        </>
    )


}
export default LoginSuccessPage