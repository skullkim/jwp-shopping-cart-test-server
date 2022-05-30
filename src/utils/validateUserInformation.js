const emailRegularExpression = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i ;
const passwordRegularExpression =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%^*#?&])[A-Za-z\d$@$!%^*#?&]{8,}$/;
const contactRegularExpression = /^[0-9]+$/;

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