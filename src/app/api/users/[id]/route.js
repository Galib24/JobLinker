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

export async function DELETE(request, { params }) {
    try {
        const { id } = params;
        const query = { _id: new ObjectId(id) };
        const db = await dbConnect();
        const usersCollection = db.collection("users");

        const result = await usersCollection.findOneAndDelete(query);
        if (result.value) {
            return NextResponse.json({ message: "User deleted successfully" });
        } else {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
    } catch (error) {
        console.error(error.message);
        return NextResponse.json({ error: "An error occurred while deleting the user" }, { status: 500 });
    }
}