"use client"
import React, { useEffect, useState } from 'react'
// import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Courses from '@/components/Courses';
import Footer from '@/components/Footer';
import NavbarUser from '@/components/NavbarUser';
import { getChannel } from '@/services/axiosService';
// import { useEffect } from 'react';
const page = ({ params }) => {
    const id = params;
    console.log(id);

    const [channel, setChannel] = useState("");
    const [courses, setCourses] = useState([]);

    const fetchData = async () => {
        try {

            const result = await getChannel(id);
            setChannel(result.data.response.data);
            setCourses(result.data.response.courses)
            console.log("1", result.data.response);
            // const courseData = await getCourses(id);


        }
        catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        fetchData();
    }, []);
    // await addChannel(channelData);


    return (
        <div style={{
            background:
                "linear-gradient(35deg, rgb(23, 30, 49) 0%, rgb(0, 18, 45) 45%)",
            height: "100%",


        }}>
            <NavbarUser insta={channel.instagram} telegram={channel.telegram} discord={channel.discord} linkedin={channel.linkedin} ></NavbarUser>
            <div className='flex'>
                <div className='basis-1/2 leading-8  flex   flex-col justify-center    m-4'>
                    <h1 className='text-5xl leading-8 text-transparent h-24 p-2 font-bold bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-400' >Welcome to {channel.channelName}</h1>
                    <span className='text-xl text-slate-300 leading-8 font-thin capitalize'>{channel.description}.</span>
                </div>
                <div className='basis-1/2 p-4 justify-center flex items-center'>
                    <Image
                        src={channel.channelImage}
                        width={800}
                        height={800}
                        alt="Picture of the student"
                    // className='rounded-[50%] h-72 w-72'
                    ></Image>
                </div>

            </div>

            <div className='text-3xl m-24 flex justify-center text-transparent font-bold bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400'>
                Recommended Courses
            </div>
            <Courses id={channel.userId} courses={courses} ></Courses>
            <Footer></Footer>

        </div>
    )
}

export default page
