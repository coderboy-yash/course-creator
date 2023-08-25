'use client'
import YouTubeVideo from '@/components/YouTubeVideo';
import React, { useEffect, useState } from 'react'
import NavbarUser from '@/components/NavbarUser';
import Footer from '@/components/Footer';
import { getCourse } from '@/services/axiosService';

const page = ({ params }) => {

    const [course, setCourse] = useState([]);

    const fetchData = async () => {
        try {

            const result = await getCourse(params.coursePage);
            console.log(result.data.response.courseInfo);
            setCourse(result.data.response.courseInfo);
        }
        catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        fetchData();
    }, []);
    const [id, setId] = useState(course[0]?.videoUrl.slice(32));
    const [title, setTitle] = useState(course[0]?.title);
    const [description, setDescription] = useState(course[0]?.videoDesc);
    useEffect(() => {
        setId(course[0]?.videoUrl.slice(32));
        setTitle(course[0]?.title);
        setDescription(course[0]?.videoDesc);

    }, [course]
    )



    const setValues = (item) => {
        setTitle(item.title);
        setDescription(item.videoDesc);
        const id = item.videoUrl.slice(32);
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
            <div className="flex pb-6 mb-40 h-screen">
                <div className='basis-2/3 p-4 mb-16'>
                    <YouTubeVideo videoId={id}></YouTubeVideo>
                    <div className='text-slate-300 text-2xl m-4 flex justify-center'>{title}</div>
                    <span className='text-slate-400 text-xl m-2'>{description} </span>
                </div>
                <div className='basis-1/3  h-full flex flex-col justify-center items-center border-2 border-slate-500 m-4 p-2 '>
                    <div className='text-3xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-orange-400 to-yellow-400'>Course Content</div>
                    <div className='overflow-y-scroll flex flex-col items-center'>
                        {course.map((item, i) => (
                            <div className='cursor-pointer bg-white m-3 p-2 w-2/3 border-4 border-yellow-400' onClick={() => setValues(item)}>

                                {item.title}
                            </div>

                        ))}

                    </div>

                </div>
            </div>
            <Footer></Footer>




        </div >
    )
}

export default page