const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());


setTimeout(() => {
    console.log('setTimeout');
},0)

//수행되고 있는 코드가 완료된 다음에 내가 등록한 콜백함수를 테스크 큐에 넣을때 사용
//테스크 큐에 이미 setTimeout 처럼 다른 콜백함수가 들어있어도 우선순위를 높여서 테스크 큐 제일 앞부분에 넣어줌
process.nextTick(() => {
    console.log('nextTick');
})

for(let i = 0 ; i<100; i++) {
    console.log('for loop');
}