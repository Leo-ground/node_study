//규모있는 프로젝트에서는 모듈을 써야한다
// 예시: 콘솔모듈 네트워크모듈 등... 연관되어있는 것을 묶어서 관리

//count를 접근하기위해서는 별도 import / 해당 모듈의 export를 설정해주어야 한다
//node js 와  js 자체의 의 문법의 차이가 있다
//현재는 node 문법

const counter = require('./counter.js');

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());