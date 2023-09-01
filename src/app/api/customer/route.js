import connectDB from "@/lib/mongodb";
import Customer from "@/models/customer";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function GET() {
  try {
    await connectDB();
    const customers = await Customer.find({});
    return NextResponse.json({ customers });
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
