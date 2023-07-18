/* FileName : func.js */

// require(불러올 모듈의 경로) [확장자 생략 가능, index.js는 전체 생략 가능]
const { odd, even } = require('./var');

function checkOddOrEven(num) {
    if (num % 2) {
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;