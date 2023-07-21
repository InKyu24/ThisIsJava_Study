// 2 ~ 10000000 사이의 소수를 구하는데 걸리는 시간을 측정하는 코드
const min = 2;
const max = 10000000;
const primes = [];

function generatePrimes(start, range) {
    let isPrime = true;
    const end = start + range;
    for (let i = start; i < end; i++) {
        for (let j = min; j < Math.sqrt(end); j++) {
        if (i !== j && i % j === 0) {
            isPrime = false;
            break;
        }
        }
        if (isPrime) {
        primes.push(i);
        }
        isPrime = true;
    }
}

console.time('prime');
generatePrimes(min, max);
console.timeEnd('prime');
console.log(primes.length);