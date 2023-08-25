import { connectDb } from "@/helper/db";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
    connectDb();
    const data = await req.json();
    const existed = await User.findOne({
        email: data.email
    })
    if (existed) {
        return NextResponse.json({
            message: "user found",
            userId: existed._id.toString(),

        })
    }
    const user = new User({
        email: data.email,
        image: data.image,
        userName: data.name,

    })
    const createdUser = await user.save();
    console.log(createdUser._id.toString());
    return NextResponse.json({
        message: "user created",
        userId: createdUser._id.toString(),

    })

}