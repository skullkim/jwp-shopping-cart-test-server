import express from 'express';

import validateSingUpData from "../middlewares/signupValidation.middleware.js";
import validateToken from "../middlewares/tokenValidation.middleware.js";

const router = express.Router();

router.post('/', validateSingUpData, (req, res) => {
  res.setHeader('location', '/api/users/1');
  return res.status(201).end();
});

router.get('/:customerId', validateToken, (req, res, next) => {
  const useInformation = {
    customerId : 1,
    email : 'example@example.com',
    profileImage : 'http://gravatar.com/avatar/1?d=identicon',
    name : 'string',
    gender : 'male',
    birthday : '1999-03-28',
    contact : '12345678910',
    fullAddress : {
      address: 'address',
      detailAddress: 'detailAddress',
      zoneCode: '12345',
    },
    terms : true
  };

  return res.status(200).json(useInformation);
});

router.put('/:customerId', validateToken, (req, res) => {
  return res.status(204).end();
})

router.delete('/:customerId', validateToken, (req, res) => {
  return res.status(204).end();
})

export default router;