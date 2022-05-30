import {
  validateContact,
  validateEmail,
  validateGender,
  validatePassword,
  validateTerms
} from "../utils/validateUserInformation.js";
import makeErrorResponse from "../response/errorResponse.js";

const validateSingUpData = (req, res, next) => {
  const {email, password, gender, contact, terms} = req.body;
  res.status(400);
  if (!validateEmail(email)) {
    return res.json(makeErrorResponse('유효하지 않은 이메일입니다.'));
  }
  if (!validatePassword(password)) {
    return res.json(makeErrorResponse('유효하지 않은 비밀번호입니다.'));
  }
  if (!validateGender(gender)) {
    return res.json(makeErrorResponse('유효하지 않은 성별입니다.'));
  }
  if (!validateContact(contact)) {
    return res.json(makeErrorResponse('유효하지 않은 연락처입니다.'));
  }
  if (!validateTerms(terms)) {
    return res.json(makeErrorResponse('약관에 동의하지 않았습니다.'));
  }
  next();
}

export default validateSingUpData;
