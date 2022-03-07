//browser 에서의 this와 node에서의 this의 차이가 있다.
//함수에서의 this는 global
function hello() {
    console.log(this);
    console.log(this === global);
}
hello();

//class에서 this는 자기 자신을 가리킨다
class A {
    constructor(num) {
        this.num = num;
    }
    memberFunction() {
        console.log('------class---------')
        console.log(this);
        console.log(this === global);
    }
}

const a = new A(1);
a.memberFunction();

// node에서의 this는 module의 exports를 가리킨다.
console.log('-------global scope---------');
console.log(this);
console.log(this === module.exports);