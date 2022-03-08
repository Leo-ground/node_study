const fs = require('fs');

// 모든 api는 3가지 형태로 제공됨
// rename(...., callback(error, data))  비동기
// try {renameSync(.....)} catch(e) {} 블로킹(동기)
// promise.rename().then().catch(0)


// 동기적 방법
// 함수가 실행완료 될때까지 다른 일 수행 못함
// error 발생시 프로그램이 종료되어버려 try, catch문을 통해 종료되지 않게함
try {
    //fs.renameSync('./file.txt','./file-new.txt');
    fs.renameSync('./text.txt','./file-new.txt');
} catch(error) {
    console.error(error);
}

console.log('hello');

// 비동기적 방법
fs.rename('./text.txt','./text-file.txt', (error) => {
    console.log(error);
});
console.log('hello2');


//promise

fs.promises
    .rename('./text2.txt','./text-new.txt')
    .then(console.log('DONE!!'))
    .catch(console.error);