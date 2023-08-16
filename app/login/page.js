"use client";
import toast, { Toaster } from 'react-hot-toast';
import React, { useState } from "react";
import { supabase } from "@/supabase/client";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Image from "next/image";
const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
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
    if (!formData.email || !formData.password) {
      return toast.error("form values can not be empty");
    }
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      // console.log(data);

      // adding token to session storage

      sessionStorage.setItem("token", JSON.stringify(data));

      if (error) { 
        toast.error(" Log in failed enter correct credentials " );
      }
      else {
        toast.success("login successfull");
        router.push("/");
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
            src="/assets/login1.jpg"
            width={400}
            height={40}
            alt="login image"
            className="object-cover  h-full basis-1/2 "
          ></Image>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex  flex-col basis-1/2 justify-center items-center gap-8"
          >
            <span className="text-5xl font-bold text-white">Log In here</span>
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
