import {
  validateContact,
  validateEmail,
  validateGender,
  validatePassword,
  validateTerms
} from "../utils/validateUserInformation.js";
import {ErrorMessage, makeErrorResponse} from "../response/errorResponse.js";

const validateSingUpData = (req, res, next) => {
  const {email, password, gender, contact, terms} = req.body;

  res.status(400);
  if (!validateEmail(email)) {
    return res.json(makeErrorResponse(ErrorMessage.INVALID_EMAIL));
  }
  if (!validatePassword(password)) {
    return res.json(makeErrorResponse(ErrorMessage.INVALID_PASSWORD));
  }
  if (!validateGender(gender)) {
    return res.json(makeErrorResponse(ErrorMessage.INVALID_GENDER));
  }
  if (!validateContact(contact)) {
    return res.json(makeErrorResponse(ErrorMessage.INVALID_CONTACT));
  }
  if (!validateTerms(terms)) {
    return res.json(makeErrorResponse(ErrorMessage.DISAGREE_TO_TERMS));
  }

  next();
}

export default validateSingUpData;
