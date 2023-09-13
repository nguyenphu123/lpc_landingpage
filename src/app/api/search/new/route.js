import connectDB from "@/lib/mongodb";
import New from "@/models/new";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
//search new with keyword
export async function POST(req, res) {
  const { searchField, keyword } = await req.json();
  try {
    await connectDB(); //connect to database
    var query = {
      $or: [
        {
          title: { $regex: keyword, $options: "i" },
        },
        {
          titleEn: { $regex: keyword, $options: "i" },
        },
      ],
    };
    //search new with query
    let news = await New.find(query, searchField);

    return NextResponse.json({ news });
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
