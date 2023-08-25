import { NextResponse } from "next/server";
import Channel from "@/models/channel";
import { connectDb } from "@/helper/db";
export async function GET(request) {
    connectDb();
    try {
        const data = await Channel.find();
        console.log(data);
        return NextResponse.json({
            message: "successful",
            response: data,
            status: 201
        })
    }
    catch (err) {
        console.log(err);
    }


}
