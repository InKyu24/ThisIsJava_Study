const fs = require('fs').promises; // fs 모듈의 promise 버전
const constants = require('fs').constants; // fs 모듈의 상수들

fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK) // 폴더나 파일에 접근할 수 있는지를 체크
    .then(() => {
        return Promise.reject('이미 폴더 있음');
    })
    .catch((err) => {
        if (err.code === 'ENOENT') { // 파일이나 폴더가 없을 때의 에러코드
            console.log('폴더 없음');
            return fs.mkdir('./folder'); // 폴더가 없으면 폴더를 만듦
        }
        return Promise.reject(err);
    })
    .then(() => {
        console.log('폴더 만들기 성공');
        return fs.open('./folder/file.js', 'w'); // 파일이 없으면 파일을 만듦
    })
    .then((fd) => {
        console.log('빈 파일 만들기 성공', fd);
        return fs.rename('./folder/file.js', './folder/newfile.js'); // 파일의 이름을 바꿈
    })
    .then(() => {
        console.log('이름 바꾸기 성공');
    })
    .catch((err) => {
        console.error(err);
    });