import { pipeline } from 'stream/promises';
import zlib from 'zlib';
import fs from 'fs';

const ac = new AbortController();
const { signal } = ac.signal;

setTimeout(() => ac.abort(), 1); // 원하는 시점에 ac.abort()를 호출하면 스트림이 끊긴다.

await pipeline(
    fs.createReadStream('./readme4.txt'),
    zlib.createGzip(),
    fs.createWriteStream('./readme4.txt.gz'),
    { signal } // signal 옵션을 통해 스트림을 끊을 수 있다.
)