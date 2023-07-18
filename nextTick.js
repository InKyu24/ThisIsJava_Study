setImmediate(() => {
    console.log(4, 'immediate');
});

setTimeout(() => {
    console.log(3, 'timeout');
}, 0);

Promise.resolve().then(() => {
    console.log(2, 'promise');
});

process.nextTick(() => {
    console.log(1, 'nextTick');
});

console.log(0, 'normal');