const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")
const cors = require("cors")

// this will return a promise which will be resolved when the connection is successful
mongoose
  .connect(
    "mongodb+srv://bhumitcollage2322:Bhumit0902@cluster0.r0kx7bi.mongodb.net/",
  )
  .then(() => console.log("mongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:5173/",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials: true
    })
);

app.use(cookieParser())
app.use(express.json())

// now all the configuration is done so we have to listen to the port
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))