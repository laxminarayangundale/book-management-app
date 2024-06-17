require("./Connection/connection");
const express = require("express");
const app = express();
const cors = require("cors")

const bookRoute = require("./routes/bookRoutes")

app.use(cors());
app.use(express.json());

app.use("/api/book", bookRoute);



app.listen(3000, () => {
    console.log("server started");
});