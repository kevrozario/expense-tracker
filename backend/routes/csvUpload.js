const express=require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const combineCSV = require("../services/combineCSV")

router.post("/", upload.array("files"), (req, res, next)=> {
    console.log("you made it to csvUpload.js");
    try {

        if(!req.files || req.files.length === 0) {
            throw new Error("no csv files uploaded");
        }
        if (!req.body.accounts) {
            throw new Error("missing accounts field");
        }
        combineCSV(req.files, req.body.accounts);
        res.json({success: true});
    } catch (err) {
        next(err);
    }
});

module.exports=router;