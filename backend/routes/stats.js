const express = require("express");
const router = express.Router();
const database = require("../database");

//most spent card
router.get("/most-spent", (req, res, next) => {
    try {
        const result = database.prepare(
            `SELECT category AS name, 
        SUM(ABS(amount)) AS value
        FROM transactions
        WHERE amount > 0 AND category IS NOT NULL
        GROUP BY category
        ORDER BY value DESC
        LIMIT 5
        `).all();
        res.json(result);

    } catch (err) {
        next(err);
    }
});

//least spent card
router.get("/least-spent", (req, res, next) => {
    try {
        const result = database.prepare(
            `SELECT category AS name, 
        SUM(ABS(amount)) AS value
        FROM transactions
        WHERE amount > 0 AND category IS NOT NULL
        GROUP BY category
        ORDER BY value ASC
        LIMIT 5
        `).all();
        res.json(result);

    } catch (err) {
        next(err);
    }
});

//most expensive card
router.get("/most-expensive", (req, res, next) => {
    try {
        const result = database.prepare(
            `SELECT description AS name, 
        amount AS value
        FROM transactions
        WHERE amount > 0 
        ORDER BY value DESC
        LIMIT 10
        `).all();
        res.json(result);

    } catch (err) {
        next(err);
    }
});

//least expensive card
router.get("/least-expensive", (req, res, next) => {
    try {
        const result = database.prepare(
            `SELECT description AS name, 
        amount AS value
        FROM transactions
        WHERE amount > 0 
        ORDER BY value ASC
        LIMIT 10
        `).all();
        res.json(result);

    } catch (err) {
        next(err);
    }
});

module.exports=router;