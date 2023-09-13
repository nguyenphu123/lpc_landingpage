import connectDB from "@/lib/mongodb";
import Customer from "@/models/customer";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
//create a new customer
export async function POST(req) {
  const {
    src,

    type,
    name,
    status,
  } = await req.json();
  const session = await getServerSession({ req }); //get server side session
  try {
    if (session) {
      //check session
      await connectDB(); //connect to database
      //create a record
      await Customer.create({
        src,

        type,
        name,
        status,
      });
      return NextResponse.json({
        msg: ["Add customer successfully"],
        success: true,
      });
    } else {
      //session not exist
      return NextResponse.json({
        msg: ["Permission denied"],
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
//update a customer
export async function PUT(req) {
  const {
    _id,
    src,

    type,
    name,
    status,
  } = await req.json();
  const session = await getServerSession({ req }); //get server side session
  try {
    if (session) {
      //check session
      await connectDB(); //connect to database
      //update arecord
      await Customer.findOneAndUpdate(
        { _id: _id },
        {
          src,

          type,
          name,
          status,
        },
        { new: true },
      );
      return NextResponse.json({
        msg: ["Update customer successfully"],
        success: true,
      });
    } else {
      //session not exist
      return NextResponse.json({
        msg: ["Permission denied"],
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
