const express = require("express");
const app = express();
const cors = require("cors");

const indexrouter = require("./routers/indexrouter");



app.use(express.json());
app.use(cors());
app.use (express.urlencoded({ extended: true }));


app.use("/", indexrouter);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})
