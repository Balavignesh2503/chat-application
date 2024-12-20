import React from "react";
import chatimg from "../assets/chatlanding.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ChatAppLandingPage() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center">
      {/* Navigation */}
      <header className="w-full bg-white shadow-md">
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <motion.img
              src="https://via.placeholder.com/50"
              alt="Logo"
              className="h-12 w-12"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            />
            <h1 className="text-xl font-bold text-blue-600 ml-3">ChatApp</h1>
          </div>
          <ul className="flex space-x-6 text-blue-600 font-medium">
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="/signin" href="#login" className="hover:text-blue-800">
                {" "}
                Login
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="/signup" href="#login" className="hover:text-blue-800">
                {" "}
                Sign up
              </Link>
            </motion.li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col lg:flex-row items-center max-w-6xl mx-auto mt-16 px-6 space-y-8 lg:space-y-0">
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-blue-600 leading-tight">
            Discussion & Chat Application
          </h1>
          <p className="text-gray-600 mt-4">
            Connect with friends, colleagues, and loved ones anytime, anywhere.
            Fast, reliable, and secure communication made easy.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            <motion.button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
              whileHover={{ scale: 1.1 }}
              //   whileHover={{ rotate: 360 }}
              //   transition={{ duration: 1 }}
            >
              Join Now
            </motion.button>
            <motion.button
              className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-50"
              whileHover={{ scale: 1.1 }}
            >
              Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={chatimg}
            alt="Chat Illustration"
            className="rounded-lg shadow-lg w-3/4 sm:w-full lg:max-w-lg xl:max-w-xl h-auto"
          />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-blue-600 py-4 text-center text-white">
        <p whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          &copy; 2024 ChatApp. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
