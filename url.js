const url = require('url');

const { URL } = url;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');

console.log('url 객체 : ', myURL);
console.log('url search 부분 : ', myURL.search);
console.log('url search params 객체 : ', myURL.searchParams);
console.log('url 조립 : ', url.format(myURL));