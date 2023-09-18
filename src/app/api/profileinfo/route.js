import dbConnect from "@/database/dbConnect";
import { NextResponse } from "next/server";

// get profileInfo data from db
export async function GET(request) {
    try {
        const db = await dbConnect();
        const profileInfoCollection = db.collection("profileInfo");

        const result = await profileInfoCollection.find().toArray();
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

        const profileInfoCollection = db.collection("profileInfo");

        // const query = { email: body.email }
        // const existingUser = await usersCollection.findOne(query);
        // if (existingUser) {
        //     return res.send({ message: 'user already exists' })
        // }

        const result = await profileInfoCollection.insertOne(body);
        return NextResponse.json(result);
    } catch (error) {
        console.log(error.message);
    }
}
