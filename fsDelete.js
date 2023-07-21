const fs = require('fs').promises;

fs.readdir('./folder')
    .then((dir) => {
        console.log('폴더 내용 확인', dir);
        if (dir[0] == 'newfile.js') {
            return fs.unlink('./folder/' + dir[0]); // 파일을 지움
        }
    })
    .then(() => {
        console.log('파일 삭제 성공');
        return fs.rmdir('./folder'); // 폴더를 지움
    })
    .then(() => {
        console.log('폴더 삭제 성공');
    })
    .catch((err) => {
        console.error(err);
    });