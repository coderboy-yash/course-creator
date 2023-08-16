"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = ({ token, setToken }) => {
  const handleLogOut = async () => {
    sessionStorage.removeItem("token");
    setToken(false);
  };
  return (
    <div className="flex justify-between px-8 py-4 shadow-md shadow-yellow-300  items-center bg-white">
      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
      <Link href="/">  <span className="text-7xl font">S</span>kill Point</Link>
      </div>

      {token ? (
        <div>
          <button
            onClick={handleLogOut}
            className="bg-orange-400 p-3 mx-4 text-2xl rounded-xl text-white font-bold"
          >
            Log out
          </button>
        </div>
      ) : (
        <div>
          <Link
            className="bg-orange-400 p-3 mx-4 text-2xl rounded-xl text-white font-bold"
            href={"/signup"}
          >
            Sign Up
          </Link>

          <Link
            className="bg-orange-400 p-3 mx-4 text-2xl rounded-xl text-white font-bold"
            href={"/login"}
          >
            Log In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
