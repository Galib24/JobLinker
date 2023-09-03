// searchHr   // this is search function name=searchHr

import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";


export async function GET(request) {
    const query = request.nextUrl.searchParams.get("query");
    // Replace the uri string with your connection string.
    const uri = "mongodb+srv://random-db-user:own47pass74random@cluster0.mjja2r0.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);


    try {
        const database = client.db('joblinkerDb');
        const Hire = database.collection('hr');

        // Query for a movie that has the title 'Back to the Future'


        const HR = await Hire.aggregate([
            {
                $match: {
                    $or: [
                        { jobTitle: { $regex: query, $options: "i" } },
                    ]
                }
            }
        ]).toArray()

        //  console.log(movie);
        return NextResponse.json({ success: true, HR })
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
