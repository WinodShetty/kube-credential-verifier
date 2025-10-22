import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const initDB = async () => {
  const db = await open({
    filename: './data/credentials.db',
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS issued_credentials (
      id TEXT PRIMARY KEY,
      name TEXT,
      email TEXT,
      timestamp TEXT
    )
  `);

  return db;
};
