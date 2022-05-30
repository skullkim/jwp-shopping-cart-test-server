import {validateEmail} from "../utils/validateUserInformation.js";
import {ErrorMessage, makeErrorResponse} from "../response/errorResponse.js";

const validateEmailAddress = (req, res, next) => {
  const {email} = req.query;

  if (!validateEmail(email)) {
    return res.status(400).json(makeErrorResponse(ErrorMessage.INVALID_EMAIL));
  }

  next();
}

export default validateEmailAddress;