import {validateEmail} from "../utils/validateUserInformation.js";
import ErrorResponse from "../response/errorResponse.js";

const validateEmailAddress = (req, res, next) => {
  const {email} = req.query;
  if (!validateEmail(email)) {
    return res.status(400).json(ErrorResponse("유효하지 않은 이메일 입니다."));
  }
  next();
}

export default validateEmailAddress;