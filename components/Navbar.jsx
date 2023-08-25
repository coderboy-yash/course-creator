"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { ThemeContext } from "@/app/theme-provider";
import { Button } from 'flowbite-react';
const Navbar = ({ session }) => {
  const value = useContext(ThemeContext);


  return (
    <div
      style={{
        background:
          "linear-gradient(35deg, rgb(23, 30, 49) 0%, rgb(0, 18, 45) 45%)",
      }}
      className="flex justify-between px-8 py-2 mb-12  items-center bg-white"
    >
      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
        <Link href="/" className="flex items-center">
          {" "}
          <span className="text-2xl font">Course Creator</span>
          <Image
            src="/assets/pen1.png"
            width={50}
            height={50}
            alt="pen"
          ></Image>

        </Link>
      </div>


      {session.data ? (!value.uid ? (<Button
        isProcessing
        size="xs"
      >
        <p>
          finding user
        </p>
      </Button>) : (<button onClick={signOut} className=" p-3 mx-4 text-2xl rounded-xl text-orange-400 font-bold">Logout</button>)) : (
        <button onClick={signIn} className=" p-3 mx-4 text-2xl rounded-xl text-orange-400 font-bold">Login</button>
      )}

    </div>
  );
};

export default Navbar;
