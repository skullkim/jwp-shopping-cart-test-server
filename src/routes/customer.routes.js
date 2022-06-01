import express from "express";
import validateSignIn from "../middlewares/signinValidation.middleware.js";

const router = express.Router();

router.post('/authentication/sign-in', validateSignIn, (req, res) => {
  const response = {
    accessToken: 'string',
    userId: 1
  };

  res.status(200).json(response);
});

export default router;