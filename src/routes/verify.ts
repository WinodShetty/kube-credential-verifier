import express from 'express';
import { initDB } from '../db/db';
import { getWorkerId } from '../utils/worker';
import { Credential } from '../types/credential';

const router = express.Router();

router.post('/verify', async (req, res) => {
  const credential: Credential = req.body;

  const db = await initDB();
  const row = await db.get(
    'SELECT * FROM issued_credentials WHERE id = ?',
    credential.id
  );

  if (row) {
    return res.json({
      valid: true,
      worker: getWorkerId(),
      timestamp: row.timestamp,
    });
  }

  return res.status(404).json({
    valid: false,
    message: 'Credential not found',
    worker: getWorkerId(),
  });
});

export default router;
