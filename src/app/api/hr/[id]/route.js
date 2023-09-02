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
