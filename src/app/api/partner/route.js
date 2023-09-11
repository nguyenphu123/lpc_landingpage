import connectDB from "@/lib/mongodb";
import Partner from "@/models/partner";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function GET(request) {
  console.log(request.url);
  try {
    await connectDB();
    const partners = await Partner.find({});
    return NextResponse.json({ partners });
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
