import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage"
import AppLayout from "./layouts/AppLayout";
import LoginPage from "./pages/auth/Login";
import AuthLayout from "./layouts/AuthLayout";
import RegisterPage from "./pages/auth/Register";
import ForgotPage from "./pages/auth/ForgotPassword";
import {Toaster} from "react-hot-toast"
import ResetPasswordPage from "./pages/auth/resetPassword";
import LoginSuccessPage from "./pages/auth/social/LoginSuccess";

function App() {
  return (
<>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<AppLayout/>}>
        <Route path="/" element={<Homepage />} />
       </Route>
          <Route path="/auth" element={<AuthLayout/>}>
             <Route path="login" element={<LoginPage/>}/>
             <Route path="register" element={<RegisterPage/>}/>
             <Route path="forgot-password" element={<ForgotPage/>}/>
              <Route path="reset-password" element={<ResetPasswordPage/>}/>
              <Route path="login/success" element={<LoginSuccessPage/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    <Toaster position="top-center"  reverseOrder={false}/>
    </>
  );
}

export default App;
