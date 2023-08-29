import dbConnect from "@/database/dbConnect";
import { NextResponse } from "next/server";

// get hr data from db
export async function GET(request) {
  try {
    const db = await dbConnect();
    const hrCollection = db.collection("hr");

    const result = await hrCollection.find().toArray();
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
  }
}

// post hr form data to db
export async function POST(request) {
  try {
    const body = await request.json();
    const db = await dbConnect();
    const hrCollection = db.collection("hr");

    const result = await hrCollection.insertOne(body);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
  }
}
