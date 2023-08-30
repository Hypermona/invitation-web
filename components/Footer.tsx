import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 p-5">
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-sm">We are committed to providing great products and services.</p>
        </div>
        <div className="w-full md:w-1/3 p-5">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: inbyte@xyz.com</p>
          <p className="text-sm">Phone: +1-123-456-7890</p>
        </div>
        <div className="w-full md:w-1/3 p-5">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-2">
        <p className="text-sm">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
