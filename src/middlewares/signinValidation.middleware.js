import {validateEmail, validatePassword} from "../utils/validateCustomerInformation.js";
import {ErrorMessage, makeErrorResponse} from "../response/errorResponse.js";

const validateSignIn = (req, res, next) => {
  const {email, password} = req.body;

  if (!validateEmail(email) || !validatePassword(password)) {
    return res.status(401).json(makeErrorResponse(ErrorMessage.INVALID_MEMBER_INFORMATION));
  }

  next();
}

export default validateSignIn;