import { NextResponse } from "next/server";
const address = require("address");
export async function POST(req, res) {
  let ip;

  if (req.headers["x-forwarded-for"]) {
    ip = req.headers["x-forwarded-for"].split(",")[0];
  } else if (req.headers["x-real-ip"]) {
    ip = req.connection.remoteAddress;
  } else {
    ip = req.connection.remoteAddress;
  }

  console.log(ip);

  console.log(ip);
  return NextResponse.json({ ip: ip });
}
