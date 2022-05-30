import {validateEmail, validatePassword} from "../utils/validateUserInformation.js";
import ErrorResponse from "../response/errorResponse.js";

const validateSignIn = (req, res, next) => {
  const {email, password} = req.body;
  res.status(401);
  if (!validateEmail(email) || !validatePassword(password)) {
    return res.json(ErrorResponse('잘못된 회원 정보입니다.'));
  }
  next();
}

export default validateSignIn;