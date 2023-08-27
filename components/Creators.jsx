import React, { useContext, useState, useEffect } from "react";
// import data from "../data/course_list.json";
import Creator from "./Creator";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeContext } from "@/app/theme-provider";
import toast, { Toaster } from "react-hot-toast";
import { getChannels } from "@/services/axiosService";
import { motion } from "framer-motion";
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
    <div className="scroll-smooth hover:scroll-auto my-10" >
      <Toaster></Toaster>
     
      <div className="flex md:flex-row flex-col-reverse items-center justify-center gap-8 my-20">
        <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{delay:0.7}} className="basis-1/2 ">
    
          <Image  src="/assets/bg1.png" height={400} width={400} alt="rocket"
          ></Image>
           </motion.div>
       
           <motion.div initial={{opacity:0,x:10}} whileInView={{opacity:1,x:0}} transition={{delay:0.7}} className="m-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200 md:text-5xl text-3xl basis-1/2" >
           <div>

            Plan your course and add your social group links to increase your community reach
           </div>
           </motion.div>

        
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center gap-8 my-20">
        
           <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{delay:0.7}} className="m-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200 md:text-5xl text-3xl basis-1/2" >
            Add rocket speed to your youtube channel by adding this asset.
           </motion.div>
           <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{delay:0.7}} className="basis-1/2 ">
          
          <Image  src="/assets/bg2.png" height={600} width={600} alt="rocket"
          ></Image>

         
          </motion.div>

        
      </div>
      <span className="flex text-4xl justify-center font-bold mx-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
        Popular creators
      </span>
      <div className="flex md:flex-row flex-col flex-wrap gap-8 mt-10 justify-center p-4 mb-16 md:items-start items-center ">
        
        {data.length > 0 && data.map((item) => (
          <Creator channel={item} key={item.userId}></Creator>
        ))}
        <motion.div initial={{rotate:90}} whileHover={{rotate:0}} whileInView={{rotate:-90}} className="h-60 shadow-inner  shadow-gray-400 w-60 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-9xl flex justify-center items-center">
          <Link href="/createChannel" target="_blank"  className="">+</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Creators;
