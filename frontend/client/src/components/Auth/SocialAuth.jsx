
const SocialAuth = () => {

   const handleSocial = (name) => {
       window.location.href= "http://127.0.0.1:5000/auth/"+name
   }


return (
    <>
        <div className="login-or mb-3">
        <span className="span-or">Or</span>
      </div>
      <div className="d-flex align-items-center mb-3">
        
        <button
          onClick={() => handleSocial("google")}
          className="btn btn-light flex-fill d-flex align-items-center justify-content-center me-2"
        >
          <img
            src="/assets/img/icons/google-icon.svg"
            className="me-2"
            alt="Img"
          />
          Google
        </button>
        <button
            onClick={() => handleSocial("facebook")}
    
          className="btn btn-light flex-fill d-flex align-items-center justify-content-center"
        >
          <img src="/assets/img/icons/fb-icon.svg" className="me-2" alt="Img" />
          Facebook
        </button>
      </div>

   
      </>
)

}

export default SocialAuth