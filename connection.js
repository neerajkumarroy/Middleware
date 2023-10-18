const {mongoClient} = require('mongodb');      // Import MongoClient from the 'mongodb' library.
const url = "mongodb+srv://DEMO1:<DEMO1>@cluster0.1ufxrfa.mongodb.net/";   // Your MongoDB connection URL.
const database = "college";             // Name of the database you want to connect to.

const client = new MongodbClient(url);     // Create a new MongoClient instance.


async function getData()
{
    let result = await client.connect();           // Connect to the MongoDB database.
    let db = result.client(database);              // Get a reference to the 'college' database.
    let collection = db.collection('student');     // Get a reference to the 'student' collection within the 'college' database.
    let response = await collection.find({}).toArray();    // Retrieve all documents in the 'student' collection and convert them to an array.
    console.log(response);          // Print the result to the console.

}

getData();   // Call the getData function to retrieve data from MongoDB.  
