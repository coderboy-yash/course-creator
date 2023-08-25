import { connectDb } from "@/helper/db";
import Course from "@/models/course";
import { NextResponse } from "next/server";

export async function GET(req, params) {
    connectDb();

    console.log("hello", params);
    const course = await Course.findById(
        params.params.courseId
    );
    console.log("yash", course);
    return NextResponse.json({
        message: "user created",
        response: course


    })

}