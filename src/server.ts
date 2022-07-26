import express from "express";
import mfaRouter from './router/mfaRouter'
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/mfa", mfaRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on :${port}`);
});
