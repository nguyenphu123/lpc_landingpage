import connectDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import GeneratePassword from "../../../../lib/passwordGenerater";
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

export async function POST(req) {
  const { email } = await req.json();
  let newPassword = GeneratePassword();

  let password = bcrypt.hash(newPassword, salt).toString();
  let role = "admin";
  let loginCount = 0;
  let status = "Active";

  const session = await getServerSession({ req });
  try {
    if (session) {
      await connectDB();
      const Users = await User.find({ email: email });
      if (Users.length > 0) {
        return NextResponse.json({
          msg: "user already exist",
          success: false,
        });
      }
      await User.create({ email, password, role, loginCount, status });
      return NextResponse.json({
        msg: "User create successfully with password: " + newPassword,
        success: true,
      });
    }
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
export async function PUT(req) {
  const { _id, loginCount, password } = await req.json();
  const session = await getServerSession({ req });
  try {
    if (session != undefined) {
      await connectDB();
      await User.findOneAndUpdate(
        { _id: _id },
        {
          password,
          loginCount,
        },
        { new: true },
      );
    }
    return NextResponse.json({
      msg: ["User updated"],
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
  const session = await getServerSession({});
  try {
    await connectDB();
    if (session != undefined) {
      const users = await User.find({}, { email: 1, _id: 1 });
      return NextResponse.json({ users });
    } else {
      return NextResponse.json({ msg: ["No permission."] });
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
