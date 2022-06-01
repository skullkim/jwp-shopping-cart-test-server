export const ErrorMessage = {
  INVALID_EMAIL: '유효하지 않은 이메일 입니다.',
  INVALID_MEMBER_INFORMATION: '잘못된 회원 정보입니다.',
  INVALID_PASSWORD: '유효하지 않은 비밀번호입니다.',
  INVALID_GENDER: '유효하지 않은 성별입니다.',
  INVALID_CONTACT: '유효하지 않은 연락처입니다.',
  DISAGREE_TO_TERMS: '약관에 동의하지 않았습니다.',
  INVALID_TOKEN: '유효하지 않은 토큰입니다.',
  TOKEN_EXPIRED: '토큰이 만료되었습니다.',
  INVALID_BIRTHDAY: '유효하지 않은 생일 형식입니다.',
  EMPTY_ADDRESS: '주소가 입력되지 않았습니다',
  INVALID_ZONE_CODE: '유효하지 않은 우편번호입니다.',
};
Object.freeze(ErrorMessage);

export const makeErrorResponse = (errorMessage) => {
  return {message: errorMessage};
}