"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = ({ token, setToken }) => {
  const handleLogOut = async () => {
    sessionStorage.removeItem("token");
    setToken(false);
  };
  return (
    <div
      style={{
        background:
          "linear-gradient(35deg, rgb(23, 30, 49) 0%, rgb(0, 18, 45) 45%);",
      }}
      className="flex justify-between px-8 py-2 mb-12  items-center bg-white"
    >
      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
        <Link href="/">
          {" "}
          <span className="text-2xl font">Course Creator</span>
        </Link>
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
            className="text-orange-400 p-3 mx-4 text-2xl rounded-xl  font-bold"
            href={"/signup"}
          >
            Sign Up
          </Link>

          <Link
            className=" p-3 mx-4 text-2xl rounded-xl text-orange-400 font-bold"
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
