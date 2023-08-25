import { NextResponse } from "next/server";
import Channel from "@/models/channel";
import { connectDb } from "@/helper/db";
// export function GET(req) {
//     // console.log(req);
//     return NextResponse.json({
//         message: "created"
//     });

// }
export async function POST(req) {
    connectDb();
    const data = await req.json();
    console.log("2", data);
    // const del = await Channel.deleteMany({});
    const channel = new Channel({
        channelName: data.data.channelName,
        userId: data.id,
        channelImage: data.data.channelImage,
        description: data.data.channelDescription,
        instagram: data.data.instagramLink,
        telegram: data.data.telegramLink,
        discord: data.data.discordLink,
        linkedin: data.data.linkedinLink,


    })
    const createdChannel = await channel.save();
    return NextResponse.json({
        message: "body recieved",

    })
}