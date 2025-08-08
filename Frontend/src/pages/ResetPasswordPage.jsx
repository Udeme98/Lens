import React, { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react"; // Import icons
import { Link } from "react-router-dom"; // Import Link for navigation

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Function to toggle new password visibility
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  // Function to toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      console.log("Passwords do not match!");
      // In a real app, you'd show an error message to the user
      return;
    }
    // In a real application, you would send the new password to your backend
    console.log("Password reset initiated with new password:", newPassword);
    // Redirect to login page or show success message
    console.log("Password has been reset successfully!");
  };

  return (
    <div className="min-h-screen bg-[#262627] flex p-4">
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

        {/* Dashboard Text */}
        <h1 className="text-white text-lg font-medium tracking-wide uppercase mb-6">
          RESET PASSWORD
        </h1>

        {/* Reset Password Card */}
        <div className="bg-[#202021] p-8 rounded-xl w-full max-w-md">
          <h2 className="text-white text-xl font-semibold mb-6 text-center">
            Set Your New Password
          </h2>

          <p className="text-gray-400 text-sm text-center mb-6">
            Please enter your new password and confirm it.
          </p>

          {/* New Password Input */}
          <div className="mb-6 relative">
            <label htmlFor="new-password" className="sr-only">
              New Password
            </label>
            <input
              type={showNewPassword ? "text" : "password"}
              id="new-password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 bg-[#202021] text-white placeholder-gray-400 rounded-lg border border-white pr-10 "
            />
            <button
              type="button"
              onClick={toggleNewPasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white focus:outline-none"
            >
              {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm New Password Input */}
          <div className="mb-8 relative">
            <label htmlFor="confirm-password" className="sr-only">
              Confirm New Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 bg-[#202021] text-white placeholder-gray-400 rounded-lg border border-white pr-10 "
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white focus:outline-none"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-[#F0EBE0] text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-[#D0C7B6] focus:outline-none focus:ring-2 focus:ring-[#E0D7C6] focus:ring-opacity-50 transition duration-300"
          >
            Reset Password
          </button>

          {/* Back to Login Link */}
          <div className="text-center mt-6">
            <Link
              to="/login-page"
              className="inline-flex items-center text-gray-400 hover:text-gray-200 text-sm"
            >
              <ArrowLeft size={16} className="mr-1" />
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
