const dns = require('dns').promises;

(async () => {
    const ip = await dns.lookup('gilbut.co.kr');
    console.log('IP', ip);
})();