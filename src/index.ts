import express from 'express';
import diaryRouter from "./routes/diaries";
import patientRoute from "./routes/patients";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3002;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// https://fullstackopen.com/en/part9/typing_an_express_app
// https://fullstackopen.com/en/part9/typing_an_express_app#implementing-the-functionality 