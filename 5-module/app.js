//js 자체의 import export 문법
//npm init --yes >> package.json에 추가 "type": "module",
import {increase, getCount} from './counter.js';
// import * as counter from './counter.js';
// 위처럼 * <--전체를 counter로 받아올 경우에는 해당 함수 앞에 명시 counter.increase();

increase();
increase();
increase();
console.log(getCount());


