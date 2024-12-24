import express from "express";
import dotenv from "dotenv";
import userRoute from "./Route/UserRoute.js";
import cors from 'cors';

// Enable CORS for all origins (for development)

dotenv.config();


const app=express();

const PORT =process.env.PORT || 3000
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/user', userRoute);

app.listen(PORT,()=>console.log(`server is running on PORT ${PORT}`))