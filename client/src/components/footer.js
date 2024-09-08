import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-start">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="bg-blue-600 text-white rounded-full p-2">
            <span className="text-xl font-bold">e</span>
          </div>
          <span className="ml-2 text-2xl font-bold text-gray-800">Redex</span>
        </div>

        {/* Information Section */}
        <div>
          <h5 className="font-semibold text-gray-600 mb-3">Information</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h5 className="font-semibold text-gray-600 mb-3">Categories</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Cosmetic
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Clothing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Jewelry
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Watches
              </a>
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h5 className="font-semibold text-gray-600 mb-3">Social</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                YouTube
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Whatsapp
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h5 className="font-semibold text-gray-600 mb-3">Help</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
