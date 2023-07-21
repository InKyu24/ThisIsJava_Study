const buffer = Buffer.from('저를 버퍼로 바꿔보세요.')

console.log('from():', buffer)
console.log('length:', buffer.length)
console.log('toString():', buffer.toString())

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')]
// concat(배열) : 배열 안에 든 버퍼들을 하나로 합침
const buffer2 = Buffer.concat(array)
console.log('concat():', buffer2.toString())

// alloc(바이트) : 빈 버퍼를 생성 (바이트를 인수로 지정해주면 해당 크기의 버퍼 생성)
const buffer3 = Buffer.alloc(5)
console.log('alloc():', buffer3)