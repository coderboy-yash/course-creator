"use client";
import toast, { Toaster } from 'react-hot-toast';
import React, { useState } from "react";
import { supabase } from "@/supabase/client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
const page = () => {
    const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  console.log(formData);
  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.fullName|| !formData.email||!formData.password) {
       return toast.error("form values cannot be empty");

      }
      if (formData.password.length < 6) {
        return toast.error("password must be at least 6 characters");
        
      }

      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
             emailRedirectTo: 'https://next-video-cc5pgzw1m-coderboy-yash.vercel.app/login'
          },
        },
      });
      if (error) {
        toast.error("error in signing up");
        console.log(error);
      }
      else {
        alert("check your email for verification and then click login");
        router.push("/login");
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="  h-screen bg-gradient-to-r from-green-100 to-teal-100 ">
      <Navbar></Navbar>
            <Toaster></Toaster>

      <div className="flex justify-center items-center mt-8  ">
        <div className="flex w-[70vw]   h-[70vh] rounded-lg shadow-lg shadow-gray-500   bg-gradient-to-r from-amber-200 to-yellow-400  ">
          <Image
            src="/assets/sign.jpg"
            width={400}
            height={40}
            alt="login image"
            className="object-cover  h-full basis-1/2"
          ></Image>

          <form
            action=""
            onSubmit={handleSubmit}
            className="flex  flex-col basis-1/2 justify-center items-center gap-8"
          >
            <span className="text-5xl font-bold text-white">Sign Up here</span>
            <input
              placeholder="name"
              name="fullName"
              type="text"
              onChange={handleChange}
            />
            <input
              placeholder="email"
              name="email"
              type="email"
              onChange={handleChange}
            />
            <input
              placeholder="password"
              name="password"
              type="password"
              onChange={handleChange}
            />
            <button
              className=" bg-white p-2 font-extrabold w-1/2 text-3xl text-orange-400"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
