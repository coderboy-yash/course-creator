import { NextResponse } from "next/server";
import Course from "@/models/course";
import { connectDb } from "@/helper/db";
import Channel from "@/models/channel";
export async function POST(req) {
    connectDb();
    const data = await req.json();
    console.log("1", data);
    // const del = await Course.deleteMany();
    const id = data.userId;
    const channel = await Channel.findOne({
        userId: id
    })
    const course = new Course({
        courseData: {
            courseName: data.courseData.courseName,
            courseImage: data.courseData.courseImage,
            courseDescription: data.courseData.courseDescription


        },
        courseInfo: data.courseInfo,
        videoNum: data.num,
        channelName: channel.channelName


    })

    const createdCourse = await course.save();
    console.log(createdCourse)
    return NextResponse.json({
        message: "body recieved"
    })
}
