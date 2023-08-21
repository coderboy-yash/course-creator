'use client'
import YouTubeVideo from '@/components/YouTubeVideo';
import React, { useEffect, useState } from 'react'
import NavbarUser from '@/components/NavbarUser';
import Footer from '@/components/Footer';

const page = () => {
    const videos = [
        "https://www.youtube.com/watch?v=7wnove7K-ZQ",
        "https://www.youtube.com/watch?v=Tto8TS-fJQU",
        "https://www.youtube.com/watch?v=xwKO_y2gHxQ",
        "https://www.youtube.com/watch?v=7IWOYhfAcVg"
    ]
    // const videos = topic[0].video_links;
    const videoIds = videos.map((video) => video.slice(32));
    const [id, setId] = useState(videoIds[0]);
    // const setVideoId = (Id) => {
    //     setId(Id);
    // }
    useEffect(() => {
        // console.log(id);

    }, [id])
    return (
        <div
            style={{
                background:
                    "linear-gradient(35deg, rgb(23, 30, 49) 0%, rgb(0, 18, 45) 45%);",
                height: "100%",


            }}
        >

            <NavbarUser></NavbarUser>
            <div className="flex pb-6 mb-40 h-screen">
                <div className='basis-2/3 p-4 mb-16'>
                    <YouTubeVideo videoId={id}></YouTubeVideo>
                    <div className='text-slate-300 text-2xl m-4 flex justify-center'>Day 1 - What is Programming and Python?</div>
                    <span className='text-slate-400 text-xl m-2'>Programming is a way for us to tell computers what to do. Computer is a very dumb machine and it only does what we tell it to do. Hence we learn programming and tell computers to do what we are very slow at - computation. If I ask you to calculate 5+6, you will immediately say 11. How about 23453453 X 56456?</span>
                </div>
                <div className='basis-1/3  h-full flex flex-col justify-center items-center border-2 border-slate-500 m-4 p-2 '>
                    <div className='text-3xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-orange-400 to-yellow-400'>Course Content</div>
                    <div className='overflow-y-scroll flex flex-col items-center'>
                        <div className='cursor-pointer bg-white m-3 p-2 w-2/3 border-4 border-yellow-400' onClick={() => setId(videoIds[0])}>
                            {/* <input type="radio"></input> */}
                            Day 1 - What is Programming and Python?</div>
                        <div className='cursor-pointer bg-white m-3 p-2 w-2/3 border-4 border-yellow-400' onClick={() => setId(videoIds[1])}>Day 2 - My Python Success Story

                        </div>
                        <div className='cursor-pointer bg-white m-3 p-2 w-2/3 border-4 border-yellow-400' onClick={() => setId(videoIds[2])}>Day 3 - Modules and pip in Python!

                        </div>
                        <div className='cursor-pointer bg-white m-3 p-2 w-2/3 border-4 border-yellow-400' onClick={() => setId(videoIds[3])}>Day 4 - Our First Program

                        </div>

                        <div className='cursor-pointer bg-white m-3 p-2 w-2/3 border-4 border-yellow-400' onClick={() => setId(videoIds[0])}>
                            {/* <input type="radio"></input> */}
                            Day 1 - What is Programming and Python?</div>
                        <div className='cursor-pointer bg-white m-3 p-2 w-2/3 border-4 border-yellow-400' onClick={() => setId(videoIds[1])}>Day 2 - My Python Success Story

                        </div>
                        <div className='cursor-pointer bg-white m-3 p-2 w-2/3 border-4 border-yellow-400' onClick={() => setId(videoIds[2])}>Day 3 - Modules and pip in Python!

                        </div>
                        <div className='cursor-pointer bg-white m-3 p-2 w-2/3 border-4 border-yellow-400' onClick={() => setId(videoIds[3])}>Day 4 - Our First Program

                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>




        </div >
    )
}

export default page