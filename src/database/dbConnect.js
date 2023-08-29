import { MongoClient, ServerApiVersion } from "mongodb";

/**
 * @type {import("mongodb").Db}
 */
let db;

const dbConnect = async () => {
  if (db) return db;

  try {
    const uri =
      "mongodb+srv://random-db-user:own47pass74random@cluster0.mjja2r0.mongodb.net/?retryWrites=true&w=majority";
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    
    db = client.db("joblinkerDb");

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    return db;
  } catch (error) {
    console.log(error.message);
  }
};

export default dbConnect;
