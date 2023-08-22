import { NextResponse } from "next/server";
import Channel from "@/models/channel";
import { connectDb } from "@/helper/db";
export async function GET(request, params) {
    connectDb();
    console.log("params", params);

    const data = await Channel.findOne({
        channelName: params.params.channelId



    })
    console.log(data);

    return NextResponse.json({
        message: "body recieved",
        response: data
    })

} 