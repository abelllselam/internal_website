"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.main
      className="relative bg-white/10 dark:bg-slate-900/20 backdrop-blur-lg rounded-t-2xl p-8 border border-black/20 dark:border-slate-700/30 shadow-lg dark:shadow-slate-900/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-gray-800 dark:text-gray-200">LOGO</div>
        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Quick Links
          </h4>
          <div className="space-y-2 flex flex-col items-start">
            <Link
              href="/"
              className=" text-gray-800 dark:text-gray-200 hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 dark:text-gray-200  hover:text-blue-400 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className=" text-gray-800 dark:text-gray-200 hover:text-blue-400 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* Contact Information */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold dark:text-white  mb-4">
            Contact Info
          </h4>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-center space-x-3">
              <svg
                className="w-5 h-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="dark:text-white text-black">+251 123456789</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-5 h-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-black dark:text-white">sendly@global.com</span>
            </div>
            <div className="flex items-start space-x-3">
              <svg
                className="w-5 h-5 text-blue-400 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-black dark:text-white">
                Lorem ipsum dolor sit.
                <br />
                Lorem, ipsum dolor.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-black/20 dark:border-slate-700/40 pt-4">
        <div>
          <p className="text-gray-700 dark:text-gray-300">Copyright</p>
        </div>
        <div>
          <p className="text-gray-700 dark:text-gray-300">
            Powered by{" "}
            <span className="font-semibold text-blue-600">
              NILEX Technologies
            </span>
          </p>
        </div>
      </div>
    </motion.main>
  );
};

export default Footer;
