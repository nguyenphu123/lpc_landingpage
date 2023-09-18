import fsPromises from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
const dataFilePath = path.join(process.cwd(), "src/config/data.json");
const dataFilePathEn = path.join(process.cwd(), "src/config/dataEn.json");
export async function PUT(req, res) {
  const { image, language } = await req.json();
  const session = await getServerSession({ req }); //get server side session
  try {
    if (session) {
      //check session
      // Read the existing data from the JSON file
      const jsonData = await fsPromises.readFile(
        language == "en" ? dataFilePathEn : dataFilePath,
      );
      const objectData = JSON.parse(jsonData);

      // Add the new data to the object

      objectData.revenue.description = image;

      // Convert the object back to a JSON string
      const updatedData = JSON.stringify(objectData);

      // Write the updated data to the JSON file
      await fsPromises.writeFile(
        language == "en" ? dataFilePathEn : dataFilePath,
        updatedData,
      );

      // Send a success response
      return NextResponse.json({
        msg: ["revenue updated"],
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
