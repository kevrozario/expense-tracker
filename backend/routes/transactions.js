const express=require("express");
const router = express.Router();

const upload = require("../middleware/upload");

router.post("/", upload.array("files"), (req, res)=> {
    //add functions for parsing csv's and inserting in to db
});
