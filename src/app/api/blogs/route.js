import dbConnect from "@/database/dbConnect";
import { NextResponse } from "next/server";

// get blogs data from db
export async function GET(request) {
  try {
    const db = await dbConnect();
    const blogsCollection = db.collection("blogs");

    const result = await blogsCollection.find().toArray();
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
  }
}

// post blogs data to db
export async function POST(request) {
  try {
    const body = await request.json();
    const db = await dbConnect();

    // Add a 'createdAt' timestamp to the 'body' object
    const currentDate = new Date();
    body.postDate = currentDate.toISOString().split("T")[0];

    console.log(body);
    const blogsCollection = db.collection("blogs");

    const result = await blogsCollection.insertOne(body);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
  }
}
