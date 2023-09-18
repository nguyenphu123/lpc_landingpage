import connectDB from "@/lib/mongodb";

import User from "@/models/user";

import { NextResponse } from "next/server";

import mongoose from "mongoose";

import { getServerSession } from "next-auth";

//update user login count

export async function PUT(req) {
  const { _id, loginCount } = await req.json();

  const session = await getServerSession({ req }); //get server side session

  try {
    if (session != undefined) {
      //check session

      await connectDB(); //connect to database

      // Lấy thông tin người dùng từ cơ sở dữ liệu

      const user = await User.findById(_id);

      if (user) {
        //update user login count

        await User.findOneAndUpdate(
          { _id: _id },

          {
            loginCount,
          },

          { new: true },
        );

        return NextResponse.json({
          msg: [`Welcome ${user.email}`],

          success: true,
        });
      }
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
