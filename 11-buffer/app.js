// Fixed-size chuck of memory
// array of integers, byte of data

const buf = Buffer.from('Hi');
console.log(buf); //유니코드 형태로 표현
console.log(buf.length);
console.log(buf[0]); //ASCII code
console.log(buf[1]);
console.log(buf.toString()); //string 출력

// create
const buf2 = Buffer.alloc(2); //사이즈가2개인 버퍼를 만듦
//메모리에서 사용가능한 덩어리를 찾아서 초기화 시킨다

//초기화 하지 않는 것
const buf3 = Buffer.allocUnsafe(2); //fast

buf2[0] = 72;
buf2[1] = 105;
console.log(buf2.toString());
buf2.copy(buf3);
console.log(buf3.toString());


//concat
const newBuf = Buffer.concat([buf,buf2,buf3]);
console.log(newBuf.toString());