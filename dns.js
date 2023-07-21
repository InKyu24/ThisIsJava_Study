const dns = require('dns').promises;

const domain = 'naver.com';

async function findIpAddressInfo() {
    const ip = await dns.lookup(domain);
    console.log('IP', ip);

    const ipv4 = await dns.resolve(domain, 'A');
    console.log(ipv4, 'A [IPv4 주소]');

    const ns = await dns.resolve(domain, 'NS');
    console.log('NS [네임서버]', ns);

    const soa = await dns.resolve(domain, 'SOA');
    console.log('SOA [도메인정보]', soa);

    const cname = await dns.resolve('www.' + domain, 'CNAME');
    console.log('CNAME [별칭]', cname);

    const mx = await dns.resolve(domain, 'MX');
    console.log('MX [메일서버]', mx);

    const any = await dns.resolve(domain, 'ANY');
    console.log('ANY [모든 정보]', any);
}

findIpAddressInfo();