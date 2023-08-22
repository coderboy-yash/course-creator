'use client'
import React, { useState } from 'react'
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { useSession } from 'next-auth/react';
import { addCourse } from '@/services/axiosService';

const page = () => {
    const session = useSession();

    const [courseInfo, setCourseInfo] = useState([
        { videoUrl: '', title: '', videoDesc: '' }
    ]);
    const [num, setNum] = useState(0);

    const handleInfoChange = (index, field, value) => {
        const updatedInfo = [...courseInfo];
        updatedInfo[index] = {
            ...updatedInfo[index],
            [field]: value
        };

        setCourseInfo(updatedInfo);
    };

    const [courseData, setCourseData] = useState({
        courseName: '',
        courseImage: '',
        courseDescription: '',





    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCourseData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    function handleOpenWidget() {
        var myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: "yash-911-cloud",
                uploadPreset: "vaaar8p2",
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    setCourseData(prevData => ({
                        ...prevData,
                        courseImage: result.info.url,
                    }));
                    console.log("Done! Here is the image info: ", result);
                    const timer = setTimeout(() => {
                        console.log("image uploaded successfully");
                    }, 2000);
                    return () => clearTimeout(timer);
                }
            }
        );

        myWidget.open();
    }
    const handleNumChange = (event) => {
        const newNum = parseInt(event.target.value, 10);
        setNum(newNum);
        if (newNum > 0) {
            const newCourseInfo = Array(newNum).fill({
                videoUrl: '',
                title: '',
                videoDesc: ''
            });
            setCourseInfo(newCourseInfo);
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        const course = { "courseData": courseData, "courseInfo": courseInfo, "num": num };
        console.log(course);

        try {
            const result = await addCourse(course);
            console.log("res", result)

        }
        catch (error) {
            console.error('An error occurred:', error);
        }

    }

    return (
        <div
            style={{
                background:
                    "linear-gradient(35deg, rgb(23, 30, 49) 0%, rgb(0, 18, 45) 45%);",
                height: "100%",


            }}
        >
            <Navbar session={session}></Navbar>

            <div className='flex justify-center  '>
                <div className='basis-1/2 flex items-center'>
                    <div className=''>
                        <Image
                            src="/assets/form1.png"
                            height={800}
                            width={800}
                            alt="form image"
                            className="backdrop-blur-md shadow-slate-400"
                        ></Image>
                    </div>

                </div>
                <div className='basis-1/2 mx-4 p-8'>


                    <span className='text-transparent mb-6 bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 text-4xl flex justify-center font-bold  '>Create Course</span>
                    <form action="" className='flex gap-4 flex-col text-white  ' onSubmit={handleSubmit} >
                        Course name
                        <input type="text"
                            name="courseName"
                            value={courseData.courseName} onChange={handleInputChange} placeholder='enter course name' className='text-white bg-transparent border-4 border-slate-600 rounded-xl ' />
                        <button
                            id="upload-widget"
                            className="cloudinary-button"
                            onClick={() => handleOpenWidget()}
                        >
                            Select course image
                        </button>
                        enter course description
                        <textarea id="courseDescription"
                            name="courseDescription"
                            value={courseData.courseDescription} onChange={handleInputChange} rows="5" cols="33 " className='text-white bg-transparent border-4 border-slate-600 rounded-xl h-28 ' placeholder='Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.'>

                        </textarea>
                        enter number of videos available for the course
                        <input
                            type="number"
                            value={num}
                            onChange={handleNumChange}
                            className='text-white bg-transparent border-4 border-slate-600 rounded-xl'
                        />
                        <div className=' overflow-y-scroll border-2 h-screen  border-slate-600 p-8'>
                            enter youtube video links

                            {courseInfo?.map((info, index) => (
                                <div key={index} className='flex flex-col gap-3 m-3 border-2 border-blue-500 p-2'>
                                    <input
                                        type="url"
                                        name={`url-${index}`}
                                        className='text-white bg-transparent border-4 w-full border-slate-600 rounded-xl'
                                        placeholder="https://www.youtube.com/watch?v=7wnove7K-ZQ"
                                        pattern="https://www.youtube.com/watch?.*"
                                        size="30"
                                        required
                                        value={info.videoUrl}
                                        onChange={(e) => handleInfoChange(index, 'videoUrl', e.target.value)}
                                    />
                                    <input type="text"
                                        value={info.title}
                                        placeholder='video title'
                                        onChange={(e) => handleInfoChange(index, 'title', e.target.value)}

                                        className='text-white bg-transparent border-4 w-full border-slate-600 rounded-xl' />
                                    <textarea id="story" value={info.videoDesc} onChange={(e) => handleInfoChange(index, 'videoDesc', e.target.value)} rows="5" cols="33 " className='text-white bg-transparent border-4 border-slate-600 rounded-xl h-28 ' placeholder='short video description.'>

                                    </textarea>
                                </div>
                            ))}
                        </div>



                        <button className='bg-gradient-to-r rounded-xl text-slate-800 font-bold from-orange-400 to-yellow-300 text-3xl p-2 w-1/2' type="submit">Submit</button>

                    </form>
                </div>
            </div>
            <Footer></Footer>
            <script
                src="https://upload-widget.cloudinary.com/global/all.js"
                type="text/javascript"
            ></script>

        </div>

    )
}

export default page
