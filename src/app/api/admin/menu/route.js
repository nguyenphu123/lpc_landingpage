import fsPromises from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
const { v4: uuidv4 } = require("uuid");
const dataFilePath = path.join(process.cwd(), "src/config/menu.json");
const dataFilePathEn = path.join(process.cwd(), "src/config/menuEn.json");
export async function POST(req, res) {
  const { name, nameEn, link, hasChildren } = await req.json();
  const session = await getServerSession({ req }); //get server side session
  try {
    if (session) {
      //check session
      // Read the existing data from the JSON file
      const jsonData = await fsPromises.readFile(dataFilePath);
      const objectData = JSON.parse(jsonData);
      const jsonDataEn = await fsPromises.readFile(dataFilePathEn);
      const objectDataEn = JSON.parse(jsonDataEn);
      // Add the new data to the object
      const newData = {
        id: uuidv4(),
        name: name,
        link: link,
      };
      const newDataEn = {
        id: uuidv4(),
        name: nameEn,
        link: link,
      };
      if (hasChildren) {
        newData["hasChildren"] = hasChildren;
        newData["children"] = [];
        newDataEn["hasChildren"] = hasChildren;
        newDataEn["children"] = [];
      }

      objectData.main.push(newData);

      // Convert the object back to a JSON string
      const updatedData = JSON.stringify(objectData);

      // Write the updated data to the JSON file
      await fsPromises.writeFile(dataFilePath, updatedData);
      objectDataEn.main.push(newDataEn);

      // Convert the object back to a JSON string
      const updatedDataEn = JSON.stringify(objectDataEn);

      // Write the updated data to the JSON file
      await fsPromises.writeFile(dataFilePathEn, updatedDataEn);
      // Send a success response
      return NextResponse.json({
        msg: ["Item added"],
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
export async function PUT(req, res) {
  const { id, name, link, hasChildren, language } = await req.json();
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
      let objIndex = objectData.findIndex((obj) => obj.id == id);

      objectData[objIndex].name = name;
      objectData[objIndex].link = link;
      if (hasChildren) {
        objectData[objIndex].hasChildren = hasChildren;
        objectData[objIndex].children = [];
      } else {
        delete objectData[objIndex].hasChildren;
        delete objectData[objIndex].children;
      }

      // Convert the object back to a JSON string
      const updatedData = JSON.stringify(objectData);

      // Write the updated data to the JSON file
      await fsPromises.writeFile(
        language == "en" ? dataFilePathEn : dataFilePath,
        updatedData,
      );

      // Send a success response
      return NextResponse.json({
        msg: ["Item updated"],
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
