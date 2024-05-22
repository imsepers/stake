import  dotenv from 'dotenv';
dotenv.config();
import express from "express";
import  cors  from "cors";
import { outcomes } from "./outcome";
import gamesRouter from './routes/games'
const app=express();
app.use(cors());

app.use('/api/games' , gamesRouter);

app.listen(3000 || process.env.PORT);