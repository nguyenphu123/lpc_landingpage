import connectDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import GeneratePassword from "../../../../lib/passwordGenerater";
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
//create a new user
export async function POST(req) {
  const { email } = await req.json();
  let newPassword = GeneratePassword(); //auto generate a password

  let password = await bcrypt.hash(newPassword, salt); // hash password
  let role = "admin";
  let loginCount = 0;
  let status = "Active";

  const session = await getServerSession({ req }); //get current user session
  try {
    if (session) {
      //check session
      await connectDB(); //connect to database
      const Users = await User.find({ email: email }); //check if username exist
      if (Users.length > 0) {
        //user is exist
        return NextResponse.json({
          msg: "user already exist",
          success: false,
        });
      }
      //create a new user
      await User.create({ email, password, role, loginCount, status });
      return NextResponse.json({
        msg: "User create successfully with password: " + newPassword,
        success: true,
      });
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
//update user password
export async function PUT(req) {
  const { _id, loginCount, password } = await req.json();
  const session = await getServerSession({ req }); //get current user session
  try {
    if (session != undefined) {
      //check session
      await connectDB(); //connect to database
      //update password and login count to 1
      await User.findOneAndUpdate(
        { _id: _id },
        {
          password,
          loginCount,
        },
        { new: true },
      );
      return NextResponse.json({
        msg: ["Password updated"],
        success: true,
      });
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
//get user list
export async function GET() {
  const session = await getServerSession({}); //get current user session
  try {
    if (session != undefined) {
      //check session
      await connectDB(); //connect to database
      //get all users with fields(email, id)
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
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: error });
    }
  }
}
