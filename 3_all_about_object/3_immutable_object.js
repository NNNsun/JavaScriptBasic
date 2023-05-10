/**
 * Immutable Object
 */
const yuJin = {
    name: '안유진',
    year: 2003,
    
    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin);

/**
 * Extensible - 확장가능성
 */

console.log(Object.isExtensible(yuJin)); // true
yuJin['position'] = 'vocal'; // 확장
console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' }
Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin)); // false
yuJin['groupName'] = '아이브';
console.log(yuJin);// { name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' } error를 던지진않음
delete yuJin['position'];
console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter] } - 삭제 가능, 추가는 불가능

/**
 * Seal
 */
const yuJin2 = {
    name: '안유진',
    year: 2003,
    
    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin2);
console.log(Object.isSealed(yuJin2)); // false: 기본값, 봉인이 되어있지않음

Object.seal(yuJin2);//  configurable: false로 만드는 것과 같음
console.log(Object.isSealed(yuJin2));
yuJin2['groupName'] = '아이브'; // 새로운 프로퍼티 추가시도
console.log(yuJin2); // { name: '안유진', year: 2003, age: [Getter/Setter] } 추가 안됨
delete yuJin2['name'];// 삭제 시도
console.log(yuJin2); // { name: '안유진', year: 2003, age: [Getter/Setter] } 삭제 안됨

/**
 * Freezed: 읽기 외의 모든 기능을 불가능하게 한다.
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,
    
    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Object.isFrozen(yuJin3)); // false
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3)); // true
yuJin3['groupName'] = '아이브';
console.log(yuJin3); // { name: '안유진', year: 2003, age: [Getter/Setter] } groupName 추가 실패
delete yuJin3['name'];
console.log(yuJin3); // { name: '안유진', year: 2003, age: [Getter/Setter] } name 삭제 실패

// error 발생
// Object.defineProperty(yuJin3, 'name', {
//     value: '코드팩토리',
// });
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name')); // enumerable 를 제외한 모든 기능이 false
// {
//   value: '안유진',
//   writable: false,
//   enumerable: true,
//   configurable: false
// }
const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4)); // true
console.log(Object.isFrozen(yuJin4['wonYoung'])); // false - 상위 오브젝트가 freeze,seal이 되었다해도 하위 오브젝트는 영향을 받지않음
