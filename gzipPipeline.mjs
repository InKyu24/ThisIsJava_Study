import { pipeline } from 'stream/promises';
import zlib from 'zlib';
import fs from 'fs';

await pipeline(
    fs.createReadStream('./readme4.txt'),
    zlib.createGzip(),
    fs.createWriteStream('./readme4.txt.gz')
)

// 파이프라인을 사용하면 중간에 AbortController를 통해 연결된 스트림을 끊을 수 있다.