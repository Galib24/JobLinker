import dbConnect from "@/database/dbConnect";
import { NextResponse } from "next/server";

// get seekerJobApplies data from db
export async function GET(request) {
  try {
    const db = await dbConnect();
    const seekerJobAppliesCollection = db.collection("seekerJobApplies");

    const result = await seekerJobAppliesCollection.find().toArray();
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
  }
}

// post seekerJobApplies data to db
export async function POST(request) {
  try {
    const body = await request.json();
    const db = await dbConnect();
    const seekerJobAppliesCollection = db.collection("seekerJobApplies");

    // same date to database
    const currentDate = new Date();
    body.jobApplyDate = currentDate.toISOString().split("T")[0];

    const result = await seekerJobAppliesCollection.insertOne(body);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error.message);
  }
}
