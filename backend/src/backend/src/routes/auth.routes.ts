import express from 'express';

const router = express.Router();

router.post('/login', async (req, res) => {
  res.json({
    message: 'Login API'
  });
});

router.post('/register', async (req, res) => {
  res.json({
    message: 'Register API'
  });
});

export default router;
