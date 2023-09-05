import { NextResponse } from "next/server";

import requestIp from "request-ip";
export async function POST(req, res) {
  const detectedIp = requestIp.getClientIp(req);

  console.log(detectedIp);

  console.log(detectedIp);
  return NextResponse.json({ ip: detectedIp });
}
