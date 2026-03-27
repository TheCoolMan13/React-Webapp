const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allows React to talk to Express
app.use(express.json()); // Allows Express to understand JSON data from React

// 1. This is our temporary "Database"
let users = [
    { UserId: 'Mom', UserAge: 23 },
    { UserId: 'Dad', UserAge: 25 },
    { UserId: 'Bob', UserAge: 30 },
];

// 2. GET Route: Send all users to the frontend
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json({
        message: "User successfully added to the server!",
        user: newUser
    });
    //res.send("POST Request Called");
})

// 3. Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});