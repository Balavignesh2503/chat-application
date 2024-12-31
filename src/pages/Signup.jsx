import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");
  const [pic, setPic] = useState(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const senddata = ()=>{
    axios.post("http://localhost:5000/signup",{name,email,pass})                                                
    .then(()=>{
      alert("User created");
    })
    .catch(()=>{
      alert("user not created");
    })
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPic(URL.createObjectURL(file)); // Preview image
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
        {/* Logo Section */}
        <motion.div
          className="sm:mx-auto sm:w-full sm:max-w-sm"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white shadow-lg rounded-lg p-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <form action="#" method="POST" className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <motion.input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                  whileFocus={{ scale: 1.05 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <p>{name}</p>
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <motion.input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                  whileFocus={{ scale: 1.05 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <p>{email}</p>
              </div>
            </div>

            {/* Password Input */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <motion.input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="new-password"
                  onChange={(e) => setPass(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm pr-10"
                  whileFocus={{ scale: 1.05 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <p>{pass}</p>
                <button
                  type="button"
                  className="absolute inset-y-8 right-3 text-gray-600 hover:text-gray-800"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <motion.input
                  id="confirm-password"
                  name="confirm-password"
                  type={showConfPassword ? "text" : "password"}
                  required
                  autoComplete="new-password"
                  onChange={(e) => setConfPass(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm pr-10"
                  whileFocus={{ scale: 1.05 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <button
                  type="button"
                  className="absolute inset-y-8 right-3 text-gray-600 hover:text-gray-800"
                  onClick={() => setShowConfPassword(!showConfPassword)}
                >
                  {showConfPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Profile Picture Input */}
            <div>
              <label
                htmlFor="profile-picture"
                className="block text-sm font-medium text-gray-900"
              >
                Profile Picture
              </label>
              <div className="mt-2 relative">
                <motion.div
                  className="rounded-md bg-gray-500 text-white px-4 py-2 text-sm font-semibold shadow-md cursor-pointer hover:bg-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label
                    htmlFor="profile-picture"
                    className="cursor-pointer w-full text-center"
                  >
                    Choose File
                  </label>
                  <input
                    id="profile-picture"
                    name="profile-picture"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
                  />
                </motion.div>
                {pic && (
                  <div className="mt-4">
                    <img
                      src={pic}
                      
                      alt="Profile Preview"
                      className="w-20 h-20 rounded-full object-cover mx-auto"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <motion.button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={senddata}
              >
                Sign up
              </motion.button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
