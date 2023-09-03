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

    console.log(body);
    const usersCollection = db.collection("users");

    const query = { email: body.email }
    const existingUser = await usersCollection.findOne(query);
    // console.log(existingUser, 'user exist');

    if (existingUser) {
      return res.send({ message: 'user already exist' })
  }

    const result = await usersCollection.insertOne(body);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
  }
}
