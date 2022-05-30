import makeErrorResponse from "../response/errorResponse.js";

const validateToken = (req, res, next) => {
  const authorizationHeader = req.headers.authorization.split(' ');
  const authorizationHeaderPrefix = authorizationHeader[0];
  const accessToken = authorizationHeader[1];

  if (authorizationHeaderPrefix !== 'Bearer' || accessToken === 'invalidToken') {
    return res.status(401).json(makeErrorResponse('유효하지 않은 토큰입니다.'));
  }
  if (accessToken === 'expiredToken') {
    return res.status(402).json(makeErrorResponse('토큰이 만료되었습니다.'));
  }
  next();
}

export default validateToken;