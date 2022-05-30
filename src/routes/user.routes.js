import express from 'express';

import validateSingUpData from "../middlewares/signupValidation.middleware.js";

const router = express.Router();

router.post('/', validateSingUpData, (req, res) => {
  res.setHeader('location', '/api/users/1');
  res.status(201).end();
});

export default router;