const emailRegularExpression = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i ;
const passwordRegularExpression =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%^*#?&])[A-Za-z\d$@$!%^*#?&]{8,}$/;
const contactRegularExpression = /^\d{8}$|^\d{11}$/;
const birthDayRegularExpression = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

export const validateEmail = (email) => {
  return emailRegularExpression.test(email);
}

export const validatePassword = (password) => {
  return passwordRegularExpression.test(password);
}

export const validateGender = (gender) => {
  return gender === 'male'
    || gender === 'female'
    || gender === 'undefined';
}

export const validateContact = (contact) => {
  return contactRegularExpression.test(contact);
}

export const validateTerms = (terms) => {
  return terms === 'true';
}

export const validateBirthday = (birthDay) => {
  return birthDayRegularExpression.test(birthDay);
}