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

router.get("/categories", (req, res, next) => {
    try {

        const category = req.params.category;

        const result = database.prepare(`
            SELECT DISTINCT category
            FROM transactions
            `).all();

        res.json(result.map(r=>r.category));

    } catch (err) {
        next(err);
    }
});

router.get("/:category", (req, res, next) => {
    try {

        const category = req.params.category;

        const result = database.prepare(`
            SELECT * FROM transactions
            WHERE category = ?
            `).all(category);

        res.json(result);

    } catch (err) {
        next(err);
    }
});

module.exports=router;