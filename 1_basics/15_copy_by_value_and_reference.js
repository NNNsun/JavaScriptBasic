/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다. *primitive: 오브젝트를 제외한 모든 데이터타입
 * 2) 객체는 copy bty reference다.
 */

let original = '안녕하세요';
let clone = original; // copy by value
console.log(original);
console.log(clone);
clone += ' 안유진입니다.'; 
console.log('------------------------------------');
console.log(clone);

let originalObj = { // 메모리1(originalObj): {}의 주소 값, 메모리2({object}): object의 내용
    name: '안유진',
    group: '아이브',  
}; // 두 개의 메모리 값이 소요
let cloneObj = originalObj; // copy by reference 

console.log(originalObj); // {}의 주소 값
console.log(cloneObj); // {}의 주소값
console.log('------------------------------------');

originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);

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
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false

/**
 * Spread Operator
 */

const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);
console.log(yuJin4 === yuJin3); // copy by value

const yuJin5 = {
    ...yuJin3,
}
console.log(yuJin5);
