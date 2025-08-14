import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import connectDb from './config/db.js';
import userAuthRouter from './routes/userAuthRouterroutes.js';
import userRouter from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

// CORS config — allow your frontend origin and allow credentials (cookies)
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// Middleware to parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Route all /api/auth requests to userAuthRouter
app.use('/api/auth', userAuthRouter);
app.use('/api/user', userRouter);

// Connect to database, then start server
connectDb().then(() => {
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})}).catch((error) => {
    console.error('Database connection failed:', error);
});
