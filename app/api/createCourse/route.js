import { NextResponse } from "next/server";
import Course from "@/models/course";
import { connectDb } from "@/helper/db";
export async function POST(req) {
    connectDb();
    const data = await req.json();
    console.log("1", data);

    const course = new Course({
        courseData: {
            courseName: data.courseData.courseName,
            courseImage: data.courseData.courseImage,
            courseDescription: data.courseData.courseDescription


        },
        courseInfo: data.courseInfo,
        videoNum: data.num


    })

    const createdCourse = await course.save();
    return NextResponse.json({
        message: "body recieved"
    })
}
