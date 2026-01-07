const express=require("express");
const router = express.Router();
const database=require("../database");

router.get("/", (req, res, next) => {
    try {
        const result = database.prepare("SELECT * FROM transactions").all();
    
        res.json(result);
    } catch (err) {
        next(err);
    }
});

module.exports=router;