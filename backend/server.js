const express = require("express");
const cors = require("cors");
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("backend running");
});

//route for csv uploads
const csvUploadRoute = require("./routes/csvUpload");
app.use("/csv-uploads", csvUploadRoute);


//route for transactions
const transactionsRoute = require("./routes/transactions");
app.use("/transactions", transactionsRoute);

//route for categories
const categoriesRoute = require("./routes/categories");
app.use("/categories", categoriesRoute);

//route for stats
const statsRoute = require("./routes/stats");
app.use("/stats", statsRoute);

app.use((err, req, res, next)=> {
    console.error("error -> ", err);

   res.status(400).json({error: err.message});
});

//start server
app.listen(port, () => {
    console.log("Server listening on PORT", port);
});