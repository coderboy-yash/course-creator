"use client";

import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import data from "../../../data/course_list.json";
import YouTubeVideo from "@/components/YouTubeVideo";
import Image from "next/image";
import Link from "next/link";
const Page = ({ params }) => {
  const router = useRouter();
  const id = params.course;
  const topic = data.filter((item) => item.id == id);
  // console.log("hello", topic);
  const videos = topic[0].video_links;
  const videoIds = videos.map((video) => video.slice(32));
  console.log(videoIds);

  // authentication for signed in users
  if (topic[0].course_type == "premium") {
    if (!sessionStorage.getItem("token")) {
      router.push("/login");
    }
  }
  return (
    <div>
      <div className="bg-orange-50">
        <div className="text-5xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
          <Link href="/">
            <span className="text-7xl font">S</span>kill Point
          </Link>{" "}
        </div>
      </div>

      <div className="flex h-96 p-4 ">
        <div className="basis-1/2 flex flex-col justify-center items-center ">
          <span className="text-4xl font-bold text-transparent m-4 p-2 bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            {" "}
            {topic[0].course_name}
          </span>
          <div>{topic[0].description}</div>
          <div className="text-white font-bold bg-gradient-to-r from-orange-400 to-yellow-400 p-2 m-2 mt-10 text-2xl">
            Start your journey today
          </div>
        </div>
        <Image
          src={topic[0].image_link}
          width={800}
          height={500}
          alt="Picture of the student"
          className="basis-1/2 object-cover w-64 h-full border-8 border-orange-300"
        ></Image>
        <div></div>
      </div>
      <div className="flex flex-wrap justify-center">
        {videoIds.map((Id) => (
          <div className="m-4 p-4 bg-gradient-to-r from-orange-200 to-yellow-300">
            <YouTubeVideo videoId={Id}></YouTubeVideo>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Page;
