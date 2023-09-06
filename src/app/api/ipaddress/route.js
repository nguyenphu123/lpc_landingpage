import { NextResponse } from "next/server";
const address = require("address");
export async function POST(req, res) {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = forwarded;
  return NextResponse.json({ ip: ip });
}
