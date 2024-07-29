const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection URL
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db('Programming-Hero');
        const usersCollection = db.collection('users');

        

        // ==============================================================
        // WRITE YOUR CODE HERE
        //post users info
        app.post("/api/user", async(req, res) =>{
            const newUser = req.body;
            const result = await usersCollection.insertOne(newUser)
            res.status(201).json({
                success: true,
                message: 'New User Added successfully!',
                data: result
            });
        })

        //get all users
        app.get("/api/users", async(req, res) =>{
            const result = await usersCollection.find().toArray()
            res.status(201).json({
                success: true,
                message: 'Users Info are retrieved successfully!',
                data: result
            });
        })

        //delete a supply
        app.delete("/api/user/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await usersCollection.deleteOne(query);
            res.status(201).json({
                success: true,
                message: 'User is deleted successfully!',
                data: result
            });
           });

           //update a supply
          app.put("/api/user/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const update = { $set: req.body };
            const result = await usersCollection.findOneAndUpdate(query, update, { returnOriginal: false });
            res.status(201).json({
                success: true,
                message: 'User is updated successfully!',
                data: result
            });
           });

        //get single product
        app.get("/api/user/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await usersCollection.findOne(query);
            res.status(201).json({
                success: true,
                message: 'User is retrieved successfully!',
                data: result
            });
        });

        //total number of health issues or not
        app.get("/api/users/health", async(req, res) =>{
            const trueCount = await usersCollection.countDocuments({ isHealthDeclaration: true });
            const falseCount = await usersCollection.countDocuments({ isHealthDeclaration: false });
            res.status(201).json({
                success: true,
                message: 'Health Info are retrieved successfully!',
                trueCount,
                falseCount
            });
        })

        // get last inserted user
        app.get("/api/lastUser", async (req, res) => {
            const result = await usersCollection.find().sort({ _id: -1 }).limit(1).toArray();
            res.status(200).json({
              success: true,
              message: 'Last inserted user retrieved successfully!',
              data: result[0]
            });
            });
  
      
        
            

        // ==============================================================


        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });

    } finally {
    }
}

run().catch(console.dir);

// Test route
app.get('/', (req, res) => {
    const serverStatus = {
        message: 'Server is running smoothly',
        timestamp: new Date()
    };
    res.json(serverStatus);
});