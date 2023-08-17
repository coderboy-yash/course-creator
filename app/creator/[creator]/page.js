import React from 'react'
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Courses from '@/components/Courses';
import Footer from '@/components/Footer';
const page = () => {
    return (
        <div style={{
            background:
                "linear-gradient(35deg, rgb(23, 30, 49) 0%, rgb(0, 18, 45) 45%);",
            height: "100%",


        }}>
            <Navbar></Navbar>
            <div className='flex'>
                <div className='basis-1/2 leading-8  flex   flex-col justify-center    m-4'>
                    <h1 className='text-5xl leading-8 text-transparent h-24 p-2 font-bold bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-400' >Welcome to CodeWithHarry</h1>
                    <span className='text-xl text-slate-300 leading-8 font-thin'>Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.</span>
                </div>
                <div className='basis-1/2 p-4 justify-center flex items-center'>
                    <Image
                        src="/assets/cwh2.png"
                        width={400}
                        height={400}
                        alt="Picture of the student"
                        className=''
                    ></Image>
                </div>

            </div>

            <div className='text-3xl m-24 flex justify-center text-transparent font-bold bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400'>
                Recommended Courses
            </div>
            <Courses></Courses>
            <Footer></Footer>

        </div>
    )
}

export default page
