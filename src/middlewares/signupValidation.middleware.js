import {
  validateBirthday,
  validateContact, validateDetailAddress,
  validateEmail,
  validateGender,
  validatePassword,
  validateTerms
} from "../utils/validateCustomerInformation.js";
import {ErrorMessage, makeErrorResponse} from "../response/errorResponse.js";

const validateSingUpData = (req, res, next) => {
  const {email, password, gender, name, birthday: birthday, contact, terms,
    fullAddress: {
      address,
      detailAddress,
      zoneCode,
  }} = req.body;
  console.log(address, detailAddress, zoneCode);

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
  if (!validateBirthday(birthday)) {
    return res.json(makeErrorResponse(ErrorMessage.INVALID_BIRTHDAY));
  }
  if (!validateContact(contact)) {
    return res.json(makeErrorResponse(ErrorMessage.INVALID_CONTACT));
  }
  if(!validateDetailAddress(address, zoneCode)) {
    return res.json(makeErrorResponse(ErrorMessage.INVALID_ZONE_CODE));
  }
  if (!validateTerms(terms)) {
    return res.json(makeErrorResponse(ErrorMessage.DISAGREE_TO_TERMS));
  }

  next();
}

export default validateSingUpData;
