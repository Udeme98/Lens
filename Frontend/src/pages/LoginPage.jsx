import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="min-h-screen bg-[#262627] flex  p-4">
      <div className="flex flex-col items-center w-full max-w-md mx-auto mt-[140px]">
        {/* Logo Section */}
        <div className="mb-8">
          <img
            src="/images/loginimage.png"
            alt="Company Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Dashboard Login Text */}
        <h1 className="text-white text-lg font-medium tracking-wide uppercase mb-6">
          DASHBOARD LOGIN
        </h1>

        {/* Login Card */}
        <div className="bg-[#202021] p-8 rounded-xl  w-full max-w-md">
          <h2 className="text-white text-xl font-semibold mb-6 text-center">
            Welcome Back!
          </h2>

          {/* Email Input */}
          <div className="mb-8">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-[#202021] text-white placeholder-gray-400 rounded-lg border border-white"
            />
          </div>

          <div className="mb-10 relative">
            {" "}
            {/* Added relative positioning here */}
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"} // Dynamically set input type
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-[#202021] text-white placeholder-gray-400 rounded-lg border border-white pr-10" // Added pr-10 for icon spacing
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white focus:outline-none"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}{" "}
              {/* Toggle icons */}
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right mb-6">
            <Link
              to="/forgot-password"
              className="text-gray-400 hover:text-gray-200 text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#F0EBE0] text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-[#D0C7B6] focus:outline-none focus:ring-2 focus:ring-[#E0D7C6] focus:ring-opacity-50 transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
