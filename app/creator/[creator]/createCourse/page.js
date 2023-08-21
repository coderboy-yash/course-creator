'use client'
import React, { useState } from 'react'
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { useSession } from 'next-auth/react';

const page = () => {
    const session = useSession();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [desc, setDesc] = useState("");
    const [num, setNum] = useState(0);
    const [videoUrls, setVideoUrls] = useState([]);

    const handleNumChange = (event) => {
        const newNum = parseInt(event.target.value, 10);
        setNum(newNum);
        if (newNum > 0)
            setVideoUrls(Array(newNum).fill(''));
    };
    const handleVideoUrlChange = (index, url) => {
        const newVideoUrls = [...videoUrls];
        newVideoUrls[index] = url;
        setVideoUrls(newVideoUrls);
    };


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
                    <form action="" className='flex gap-4 flex-col text-white  '>
                        Course name
                        <input type="text" value={name} onChange={() => setName(e.target.value)} placeholder='enter course name' className='text-white bg-transparent border-4 border-slate-600 rounded-xl ' />
                        select course image
                        <input type="file" placeholder='input image' className='text-white p-2 bg-transparent border-4 border-slate-600 rounded-xl ' />
                        enter course description
                        <textarea id="story" value={desc} onChange={(e) => setDesc(e.target.value)} rows="5" cols="33 " className='text-white bg-transparent border-4 border-slate-600 rounded-xl h-28 ' placeholder='Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.'>

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

                            {videoUrls?.map((url, index) => (
                                <div key={index} className='flex flex-col gap-3 m-3 border-2 border-blue-500 p-2'>
                                    <input
                                        type="url"
                                        name={`url-${index}`}
                                        className='text-white bg-transparent border-4 w-full border-slate-600 rounded-xl'
                                        placeholder="https://www.youtube.com/watch?v=7wnove7K-ZQ"
                                        pattern="https://www.youtube.com/watch?.*"
                                        size="30"
                                        required
                                        value={url}
                                        onChange={(event) => handleVideoUrlChange(index, event.target.value)}
                                    />
                                    <input type="text" placeholder='video title' className='text-white bg-transparent border-4 w-full border-slate-600 rounded-xl' />
                                    <textarea id="story" value={desc} onChange={(e) => setDesc(e.target.value)} rows="5" cols="33 " className='text-white bg-transparent border-4 border-slate-600 rounded-xl h-28 ' placeholder='short video description.'>

                                    </textarea>
                                </div>
                            ))}
                        </div>


                        {/* enter linkedin link 
                         <input type="url" name="url" className='text-white bg-transparent border-4 border-slate-600 rounded-xl ' id="url" placeholder="https://example.com" pattern="https://.*" size="30" required />
                        enter discord group link
                        <input type="url" name="url" className='text-white bg-transparent border-4 border-slate-600 rounded-xl ' id="url" placeholder="https://example.com" pattern="https://.*" size="30" required />
                        enter telegram group link
                        <input type="url" name="url" className='text-white bg-transparent border-4 border-slate-600 rounded-xl ' id="url" placeholder="https://example.com" pattern="https://.*" size="30" required />
                        enter instagram page link
                        <input type="url" name="url" className='text-white bg-transparent border-4 border-slate-600 rounded-xl ' id="url" placeholder="https://example.com" pattern="https://.*" size="30" required /> */}
                        <button className='bg-gradient-to-r rounded-xl text-slate-800 font-bold from-orange-400 to-yellow-300 text-3xl p-2 w-1/2' type="submit">Submit</button>

                    </form>
                </div>
            </div>
            <Footer></Footer>

        </div>

    )
}

export default page
