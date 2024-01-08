# secure-passwords-generator

This versatile utility allows you to create random list of password of varying lengths, ensuring robust protection for your applications, websites, and user accounts.

## Install
``` 
$ npm install secure-passwords-generator
```

### Running Tests
```
$ npm test
```

## Examples

```
const generatePasswords = require('secure-passwords-generator')

// Generate a single password with the default length (12 characters)
generatePasswords() 

Output: [ 'n^#-J-L#+8nk' ]

// Generate a single password with a specified length (e.g., 15 characters)
generatePasswords(15)

Output: [ '_aOfifx^Mcr61zZY5y*%' ]

// Generate a list of passwords with a specified length (e.g., 12 characters) and count (e.g., 3 passwords)
generatePasswords(12, 3) 

Output: [ '%fb(yulLkjDJ', 'cD$aR9++B%)e', 'tOyb6_Kc%(MP' ]

// Generate a list of passwords with a specified length (e.g., 20 characters) and count (e.g., 6 passwords)
generatePasswords(20, 6)

Output:
[
  'HnLvhV7aSydg0+L%A54v',
  'dfI2-9*ymjv&YLkKW=+E',
  'NYCp)n-hoZQ(8vVe(rJY',
  '^CwFF%*sVc3uC$L1UKJH',
  '3qA8BimSS5teL1cOMRYe',
  'q*5RUSh1bw*!6Zs%z%ul'
]

```

## Reference

[npm registry](https://www.npmjs.com/package/secure-passwords-generator)

[github](https://github.com/fatmazaman/secure-passwords-generator)
