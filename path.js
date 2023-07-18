const path = require('path');

const string = __filename;

console.log(string);

console.log('경로의 구분자(\\ or /): ', path.sep);
console.log('환경 변수의 구분자(; or :): ', path.delimiter);
console.log('---------------------------');
console.log('파일이 위치한 폴더 경로: ', path.dirname(string));
console.log('파일의 확장자: ', path.extname(string));
console.log('파일의 이름: ', path.basename(string));
console.log('확장자를 제외한 파일의 이름: ', path.basename(string, path.extname(string)));
console.log('---------------------------');
console.log('파일의 경로를 객체로 구분: ', path.parse(string));
console.log('객체를 이용한 파일 경로 생성: ', path.format({
    dir: 'C:\\Users\\choi',
    name: 'path',
    ext: '.js'
}));
console.log('정상적인 경로로 변환? : ', path.normalize('C://Users\\\\choi\\\path.js'));
console.log('---------------------------');
console.log('절대 경로인지 여부: ', path.isAbsolute('C:\\'));
console.log('절대 경로인지 여부: ', path.isAbsolute('./home'));
console.log('---------------------------');
console.log('첫 번째 경로에서 두 번째 경로로 이동하는 방법: ', path.relative(__dirname, 'C:\\'));
console.log('하나의 경로로 합쳐서 표현(상대경로 처리): ', path.join(__dirname, '..', '..', '..', '..', '/Users', '.', '/choi'));
console.log('하나의 경로로 합쳐서 표현(절대경로 처리): ', path.resolve(__dirname, '..', 'Users', '.', '/choi'));