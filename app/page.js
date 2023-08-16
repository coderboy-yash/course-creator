"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./../components/Navbar";

import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";

const Home = () => {
  const [token, setToken] = useState(false);
  useEffect(() => {
    setToken(JSON.parse(sessionStorage.getItem("token")));
  }, []);
  return (
    <div>
      <Navbar token={token} setToken={setToken}></Navbar>
      <Hero token={token}></Hero>
      <Courses></Courses>
      <Footer></Footer>
    </div>
  );
};

export default Home;
