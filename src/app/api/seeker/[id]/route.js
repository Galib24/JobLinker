import dbConnect from "@/database/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// get specific seeker data with id query from db
export async function GET(request, { params }) {
  try {
    // console.log(request);
    console.log(params);
    const { id } = params;
    const db = await dbConnect();
    const seekerCollection = db.collection("seeker");

    const query = { _id: new ObjectId(id) };
    const result = await seekerCollection.findOne(query);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
  }
}
