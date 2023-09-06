import dbConnect from "@/database/dbConnect";
import { NextResponse } from "next/server";

// get hr data from db
export async function GET(request) {
  try {
    const db = await dbConnect();
    const seekerCollection = db.collection("seeker");

    const result = await seekerCollection.find().toArray();
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
    const seekerCollection = db.collection("seeker");

    // post date to database
    const currentDate = new Date();
    body.postDate = currentDate.toISOString().split('T')[0];

    const result = await seekerCollection.insertOne(body);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
  }
}
