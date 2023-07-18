/* FileName : dynamic.js */

const a = false;
if (!a) {
    require('./func');
}

console.log('성공');
console.log(require.cache);