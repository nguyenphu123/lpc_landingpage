import connectDB from "@/lib/mongodb";
import New from "@/models/new";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import decryptId from "../../../../lib/utils/decrypt";
export async function POST(req, res) {
  const { _id, searchField, role } = await req.json();
  const decrypted = decryptId(_id);
  try {
    await connectDB();
    let news;
    if (role == "admin") {
      news = await New.find({ _id: decrypted }, searchField);
    } else {
      news = await New.find({ _id: decrypted, draft: false }, searchField);
    }

    return NextResponse.json({ news });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}
