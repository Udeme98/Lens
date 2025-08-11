import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate login validation (replace with actual API call)
    try {
      // For demo purposes, let's use a simple validation
      // In a real app, you would make an API call here
      if (
        formData.email === "test@test.com" &&
        formData.password === "password123"
      ) {
        // Successful login
        setTimeout(() => {
          setIsLoading(false);
          // Set authentication status
          localStorage.setItem("isLoggedIn", "true");
          sessionStorage.setItem("isLoggedIn", "true");
          navigate("/dashboard");
        }, 1000);
      } else {
        // Unsuccessful login
        setTimeout(() => {
          setIsLoading(false);
          setError("Unauthorized User");
        }, 1000);
      }
    } catch (error) {
      setIsLoading(false);
      setError("Unauthorized User");
    }
  };

  return (
    <div className="min-h-screen bg-[#262627] flex p-4">
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
        <div className="bg-[#202021] p-8 rounded-xl w-full max-w-md">
          <h2 className="text-white text-xl font-semibold mb-6 text-center">
            Welcome Back!
          </h2>

          {/* Error Message */}
          {error && (
            <div className="mb-6 text-center">
              <p className="text-[#FF0000] text-sm font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-8">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
                className="w-full px-4 py-2 bg-[#202021] text-white placeholder-gray-400 rounded-lg border border-white"
              />
            </div>

            <div className="mb-4 relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
                className="w-full px-4 py-2 bg-[#202021] text-white placeholder-gray-400 rounded-lg border border-white pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
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
              disabled={isLoading}
              className="w-full bg-[#F0EBE0] text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-[#D0C7B6] focus:outline-none focus:ring-2 focus:ring-[#E0D7C6] focus:ring-opacity-50 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
