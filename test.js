const generatePasswords = require('./index')

// Generate a single password with the default length (12 characters)
console.log(generatePasswords())

// Generate a single password with a specified length (e.g., 15 characters)
console.log(generatePasswords(15))

// Generate a list of passwords with a specified length (e.g., 12 characters) and count (e.g., 3 passwords)
console.log(generatePasswords(12, 3)) 

// Generate a list of passwords with a specified length (e.g., 20 characters) and count (e.g., 6 passwords)
console.log(generatePasswords(20, 6))