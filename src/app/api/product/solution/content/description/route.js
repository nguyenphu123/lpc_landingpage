import connectDB from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import * as CryptoJS from "crypto-js";
export async function POST(req, res) {
  const { _id, searchField, contentId } = await req.json();
  const decrypted = CryptoJS.AES.decrypt(_id, "", {
    iv: CryptoJS.enc.Utf8.parse("asdasdasdasdas"),
  });
  const decryptedContent = CryptoJS.AES.decrypt(contentId, "", {
    iv: CryptoJS.enc.Utf8.parse("asdasdasdasdas"),
  });
  try {
    await connectDB();
    const products = await Product.findOne(
      { _id: decrypted },
      { content: { $elemMatch: { _id: decryptedContent } } },
      searchField,
    );
    return NextResponse.json({ products });
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
