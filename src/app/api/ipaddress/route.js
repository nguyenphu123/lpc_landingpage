import { NextResponse } from "next/server";

export async function POST(req, res) {
  let ip = req.headers["x-real-ip"];

  const forwardedFor = req.headers["x-forwarded-for"];
  if (!ip && forwardedFor) {
    ip = forwardedFor?.split(",").at(0) ?? "Unknown";
  }
  console.log(ip);
  console.log(forwardedFor);
  return NextResponse.json({ ip: ip });
}
