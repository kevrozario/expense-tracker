const Database = require("better-sqlite3");
const dbPath = process.env.DB_PATH || "database.db";
const db = new Database(dbPath);

db.exec(`
    CREATE TABLE IF NOT EXISTS transactions (
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
