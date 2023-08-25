import { NextResponse } from "next/server";
import Channel from "@/models/channel";
import Course from "@/models/course";
import { connectDb } from "@/helper/db";
export async function GET(request, params) {
    connectDb();
    console.log("params", params);

    const data = await Channel.findOne({
        channelName: params.params.channelId
    })
    const courses = await Course.find({
        channelName: params.params.channelId
    });
    const result = {
        data, courses
    }

    return NextResponse.json({
        message: "body recieved",
        response: result
    })

} 