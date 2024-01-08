const generatePasswords = require('./index')

const passwords = generatePasswords(12, 3);
console.log(passwords);
const passwords1 = generatePasswords(20, 6);
console.log(passwords1);
const passwords2 = generatePasswords(12, 1);
console.log(passwords2)
