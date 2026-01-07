const Database = require("better-sqlite3");
const db = new Database("database.db");

db.exec(`
    DROP TABLE IF EXISTS transactions;

    CREATE TABLE transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tDate TEXT NOT NULL,
    pDate TEXT NOT NULL,
    description TEXT NOT NULL,
    amount REAL NOT NULL,
    category TEXT NOT NULL,
    account TEXT NOT NULL
    );
    `);
    
module.exports = db;