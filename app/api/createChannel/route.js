import { NextResponse } from "next/server";
import { Channel } from "@/models/channel";
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
    console.log(data);
    const channel = new Channel({
        channelName: data.channelName,
        channelImage: data.channelImage,
        description: data.channelDescription,
        instagram: data.instagramLink,
        telegram: data.telegramLink,
        discord: data.discordLink,
        linkedin: data.linkedinLink


    })
    const createdChannel = await channel.save();
    return NextResponse.json({
        message: "body recieved"
    })
}