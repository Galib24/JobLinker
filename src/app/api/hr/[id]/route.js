import dbConnect from "@/database/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// get specific hr data with id query from db
export async function GET(request, { params }) {
  try {
    // console.log(request);
    console.log(params);
    const { id } = params;
    const db = await dbConnect();
    const hrCollection = db.collection("hr");

    const query = { _id: new ObjectId(id) };
    const result = await hrCollection.findOne(query);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
  }
}

export async function DELETE(request, { params }) {
  try {
      const { id } = params;
      const query = { _id: new ObjectId(id) };
      const db = await dbConnect();
      const hrCollection = db.collection("hr");

      const result = await hrCollection.findOneAndDelete(query);
      if (result.value) {
          return NextResponse.json({ message: "hr deleted successfully" });
      } else {
          return NextResponse.json({ message: "hr not found" }, { status: 404 });
      }
  } catch (error) {
      console.error(error.message);
      return NextResponse.json({ error: "An error occurred while deleting the hr" }, { status: 500 });
  }
}
