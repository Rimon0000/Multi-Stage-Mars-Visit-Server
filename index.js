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
        // const collection = db.collection('users');

        

        // ==============================================================
        // WRITE YOUR CODE HERE
        // //create flash sale
        // app.post("/flash-sale", async(req, res) =>{
        //     const newFlashSale = req.body;
        //     const result = await flashSalesCollection.insertOne(newFlashSale)
        //     res.status(201).json({
        //         success: true,
        //         message: 'New Flash sale Added successfully!',
        //         data: result
        //     });
        // })


        // //create Category
        // app.post("/category", async(req, res) =>{
        //     const newCategory = req.body;
        //     const result = await categoriesCollection.insertOne(newCategory)
        //     res.status(201).json({
        //         success: true,
        //         message: 'New Category Added successfully!',
        //         data: result
        //     });
        // })

        // //get all flash sale
        // app.get("/categories", async(req, res) =>{
        //     const result = await categoriesCollection.find().toArray()
        //     res.status(201).json({
        //         success: true,
        //         message: 'Category are retrieved successfully!',
        //         data: result
        //     });
        // })

       

        // //get all products for popular products
        // app.get("/products", async(req, res) =>{
        //     const result = await productsCollection.find().sort({ ratings: -1 }).toArray();
        //     res.status(201).json({
        //         success: true,
        //         message: 'Products are retrieved successfully!',
        //         data: result
        //     });
        // })
          
          

        // //get single product
        // app.get("/single-fish/:id", async (req, res) => {
        //     const id = req.params.id;
        //     const query = { _id: new ObjectId(id) };
        //     const result = await productsCollection.findOne(query);
        //     res.status(201).json({
        //         success: true,
        //         message: 'Product is retrieved successfully!',
        //         data: result
        //     });
        // });

        
            

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