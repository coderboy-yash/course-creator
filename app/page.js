"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./../components/Navbar";

import Hero from "@/components/Hero";
import Creators from "@/components/Creators";
import Footer from "@/components/Footer";

const Home = () => {
  const [token, setToken] = useState(false);
  useEffect(() => {
    setToken(JSON.parse(sessionStorage.getItem("token")));
  }, []);
  return (
    <div style={{
      background:
        "linear-gradient(35deg, rgb(23, 30, 49) 0%, rgb(0, 18, 45) 45%);",


    }}>
      <Navbar token={token} setToken={setToken}></Navbar>
      <Hero token={token}></Hero>
      <Creators></Creators>
      <Footer></Footer>
    </div>
  );
};

export default Home;
