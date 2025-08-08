import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState(""); // State to hold the email value

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would typically send a reset password email here.
    console.log("Reset password request for:", email);
    alert(
      "If an account with that email exists, a password reset link has been sent."
    ); // Using alert for demo, consider a custom modal in production
  };

  return (
    <div className="min-h-screen bg-[#262627] flex  p-4">
      <div className="flex flex-col items-center w-full max-w-md mx-auto mt-[140px]">
        {/* Logo Section */}
        <div className="mb-8">
          {/* Placeholder for the logo image */}
          <img
            src="/images/loginimage.png"
            alt="Company Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Dashboard Text (can be adjusted for Forgot Password) */}
        <h1 className="text-white text-lg font-medium tracking-wide uppercase mb-6">
          PASSWORD RECOVERY
        </h1>

        {/* Forgot Password Card */}
        <div className="bg-[#202021] p-8 rounded-xl w-full max-w-md">
          <h2 className="text-white text-xl font-semibold mb-6 text-center">
            Reset Your Password
          </h2>

          <p className="text-gray-400 text-sm text-center mb-6">
            Enter your email address below and we'll send you a link to reset
            your password.
          </p>

          {/* Email Input */}
          <div className="mb-8">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-[#202021] text-white placeholder-gray-400 rounded-lg border border-white"
            />
          </div>

          {/* Send Reset Link Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-[#F0EBE0] text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-[#D0C7B6] focus:outline-none focus:ring-2 focus:ring-[#E0D7C6] focus:ring-opacity-50 transition duration-300"
          >
            Send Reset Link
          </button>

          {/* Back to Login Link */}
          <div className="text-center mt-6">
            <Link
              to="/login-page"
              className="inline-flex items-center text-gray-400 hover:text-gray-200 text-sm"
            >
              <ArrowLeft size={16} className="mr-1" />{" "}
              {/* Arrow icon with margin */}
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
