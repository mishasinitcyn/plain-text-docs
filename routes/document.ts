import express from 'express';
import { pool } from '../db';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM Documents WHERE id = $1', [id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Document not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  const { title, description, content, category, file_type } = req.body;
  
  // TODO: Get the user_id from the authenticated session
  const user_id = 45673816; // Replace this with actual user authentication
  
  try {
    const result = await pool.query(
      'INSERT INTO Documents (user_id, title, description, content, category, file_type) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [user_id, title, description, content, category, file_type]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating document' });
  }
});


export default router;