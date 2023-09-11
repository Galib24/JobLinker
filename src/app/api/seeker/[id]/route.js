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

// delete function added


export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const db = await dbConnect();
    const hrCollection = db.collection("seeker");

    const query = { _id: new ObjectId(id) };

    // Perform the delete operation
    const result = await hrCollection.findOneAndDelete(query);

    if (result.value) {
      // Successfully deleted HR data
      return NextResponse.json({ message: "HR data deleted successfully" });
    } else {
      // HR data with the specified ID was not found
      return NextResponse.json({ message: "HR data not found" }, { status: 404 });
    }
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      { error: "An error occurred while deleting HR data" },
      { status: 500 }
    );
  }
}
