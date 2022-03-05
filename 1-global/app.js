//노드용 global을 알려주기위해 노드의 모듈을 하나 임포트함
const fs = require('fs');

console.log(global);
// 브라우저에서는 global이 window객체인것 처럼
// node에서는 global이 global 객체

global.hello = () => {
    global.console.log('hello');
};

global.hello();
hello();