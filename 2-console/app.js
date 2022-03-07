//console.log('logging....');
//console.clear();

// log level
console.log('log');  // 개발
console.info('info'); // 정보
console.warn('warn'); // 경보 
console.error('error');  // 에러, 사용자 에러, 시스템 에러

//assert
//첫번째 인자로 건낸값이 참이 아닌경우에만 출력
console.assert(2 === 3, 'not same!'); //Assertion failed: not same!
console.assert(2 === 2, 'same!');

//print object
const student = { name: 'leo', age: 20, company: {name: 'AC'}};
console.log(student);
console.table(student); // 테이블 형태로 출력
console.dir(student, { showHidden: true, colors: false, depth: 0}); //option을 추가해서 출력가능
// depth를 통해 중복된 object를 어느선 까지 보여줄지 정할 수 있다.

//measuring time (성능확인시 주로 사용)
console.time('for loop');
for(let i = 0; i <10; i++) {
    i++;
}
console.timeEnd('for loop');

// counting
function a() {
    console.count('a function');
}
a();
a();
console.countReset('a function'); // 카운트 초기화
a();

//trace
function f1() {
    f2();
}

function f2() {
    f3();
}

function f3() {
    console.log('f3');
    console.trace(); //누가 이함수를 호출했는지 확인
}

f1();