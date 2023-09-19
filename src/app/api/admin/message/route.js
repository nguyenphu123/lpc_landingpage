import connectDB from "@/lib/mongodb";
import Message from "@/models/message";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
//get message send by guest
export async function POST(req, res) {
  const session = await getServerSession({ req }); //get server side session
  try {
    if (session) {
      //check session
      await connectDB(); //connect to database
      //find all message with fields(name, email, message)
      const messages = await Message.find(
        {},
        { name: 1, email: 1, message: 1, phoneNumber: 1 },
      );
      return NextResponse.json({ messages });
    } else {
      //session not exist
      return NextResponse.json({
        msg: ["You are not allowed to perform this action."],
      });
    }
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }

      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: error });
    }
  }
}
