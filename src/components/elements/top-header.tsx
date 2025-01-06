import React from "react";

const TopHeader: React.FC = () => {
  return (
    <div className="bg-green-700 text-white text-sm">
      <div className="max-w-5xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center space-y-2 sm:space-y-0">
        {/* Left Section */}
        <div className="flex space-x-4 flex-col items-center md:flex-row">
          <span>📞 +8801870214081</span>
          <span>✉️ jayedbgh@gmail.com</span>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4">
          <a href="/about-us" className="hover:underline">
            About Us
          </a>
          <a href="/faq" className="hover:underline">
            FAQ
          </a>
          <a href="/contact" className="hover:underline">
            Help Center
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
