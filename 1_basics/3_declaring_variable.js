/**
 * Variable 선언하기 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const 
 */

var name ='sun';
console.log(name);

var age=32;
console.log(age);

let ive='아이브';
console.log(ive);



/**
 * let과 var로 선언하면 
 * 값을 추후에 변경할 수 있다.
 */
ive='장원영';
console.log(ive);

const newJeans= '뉴진스';
console.log(newJeans);

// newJeans='sun';

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것  var name; <-undefined, 좋은 습관이 아니다
 * 2) 할당 ='코드팩토리'
 * const는 초기화 필요
 */