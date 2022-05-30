import express from 'express';

import validateSingUpData from "../middlewares/signupValidation.middleware.js";
import validateToken from "../middlewares/tokenValidation.middleware.js";

const router = express.Router();

router.post('/', validateSingUpData, (req, res) => {
  res.setHeader('location', '/api/users/1');
  return res.status(201).end();
});

router.get('/:userId', validateToken, (req, res, next) => {
  const useInformation = {
    userId : 1,
    email : 'example@example.com',
    profileImage : 'http://gravatar.com/avatar/1?d=identicon',
    name : 'string',
    gender : 'male',
    birthDay : '1999-03-28',
    contact : '12345678910',
    address : 'asdf',
    terms : true
  };

  return res.status(200).json(useInformation);
});

router.put('/:userId', validateToken, (req, res) => {
  return res.status(204).end();
})

router.delete('/:userId', validateToken, (req, res) => {
  return res.status(204).end();
})

export default router;