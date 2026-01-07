const express=require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const combineCSV = require("../services/combineCSV")

router.post("/", upload.array("files"), async (req, res, next)=> {
    try {
        await combineCSV(req.files, req.body.accounts);
        res.json({success: true});
    } catch (err) {
        next(err);
    }
});



module.exports=router;