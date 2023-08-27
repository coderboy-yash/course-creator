"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavbarUser = ({ insta, linkedin, discord, telegram }) => {

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
      <div className="flex gap-6">
        <span className="text-white">connect me at &rarr; </span>
        <Link href={insta || "/"}>
          <Image
            src="/assets/instagram.svg"
            width={30}
            height={30}
            alt="Picture of the student"
          ></Image>
        </Link>

        <Link href={discord || '/'}>
          <Image
            src="/assets/discord.svg"
            width={30}
            height={30}
            alt="Picture of the student"
          ></Image>
        </Link>


        <Link href={linkedin || '/'}>
          <Image
            src="/assets/linkedin.svg"
            width={30}
            height={30}
            alt="Picture of the student"
          ></Image>
        </Link>

        <Link href={telegram || "/"}>
          <Image
            src="/assets/telegram.svg"
            width={30}
            height={30}
            alt="Picture of the student"
          ></Image>
        </Link>

      </div>
    </div>
  );
};

export default NavbarUser;
