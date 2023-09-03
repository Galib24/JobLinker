import dbConnect from "@/database/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const filter = { _id: new ObjectId(id) };
        const updateUserData = await request.json();
        const db = await dbConnect();
        const usersCollection = db.collection("users");

        const result = await usersCollection.findOneAndReplace(filter, updateUserData);
        return NextResponse.json(result);
    } catch (error) {

        console.log(error.message);
    }
}