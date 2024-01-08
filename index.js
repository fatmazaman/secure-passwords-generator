function generatePasswords(length = 12, count = 1) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+'
    const passwords = []
  
    for (let i = 0; i < count; i++) {
      let password = ''
      for (let j = 0; j < length; j++) {
        const randomIndex = Math.floor(Math.random() * charset.length)
        password += charset[randomIndex]
      }
      passwords.push(password)
    }
  
    return passwords
  }
  
module.exports = generatePasswords
  
