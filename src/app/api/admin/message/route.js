import connectDB from "@/lib/mongodb";
import Message from "@/models/message";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function POST(req, res) {
  const { session } = await req.json();
  try {
    if (session != undefined) {
      await connectDB();
      const messages = await Message.find({});
      return NextResponse.json({ messages });
    }else{
      return NextResponse.json({ msg: ["You are not allowed to perform this action."]})
    }
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}
