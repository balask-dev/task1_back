import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import dotenv from "dotenv";
import { dataRoute } from './routes/data.js';
const app = express();
app.use(cors());

dotenv.config();
app.use(express.json());
app.use("/api/data", dataRoute);


mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
 

app.listen(process.env.PORT || 4000, () => {
    console.log("Connected");
  });
  
