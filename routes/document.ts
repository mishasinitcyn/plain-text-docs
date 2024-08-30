import express from 'express';
import { pool } from '../db';
import { documentsIndex } from '../meilisearch';

const router = express.Router();

router.get('/search', async (req, res) => {
  const { query, category, sortBy } = req.query;
  
  if (!query || typeof query !== 'string') {
    return res.status(400).json({ message: 'Invalid search query' });
  }

  try {
    let searchParams: any = {
      q: query,
      limit: 20,
      attributesToRetrieve: ['id', 'title', 'category', 'description', 'likes_count', 'updated_at'],
    };

    if (category && category !== 'All') {
      searchParams.filter = `category = "${category}"`;
    }

    if (sortBy === 'date') {
      searchParams.sort = ['updated_at:desc'];
    } else if (sortBy === 'likes') {
      searchParams.sort = ['likes_count:desc'];
    }

    const searchResults = await documentsIndex.search(query, searchParams);
    return res.json(searchResults);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error searching documents' });
  }
});

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
    
    const newDocument = result.rows[0];

    console.log("DOCUMENTSINDEX:", documentsIndex)

    // Index the document in Meilisearch
    await documentsIndex.addDocuments([{
      id: newDocument.id,
      title: newDocument.title,
      description: newDocument.description,
      content: newDocument.content,
      category: newDocument.category,
      file_type: newDocument.file_type,
    }]);

    return res.status(201).json(newDocument);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error creating document' });
  }
});

export default router;