import fsPromises from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
const dataFilePath = path.join(process.cwd(), "src/config/chartData.json");

export async function PUT(req, res) {
  const { year, revenue, background } = await req.json();
  const session = await getServerSession({ req }); //get server side session
  try {
    if (session) {
      //check session
      // Read the existing data from the JSON file
      const jsonData = await fsPromises.readFile(dataFilePath);
      const objectData = JSON.parse(jsonData);
      let newData = {
        year: year,
        revenue: revenue,
        background: background,
      };
      // Add the new data to the object
      let index = objectData.data.findIndex((item) => item.year == year);
      if (index > -1) {
        objectData.data[index].revenue = revenue;
        objectData.data[index].background = background;
      } else {
        return NextResponse.json({
          msg: ["revenue not found"],
        });
      }
      objectData.data.push(newData);

      // Convert the object back to a JSON string
      const updatedData = JSON.stringify(objectData);

      // Write the updated data to the JSON file
      await fsPromises.writeFile(dataFilePath, updatedData);

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
export async function POST(req, res) {
  const { year, revenue, background } = await req.json();
  const session = await getServerSession({ req }); //get server side session
  try {
    if (session) {
      //check session
      // Read the existing data from the JSON file
      const jsonData = await fsPromises.readFile(dataFilePath);
      const objectData = JSON.parse(jsonData);
      let newData = {
        year: year,
        revenue: revenue,
        background: background,
      };
      // Add the new data to the object
      let index = objectData.data.findIndex((item) => item.year == year);
      if (index > -1) {
        return NextResponse.json({
          msg: ["revenue has exist"],
        });
      } else {
        objectData.data.shift();
        objectData.data.push(newData);

        // Convert the object back to a JSON string
        const updatedData = JSON.stringify(objectData);

        // Write the updated data to the JSON file
        await fsPromises.writeFile(dataFilePath, updatedData);

        // Send a success response
        return NextResponse.json({
          msg: ["revenue added"],
        });
      }
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
