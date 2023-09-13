import fsPromises from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
const dataFilePath = path.join(process.cwd(), "src/config/whitelist.json");
export async function POST(req, res) {
  const { ip } = await req.json();
  const session = await getServerSession({ req }); //get server side session
  try {
    if (session) {
      //check session
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
    } else {
      //session not exist
      return NextResponse.json({
        msg: ["Permission denied"],
      });
    }
  } catch (error) {
    // Send an error response
    return NextResponse.json({
      msg: error,
    });
  }
}
