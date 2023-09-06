import connectDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
export async function POST(req) {
  const {
    email,

    password,
  } = await req.json();
  const session = await getServerSession({ req });
  try {
    if (session) {
      await connectDB();

      await User.create({
        email,

        password,
      });
    }

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
    email,

    password,
  } = await req.json();
  const session = await getServerSession({ req });
  try {
    if (session != undefined) {
      await connectDB();
      await User.findOneAndUpdate(
        { _id: _id },
        {
          email,

          password,
        },
        { new: true },
      );
    }
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
    const users = await User.find({}, { email: 1, _id: 1 });
    return NextResponse.json({ users });
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
