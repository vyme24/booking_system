import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom"

const AuthLayout = () => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if(token){
      window.location.href = "/"
    }
  },[])

    return (
        <>
       <div className="main-wrapper authentication-wrapper">
  <div className="container-fuild">
    <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
      <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
        <div className="col-xxl-4 col-lg-6 col-md-6 col-11 mx-auto">
          <Link to={"/"} className="p-4 text-center">
            <img
              src="/assets/img/logo-dark.svg"
              alt="logo"
              className="img-fluid"
            />
          </Link>
          <Outlet/>
        </div>
      </div>
    </div>
  </div>
  <div className="coprright-footer">
    <p className="fs-14">
      Copyright © 2025. All Rights Reserved,{" "}
      <a href="#" className="text-primary fw-medium">
        DreamsTour
      </a>
    </p>
  </div>
</div>


        </>
    )


}
export default AuthLayout