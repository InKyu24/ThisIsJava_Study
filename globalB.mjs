/* FileName : globalB.mjs */

const A = await import('./globalA.mjs');

global.message = '이렇게 B에 넣은 메시지를 A에서도 접근할 수 있습니다.';
console.log(A.default());