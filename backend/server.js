const express = require("express");
const cors = require("cors");
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("backend running");
});

//transaction route
const csvUploadRoute = require("./routes/transactions");
app.use("/csv-uploads", csvUploadRoute);

app.use((err, req, res, next)=> {
    console.error("error -> ", err);

   res.status(400).json({error: err.message});
});

//add another route later

//start server
app.listen(port, () => {
    console.log("Server listening on PORT", port);
});