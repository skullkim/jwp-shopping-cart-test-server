import express from 'express';
import validateEmailAddress from "../middlewares/emailValidation.middleware.js";

const router = express.Router();

router.get('/', validateEmailAddress, (req, res) => {
  const {email} = req.query;
  const response = {
    isDuplicated: false,
  };

  if (email === 'duplicatedEmail@example.com') {
    response.isDuplicated = true;
  }

  return res.status(200).json(response);
});

export default router;