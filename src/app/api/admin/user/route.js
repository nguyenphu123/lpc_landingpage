import connectDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function POST(req) {
  const {
    email,

    password,
  } = await req.json();

  try {
    await connectDB();

    await User.create({
      email,

      password,
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
    title,

    titleEn,

    type,

    description1,

    description2,

    descriptionEn1,

    descriptionEn2,

    image,

    pros,

    prosEn,

    content,
  } = await req.json();

  try {
    await connectDB();
    await Product.findOneAndUpdate(
      { _id: _id },
      {
        title,

        titleEn,

        type,

        description1,

        description2,

        descriptionEn1,

        descriptionEn2,

        image,

        pros,

        prosEn,

        content,
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
      return NextResponse.json({ msg: error });
    }
  }
}

export async function GET() {
  try {
    await connectDB();
    const user = await User.find({});
    return NextResponse.json({ user });
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
