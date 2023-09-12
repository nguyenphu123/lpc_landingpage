import fsPromises from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
const dataFilePath = path.join(process.cwd(), "src/config/whitelist.json");
export async function POST(req, res) {
  const { ip } = await req.json();
  try {
    // Read the existing data from the JSON file
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);

    // Add the new data to the object
    const newData = {
      publicIp: ip,
      deviceIp: "",
      status: "Active",
    };
    objectData.whitelist.push(newData);

    // Convert the object back to a JSON string
    const updatedData = JSON.stringify(objectData);

    // Write the updated data to the JSON file
    await fsPromises.writeFile(dataFilePath, updatedData);

    // Send a success response
    return NextResponse.json({
      msg: ["Ip added"],
    });
  } catch (error) {
    console.error(error);
    // Send an error response
    return NextResponse.json({
      msg: error,
    });
  }
}
