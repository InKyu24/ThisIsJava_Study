const myURL = new URL("http://ww.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript");
console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category')); // 키(category)에 해당하는 모든 값
console.log('searchParams.get():', myURL.searchParams.get('limit')); // 키(limit)에 해당하는 첫 번째 값
console.log('searchParams.has():', myURL.searchParams.has('page')); // 해당 키(page) 존재 여부

console.log('searchParams.keys():', myURL.searchParams.keys()); // 모든 키를 iterator 객체로 가져옴
console.log('searchParams.values():', myURL.searchParams.values()); // 모든 값을 iterator 객체로 가져옴

myURL.searchParams.append('filter', 'es3'); // 해당 키를 추가
myURL.searchParams.append('filter', 'es5'); // 해당 키를 추가
console.log(myURL.searchParams.getAll('filter')); // 키(filter)에 해당하는 모든 값

// myURL.searchParams.set('filter', 'es6'); // 해당 키를 수정
console.log(myURL.searchParams.getAll('filter')); // 키(filter)에 해당하는 모든 값

// myURL.searchParams.delete('filter'); // 해당 키를 제거
console.log(myURL.searchParams.getAll('filter')); // 키(filter)에 해당하는 모든 값

console.log('searchParams.toString():', myURL.searchParams.toString()); // 조작한 searchParams 객체를 다시 문자열로 만듦