/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지 만 다른 값을 가져오거나
 *                      설정할때 호출되는 함수로 구성된 프로퍼티
 *                      예를들면 getter와  setter
 */

const yuJin = {
    name: '안유진',
    year: 2003,
}
// console.log(Object.getOwnPropertyDescriptor(yuJin, 'name')); // { value: '안유진', writable: true, enumerable: true, configurable: true }
// console.log(Object.getOwnPropertyDescriptor(yuJin, 'year')); // { value: 2003, writable: true, enumerable: true, configurable: true }

/**
 * Property Attribute의 속성
 * 
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는지 여부, false로 설정하면 프로퍼티 값을 수정할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부, for..in loop 등을 사용할 수 있으면 true를 반환
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다. 
 *                   false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다.
 *                   단, writable이 true인 경우 값 변경과 writable을 변경하는 건 가능하다.
 */

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2 = {
    // 데이터 프로퍼티
    name: '안유진',
    year: 2003,
    // 액세서 프로퍼티
    get age() {
        return new Date().getFullYear() - this.year;
    },
    // 액세서 프로퍼티
    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin2);
console.log(yuJin2.age); // 20

yuJin2.age = 32;
console.log(yuJin2.age); // 32
console.log(yuJin2.year); // 1991

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

// yuJin2['height'] = 172;

Object.defineProperty(yuJin2, 'height', { // writable, enumerable, configurable을 설정하지않으면 기본값 = false
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true,

});
yuJin2.height = 180;
console.log(yuJin2);
Object.defineProperty(yuJin2, 'height', { // 기존에 정의 되었다면 설정한 속성만 변경 됨, 어떤것을 정의하고 값을 바꾸지 못하게 할때 유용함
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

console.log('-------------');
yuJin2.height = 172;
console.log(yuJin2); // { name: '안유진', year: 1991, age: [Getter/Setter], height: 180 } - height: 180 => writable: false이기때문

/**
 * Enumerable
 */
console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
    console.log(key);
    //name
    // year
    // age
    // height
};// 현재 열거형이 가능함
Object.defineProperty(yuJin2, 'name', {
    enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name')); // { value: '안유진', writable: true, enumerable: false, configurable: true }
console.log("-------------------------");
console.log(Object.keys(yuJin2)); // [ 'year', 'age', 'height' ]
for (let key in yuJin2) {
    console.log(key);
    // year
    // age
    // height
};// name 열거 불가능

/**
 * Configurable
 */
Object.defineProperty(yuJin2, 'height', {
    writable: true,
    configurable: false, 
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height')); // { value: 180, writable: false, enumerable: true, configurable: false }
// configurable: false - 재정의 할수없음,

// Object.defineProperty(yuJin2, 'height', {
//     enumerable: false, 
// }); Error 발생

Object.defineProperty(yuJin2, 'height', {
    value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height')); // { value: 172, writable: true, enumerable: true, configurable: false }
Object.defineProperty(yuJin2, 'height', {
    writable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height')); // { value: 172, writable: false, enumerable: true, configurable: false }
// Object.defineProperty(yuJin2, 'height', {
//     writable: true, // error 발생
// });
// console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height')); 