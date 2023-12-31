"use client"
import React, { useContext, useState } from 'react'
// import { CldUploadWidget } from 'next-cloudinary';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { useSession } from "next-auth/react";
import { addChannel } from '@/services/axiosService';
import { ThemeContext } from '../theme-provider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
// import { toast } from 'react-hot-toast';
import toast, { Toaster } from 'react-hot-toast';
const page = () => {

    const session = useSession();
    console.log(session);
    const router = useRouter();
    const value = useContext(ThemeContext);
    console.log(value)
    useEffect(() => {

    }, [value]);
    // const [image, setImage] = useState(null);
    const [channelData, setChannelData] = useState({
        channelName: '',
        channelImage: null,
        channelDescription: '',
        linkedinLink: '',
        discordLink: '',
        telegramLink: '',
        instagramLink: '',


    });

// const handleTextChange=(event)=>{
//     const { name, value } = event.target;
//     if(value.length<150 ){
//         return toast.error("enter atlest 150 character")
//     }
//         setChannelData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
// }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setChannelData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleNameInput=(event)=>{
        const { name, value } = event.target;
        const newValue=value.split(" ").join("-");
        setChannelData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
        
    }
    function handleOpenWidget() {
        var myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: "yash-911-cloud",
                uploadPreset: "vaaar8p2",
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    setChannelData(prevData => ({
                        ...prevData,
                        channelImage: result.info.url,
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


    const handleSubmit = async (event) => {
        event.preventDefault();
        if(value.uid==""){
            return toast.error("please login before submit");
        }
        if(channelData.channelImage==null){
            return toast.error("image not uploaded ")
        }
        if(channelData.channelDescription.length<150 ){
            return toast.error("enter atlest 150 character")
        }


        try {
            const data = {
                data: channelData,
                id: value.uid
            }
            const result = await addChannel(data);
            console.log("res", result)
            toast.success("channel added successfully");
            router.push("/");

        }
        catch (error) {
            console.error('An error occurred:', error);
        }

    }
    return (
        <div

            style={{
                background:
                    "linear-gradient(35deg, rgb(23, 30, 49) 0%, rgb(0, 18, 45) 45%)",
                height: "100%",


            }}
        >



            <Toaster></Toaster>

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


                    <span className='text-transparent mb-6 bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 text-4xl flex justify-center font-bold  '>Create Channel</span>
                    <form

                        className="flex gap-4 flex-col text-white "
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="channelName">Channel name</label>
                        <input
                            type="text"
                            id="channelName"
                            name="channelName"
                            value={channelData.channelName}
                            onChange={handleNameInput}
                            placeholder="enter youtube channel name"
                            className="text-white bg-transparent border-4 border-slate-600 rounded-xl"
                            required
                        />
                        {/* <label htmlFor="channelImage">Select channel image</label> */}
                        <button
                            id="upload-widget"
                            className="cloudinary-button"
                            type='button'
                            onClick={() => handleOpenWidget()}
                        >
                            Select channel image
                        </button>

                        <label htmlFor="channelDescription">Enter channel description</label>
                        <textarea
                            id="channelDescription"
                            name="channelDescription"
                            value={channelData.channelDescription}
                            onChange={handleInputChange}
                            rows="5"
                            cols="33"
                            className="text-white bg-transparent border-4 border-slate-600 rounded-xl"
                            placeholder="enter atlleast 150 characters"
                            required
                            
                            pattern=".{150,}"
                        />
                        {/* ... (other input elements) ... */}

                        <label htmlFor="linkedinLink">Enter LinkedIn link</label>
                        <input
                            type="url"
                            id="linkedinLink"
                            name="linkedinLink"
                            value={channelData.linkedinLink}
                            onChange={handleInputChange}
                            className="text-white bg-transparent border-4 border-slate-600 rounded-xl"
                            placeholder="https://example.com"
                            pattern="https://.*"
                            size="30"
                            required
                            
                        />

                        <label htmlFor="discordLink">Enter Discord group link</label>
                        <input
                            type="url"
                            id="discordLink"
                            name="discordLink"
                            value={channelData.discordLink}
                            onChange={handleInputChange}
                            className="text-white bg-transparent border-4 border-slate-600 rounded-xl"
                            placeholder="https://example.com"
                            pattern="https://.*"
                            size="30"
                            required
                        />

                        <label htmlFor="telegramLink">Enter Telegram group link</label>
                        <input
                            type="url"
                            id="telegramLink"
                            name="telegramLink"
                            value={channelData.telegramLink}
                            onChange={handleInputChange}
                            className="text-white bg-transparent border-4 border-slate-600 rounded-xl"
                            placeholder="https://example.com"
                            pattern="https://.*"
                            size="30"
                            required
                        />

                        <label htmlFor="instagramLink">Enter Instagram page link</label>
                        <input
                            type="url"
                            id="instagramLink"
                            name="instagramLink"
                            value={channelData.instagramLink}
                            onChange={handleInputChange}
                            className="text-white bg-transparent border-4 border-slate-600 rounded-xl"
                            placeholder="https://example.com"
                            pattern="https://.*"
                            size="30"
                            required
                        />

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
