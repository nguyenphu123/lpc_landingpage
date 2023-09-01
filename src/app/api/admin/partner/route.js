import connectDB from "@/lib/mongodb";
import Partner from "@/models/partner";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function POST(req) {
  const {
    src,

    type,

    name,
  } = await req.json();

  try {
    await connectDB();

    await Partner.create({
      src,

      type,

      name,
    });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      // console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}
export async function PUT(req) {
  const {
    _id,
    src,

    type,

    name,
  } = await req.json();

  try {
    await connectDB();

    await Partner.findOneAndUpdate(
      { _id: _id },
      {
        src,

        type,

        name,
      },
      { new: true },
    );

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      // console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}
