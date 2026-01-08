const express = require("express");
const router = express.Router();
const database = require("../database");

router.get("/", (req, res, next) => {
    try {
        const result = database.prepare(
            `SELECT category AS name, 
        SUM(ABS(amount)) AS value
        FROM transactions
        WHERE amount > 0 AND category IS NOT NULL
        GROUP BY category
        `).all();
        res.json(result);

    } catch (err) {
        next(err);
    }
});

module.exports = router;