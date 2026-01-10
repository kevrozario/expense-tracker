const express = require("express");
const router = express.Router();
const database = require("../database");

router.get("/top-category", (req, res, next) => {
    try {
        const result = database.prepare(
            `SELECT category, 
        SUM(amount) as value
        FROM transactions
        WHERE amount > 0 AND category IS NOT NULL
        GROUP BY category
        ORDER by value DESC
        LIMIT 1
        `).get();
        res.json(result);

    } catch (err) {
        next(err);
    }
});

router.get("/bottom-category", (req, res, next) => {
    try {
        const result = database.prepare(
            `SELECT category, 
        SUM(amount) as value
        FROM transactions
        WHERE amount > 0 AND category IS NOT NULL
        GROUP BY category
        ORDER by value ASC
        LIMIT 1
        `).get();
        res.json(result);

    } catch (err) {
        next(err);
    }
});

router.get("/biggest-purchase", (req, res, next) => {
    try {
        const result = database.prepare(
            `SELECT description,
            amount 
            FROM transactions
            WHERE amount > 0
            ORDER BY amount DESC
            LIMIT 1
        `).get();
        res.json(result);

    } catch (err) {
        next(err);
    }
});

router.get("/smallest-purchase", (req, res, next) => {
    try {
        const result = database.prepare(
            `SELECT description,
            amount 
            FROM transactions
            WHERE amount > 0
            ORDER BY amount ASC
            LIMIT 1
        `).get();
        res.json(result);

    } catch (err) {
        next(err);
    }
});

router.get("/total-amount", (req, res, next) => {
    try {
        const result = database.prepare(
            `SELECT SUM(amount) as total
            FROM transactions
            WHERE amount > 0
        `).get();
        res.json(result);

    } catch (err) {
        next(err);
    }
});

router.get("/transaction-count", (req, res, next) => {
    try {
        const result = database.prepare(
            `SELECT COUNT(*) as count
            FROM transactions
            WHERE amount > 0
        `).get();
        res.json(result);

    } catch (err) {
        next(err);
    }
});

router.get("/average-amount", (req, res, next) => {
    try {
        const result = database.prepare(
            `SELECT AVG(amount) as average
            FROM transactions 
            WHERE amount > 0
        `).get();
        res.json(result);

    } catch (err) {
        next(err);
    }
});



module.exports = router;