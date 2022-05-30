import {ErrorMessage, makeErrorResponse} from "../response/errorResponse.js";

const validateToken = (req, res, next) => {
  const authorizationHeader = req.headers.authorization.split(' ');
  const authorizationHeaderPrefix = authorizationHeader[0];
  const accessToken = authorizationHeader[1];

  if (authorizationHeaderPrefix !== 'Bearer' || accessToken === 'invalidToken') {
    return res.status(401).json(makeErrorResponse(ErrorMessage.INVALID_TOKEN));
  }
  if (accessToken === 'expiredToken') {
    return res.status(402).json(makeErrorResponse(ErrorMessage.TOKEN_EXPIRED));
  }

  next();
}

export default validateToken;