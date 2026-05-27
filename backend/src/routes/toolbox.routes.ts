import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Mechanical Toolbox'
    }
  ]);
});

router.post('/', async (req, res) => {
  res.json({
    message: 'Toolbox Created'
  });
});

export default router;
