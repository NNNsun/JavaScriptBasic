/**
 * copy by value: 값에 의한 전달
 * copy by reference: 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by "value"이다. *primitive: 오브젝트를 제외한 모든 data type
 * 2) 객체는 copy by "reference"다.
 */

let original = '안녕하세요';
let clone = original; // copy by value
console.log(original); // 안녕하세요
console.log(clone); // 안녕하세요
console.log(`copy by value 비교: ${original == clone}`);  // true
clone += ' 안유진입니다.'; 
console.log('------------------------------------');
console.log(clone); // 안녕하세요 안유진 입니다. => copy by "value"



let originalObj = { // 메모리1(originalObj): {객체}의 주소 값, 메모리2({object}): object의 내용
    name: '안유진',
    group: '아이브',  
}; // 두 개의 메모리 값이 소요
let cloneObj = originalObj; // copy by "reference" 

console.log(originalObj); // {}의 주소 값
console.log(cloneObj); // {}의 주소값

console.log('------------------------------------');

originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj); // cloneObj의 값도 '코드팩토리'로 변경됨 => copy by "reference"

console.log(originalObj===cloneObj); // true
console.log(original === clone); // false

originalObj = {
    name: '최지호',
    group: '코드팩토리',
}
cloneObj= {
    name: '최지호',
    group: '코드팩토리',
}
console.log(originalObj===cloneObj); // false: 오브젝트 내의 값들이 같다고해서 오브젝트가 같지는 않다.


// 객체(originalObj)를 생성하고 ={리터럴} 로 초기화 할 때, 객체는 {}의 주소값(예: 0x0003)을 가리키고 있다.
// 만약 cloneObj로 객체를 복사한다면 cloneObj는 {}의 값을 가지고 있는 것이 아니라 originalObj에 할당된 주소(0x0003)을 가리키게 된다.
// 따라서 {}의 값을 변경한다면 {}를 가리키고 있는 모든 객체(original, clone)의 값이 변경된다.

const yuJin1 = {
    name: '안유진',
    group: '아이브',
}
const yuJin2 = yuJin1; // 같은 주소값
const yuJin3 = {
    name: '안유진',
    group: '아이브',
} // 1,2와 다름
console.log('------------------------------------');
console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false => 다른 메모리공간을 참조하기때문
console.log(yuJin2 === yuJin3); // false

/**
 * Spread Operator: 똑같은 값을 가르키고있는 Object, Array를 copy by value로 복사가 가능하다!
 */

const yuJin4 = {
    ...yuJin3, // 메모리 공간은 다른 곳을 가리킨다. => copy by value
};
console.log(yuJin4);
console.log(yuJin4 === yuJin3); // copy by value

const yuJin5 = {
    year:2003,
    ...yuJin3,
}
console.log(yuJin5);
const yuJin6 = {
    name: '코드팩토리', // name: 안유진 => 코드팩토리 로 변경
    ...yuJin3, // yuJin3의 name(안유진)이 다시 값을 덮어버림 => name:안유진
}
console.log(yuJin6);

const yuJin7 = {
    ...yuJin3,
    name: '코드팩토리',
}
console.log(yuJin7); // { name: '코드팩토리', group: '아이브' }

const numbers = [1, 3, 5];
const numbers2 = [
    ...numbers,
    10,
]
console.log(numbers2); // [ 1, 3, 5, 10 ]

