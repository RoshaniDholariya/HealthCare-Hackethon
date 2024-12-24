// import {Router} from "express";

// import { registerUser, loginUser } from '../Controller/UserController.js';

// const userRoute =Router();

// // Register Route
// userRoute.post('/register', registerUser);

// // Login Route
// userRoute.post('/login', loginUser);

// export default userRoute;
import { Router } from 'express';
import {
  registerUser,
  loginUser,
  addHealthData,
  getHealthData,
  googleLogin,
  updateHealthData,
  deleteHealthData,
} from '../Controller/UserController.js';

const userRoute = Router();

// Register and login routes
userRoute.post('/register', registerUser);
userRoute.post('/login', loginUser);
userRoute.get('/google',googleLogin);
userRoute.get('/google/callback',googleLogin);
// Health data CRUD routes
userRoute.post('/health', addHealthData);
userRoute.get('/health/:userId', getHealthData);
userRoute.put('/health', updateHealthData);
userRoute.delete('/health/:id', deleteHealthData);

export default userRoute;
