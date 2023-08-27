'use client'
import YouTubeVideo from '@/components/YouTubeVideo';
import React, { useEffect, useState } from 'react'
import NavbarUser from '@/components/NavbarUser';
import Footer from '@/components/Footer';
import { getCourse } from '@/services/axiosService';
import Image from 'next/image'
import TextSkeleton from '@/components/textSkeleton';
import VideoSkeleton from '@/components/videoSkeleton';

const page = ({ params }) => {

    const [course, setCourse] = useState([]);
    const [loading ,setLoading]=useState(true);

    const fetchData = async () => {
        try {

            const result = await getCourse(params.coursePage);
            console.log(result.data.response.courseInfo);
            setCourse(result.data.response.courseInfo);
            setLoading(false);
        }
        catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        fetchData();
    }, []);
    const [id, setId] = useState(course[0]?.videoUrl.substring(32,43));
    const [title, setTitle] = useState(course[0]?.title);
    const [description, setDescription] = useState(course[0]?.videoDesc);
    useEffect(() => {
        setId(course[0]?.videoUrl.substring(32,43));
        setTitle(course[0]?.title);
        setDescription(course[0]?.videoDesc);

    }, [course]
    )



    const setValues = (item) => {
        setTitle(item.title);
        setDescription(item.videoDesc);
        const id = item.videoUrl.substring(32,43);
        setId(id);


    }
    return (
        <div
            style={{
                background:
                    "linear-gradient(35deg, rgb(23, 30, 49) 0%, rgb(0, 18, 45) 45%)",
                height: "100%",


            }}
        >

            <NavbarUser></NavbarUser>
            <div className="flex md:flex-row flex-col pb-6 mb-36 items-start">
                <div className='md:basis-2/3  p-4 mb-16 border-2 border-gray-200 bg-gray-100'>
                    <div className='w-screen md:w-full overflow-scroll md:overflow-hidden'>

                <YouTubeVideo videoId={id} ></YouTubeVideo>
                    </div>


                    {
                        loading?<TextSkeleton></TextSkeleton>:( <div>                    <div className='text-slate-900 text-3xl m-4 flex justify-center p-4'>{title}</div>
                        <div className='text-slate-700 text-xl m-2 w-3/2 p-8  flex justify-center'>{description} </div></div> )
                    }

                </div>
                <div className='md:basis-1/3 w-screen  flex flex-col justify-center items-center  md:m-4 p-2 '>
                    <div className="border-2 border-slate-500">
                    <div className='text-3xl m-3 text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-orange-400 to-yellow-400 flex justify-center'>Course Content</div>
                    <div className='overflow-y-scroll flex flex-col items-center m-4'>
                    {loading&&<TextSkeleton></TextSkeleton>}
                        {course.map((item, i) => (
                            <div className='cursor-pointer flex text-md bg-white my-4  p-2 w-full border-4 border-yellow-400' onClick={() => setValues(item)}>

                           <Image src="/assets/play1.svg" alt="video" height={40} width={40} className="mx-2 w-10 h-10"
                           ></Image> <span> {i+1}&rarr;  {item.title}</span>
                            </div>

                        ))}

                    </div>
                    </div>


                </div>
            </div>
            <Footer></Footer>




        </div >
    )
}

export default page