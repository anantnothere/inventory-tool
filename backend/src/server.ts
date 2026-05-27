import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes';
import toolboxRoutes from './routes/toolbox.routes';
import transactionRoutes from './routes/transaction.routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/toolboxes', toolboxRoutes);
app.use('/api/transactions', transactionRoutes);

app.get('/', (req, res) => {
  res.send('Inventory API Running');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
