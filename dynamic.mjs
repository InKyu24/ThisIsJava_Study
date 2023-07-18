/* FileName : dynamic.mjs */

const a = false;
if (!a) {
    // import './func.mjs'; 다이내믹 임포트 불가능
    const m1 = await import('./func.mjs');
    console.log(m1);
    const m2 = await import('./var.mjs');
    console.log(m2);
}

console.log('성공');
// import는 Promise를 반환하기 때문에 await나 then을 붙여야 한다.
// ES 모듈의 최상위 스코프에서는 async 함수 없이도 await가 가능하다.