const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to the database
connectDB();

// Add the middleware, it accepts data as JSON to our API
app.use(express.json({ extended: false }));

// Define Routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
