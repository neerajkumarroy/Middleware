const express = require("express");
const app = express();

// Define your middleware function
const reqFilter = (req, res, next) => {
    // Check if the 'age' query parameter is provided
    if (!req.query.age) {
        res.send("Please provide age");
    } else if (req.query.age < 18) {
        res.send("You can not access this page.....! ");
    }
    else {
        next(); // Proceed to the next middleware or route handler
    }
}

// Use the middleware for all routes
app.use(reqFilter);

// Define your routes
app.get("/", (req, res) => {
    res.send("Welcome to the home page");
});

app.get("/about", (req, res) => {
    res.send("Welcome to the about page");
});

// Start your server on port 7000
app.listen(3000, () => {
    console.log("Server is running on port 7000");
});
