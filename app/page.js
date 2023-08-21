"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import Hero from "@/components/Hero";
import Creators from "@/components/Creators";
import Footer from "@/components/Footer";

const Home = () => {
  const session = useSession();
  console.log("sesion", session);
  // if (!session.data) {
  //   return <button onClick={signIn}>login</button>

  // }
  // const { data: session, status } = useSession({
  //   required: true,
  // })
  // if (status === "loading") {
  //   <></>

  // }
  // const [token, setToken] = useState(false);
  // useEffect(() => {
  //   setToken(JSON.parse(sessionStorage.getItem("token")));
  // }, []);
  // const token = false;
  return (
    <div style={{
      background:
        "linear-gradient(35deg, rgb(23, 30, 49) 0%, rgb(0, 18, 45) 45%);",


    }}>
      <Navbar session={session} ></Navbar>
      <Hero></Hero>
      <Creators></Creators>
      <Footer></Footer>
    </div>
  );
};

export default Home;
