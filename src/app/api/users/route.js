import dbConnect from "@/database/dbConnect";
import { NextResponse } from "next/server";

// get users data from db
export async function GET(request) {
  try {
    const db = await dbConnect();
    const usersCollection = db.collection("users");

    const result = await usersCollection.find().toArray();
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
  }
}

// post users data to db
export async function POST(request) {
  try {
    const body = await request.json();
    const db = await dbConnect();

    // Add a 'createdAt' timestamp to the 'body' object
    const currentDate = new Date();
    body.postDate = currentDate.toISOString().split('T')[0];

    console.log(body);
    const usersCollection = db.collection("users");

    const query = { email: body.email }
    const existingUser = await usersCollection.findOne(query);
    if (existingUser) {
      return res.send({ message: 'user already exists' })
    }

    const result = await usersCollection.insertOne(body);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
  }
}
