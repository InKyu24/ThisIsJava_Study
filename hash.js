const crpto = require('crypto');

console.log('base64:', crpto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex:', crpto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crpto.createHash('sha512').update('다른 비밀번호').digest('base64'));