"use client";
import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "./theme-provider";
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import Hero from "@/components/Hero";
import Creators from "@/components/Creators";
import Footer from "@/components/Footer";

const Home = () => {
  const session = useSession();
  console.log("sesion", session);
  const value = useContext(ThemeContext);
  console.log(value);

  return (
    <div  style={{
      background:
        "linear-gradient(35deg, rgb(23, 30, 49) 0%, rgb(0, 18, 45) 45%)",


    }}>
      <Navbar session={session} ></Navbar>
      <Hero></Hero>
      <Creators></Creators>
      <Footer></Footer>
    </div>
  );
};

export default Home;
