import connectDB from "@/lib/mongodb";
import New from "@/models/new";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import decryptId from "../../../../lib/utils/decrypt";
//get new by id
export async function POST(req, res) {
  const { _id, searchField, role } = await req.json();
  const decrypted = decryptId(_id); //decrypt the id from parameter
  try {
    await connectDB(); //connect to database
    let news;
    if (role == "admin" || role == "sysadmin") {
      //check client role
      news = await New.find({ _id: decrypted }, searchField); //if admin or sysadmin get all data base on search field
    } else {
      news = await New.find({ _id: decrypted, draft: false }, searchField); //only get public new base on search field
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
      return NextResponse.json({ msg: error });
    }
  }
}
