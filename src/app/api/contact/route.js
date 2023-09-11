import connectDB from "@/lib/mongodb";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function GET(request) {
  console.log(request.url);
  try {
    await connectDB();
    const contact = await Contact.find({});
    return NextResponse.json({ contact });
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
