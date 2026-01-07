const express=require("express");
const router = express.Router();
const database=require("../database");

router.get("/", async (req, res, next) => {
    try {
        const result = await database.query(
            "SELECT * FROM transactions"
        );
        
        //get rows only and not fields
        const rows = result[0];

        res.json(rows);
    } catch (err) {
        next(err);
    }
});

module.exports=router;