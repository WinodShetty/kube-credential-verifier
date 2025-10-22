import express from 'express';
import verifyRouter from './routes/verify';

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use('/api', verifyRouter);

app.listen(PORT, () => {
  console.log(`Verification service running on port ${PORT}`);
});
