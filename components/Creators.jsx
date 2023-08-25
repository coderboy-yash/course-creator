import React, { useContext, useState, useEffect } from "react";
// import data from "../data/course_list.json";
import Creator from "./Creator";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeContext } from "@/app/theme-provider";
import toast, { Toaster } from "react-hot-toast";
import { getChannels } from "@/services/axiosService";
import  Image  from 'next/image';
const Creators = () => {
  const router = useRouter();
  const value = useContext(ThemeContext);
  const [data, setData] = useState([]);
  const handleClick = () => {
    if (value.uid == "") {
      return toast.error("you must login first");
    }
    else {
      router.push('/createChannel')
    }
  }
  //   console.log(data[0].id);
  const fetchData = async () => {
    try {

      const result = await getChannels();
      console.log("helo", result.data);
      setData(result.data.response);
      // console.log("1", result.data.response._id);
      // const courseData = await getCourses(id);


    }
    catch (err) {
      console.log(err)
    }

  }
  useEffect(() => {
    fetchData();
  }, []);
  // const data = [];
  return (
    <div className="" >
      <Toaster></Toaster>
     
      <div className="flex items-center justify-center gap-8 my-20">
        <div className="basis-1/2">
    
          <Image  src="/assets/bg1.png" height={400} width={400} alt="rocket"
          ></Image>
           </div>
       
           <div className="m-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200 text-5xl basis-1/2" >
           
            Plan your course and add your social group links to increase your community reach
           </div>

        
      </div>
      <div className="flex items-center justify-center gap-8 my-20">
        
           <div className="m-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200 text-5xl basis-1/2" >
            Add rocket speed to your youtube channel by adding this asset.
           </div>
           <div className="basis-1/2 ">
          
          <Image  src="/assets/bg2.png" height={600} width={600} alt="rocket"
          ></Image>

         
          </div>

        
      </div>
      <span className="flex text-4xl justify-center font-bold mx-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
        Popular creators
      </span>
      <div className="flex flex-wrap gap-8 justify-center p-4 mb-16 items-center ">
        <div className="h-64 w-64 bg-slate-700 text-orange-400 text-9xl flex justify-center items-center">
          <button onClick={handleClick} className="">+</button>
        </div>
        {data.length > 0 && data.map((item) => (
          <Creator channel={item} key={item.userId}></Creator>
        ))}
      </div>
    </div>
  );
};

export default Creators;
