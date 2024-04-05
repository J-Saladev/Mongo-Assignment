const { MongoClient } = require('mongodb');
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);
let db;

async function connectToDatabase() {
    try {
        await client.connect();
        db = client.db('ClinicSystem');
        console.log("Connected to the database");
        
    } catch (err) {
        console.log(err);
    }
    
}


connectToDatabase();

module.exports = {
    getDb: function() {
        
        return db;
    }
};