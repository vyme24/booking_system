import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerifyMutation } from "../../services/authService";
import toast from "react-hot-toast";

const VerifyPage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const { userId, type, expiresAt } = location.state || {};

  const [verify, { isLoading, isSuccess, error, data }] =
    useVerifyMutation();

  const [form, setForm] = useState({
    userId: "",
    otp: "",
  });

  const [timeLeft, setTimeLeft] = useState(0);

  // redirect if no data
  useEffect(() => {
    if (!userId) navigate("/auth/login");
  }, [userId]);

  // set userid
  useEffect(() => {
    setForm(prev => ({ ...prev, userId }));
  }, [userId]);

  // countdown
  useEffect(() => {
    if (!expiresAt) return;

    const expiry = new Date(expiresAt).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const remaining = Math.max(
        Math.floor((expiry - now) / 1000),
        0
      );

      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(timer);
        toast.error("OTP Expired");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [expiresAt]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (timeLeft <= 0)
      return toast.error("OTP expired");

    await verify(form).unwrap();
  };

  useEffect(() => {
    if (isSuccess && data) {
      toast.success(data.message);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    }

    if (error) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <div className="bg-white p-8 rounded-xl border w-full max-w-md">

        <h3 className="text-xl font-semibold text-center mb-2">
          Verify OTP
        </h3>

        <p className="text-center text-gray-500 mb-6">
          OTP sent on {type}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="otp"
            placeholder="Enter OTP"
            value={form.otp}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-3 text-center text-lg tracking-widest"
          />

          <p className="text-center text-sm text-gray-500">
            Expires in {formatTime(timeLeft)}
          </p>

          <button
            disabled={isLoading || timeLeft <= 0}
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            {isLoading ? "Verifying..." : "Verify OTP"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default VerifyPage;