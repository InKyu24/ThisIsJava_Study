const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const min = 2;
let primes = [];

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

if (isMainThread) { // 메인 스레드
    const max = 10000000;
    const threadCount = 8; // 8개의 스레드를 사용한다.
    const threads = new Set();
    const range = Math.ceil((max - min) / threadCount); // 1250000
    let start = min;
    console.time('prime');
    for (let i = 0; i < threadCount - 1; i++) {
        const wStart = start;
        threads.add(new Worker(__filename, { workerData: { start: wStart, range } }));
        start += range;
    } // 8개의 스레드를 만들고, 각각의 스레드에게 작업을 분배

    threads.add(new Worker(__filename, { workerData: { start, range: max - start } })); // 남은 작업을 마지막 스레드에게 할당
    
    for (let worker of threads) {
        worker.on('error', (err) => {
            throw err;
        });
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.timeEnd('prime');
                console.log(primes.length);
            }
        });
        worker.on('message', (msg) => {
            primes = primes.concat(msg);
        });
    }
} else { // 워커 스레드
    generatePrimes(workerData.start, workerData.range);
    parentPort.postMessage(primes);
}