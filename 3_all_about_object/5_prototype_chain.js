/**.
 * Prototype
 */

// __proto__ 모든 객체에 존재하는 프로퍼티다.
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.


const testObj = {}; //프로퍼티가 없는 객체
console.log(testObj.__proto__); // undefined

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}


console.dir(IdolModel.prototype, {
    showHidden: true,
})
// 출력
{/* <ref *1> {
  [constructor]: [Function: IdolModel] {
    [length]: 2,
    [name]: 'IdolModel',
    [arguments]: null,
    [caller]: null,
    [prototype]: [Circular *1]
  }
} */}

// circular reference
console.log(IdolModel.prototype.constructor === IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype); // true

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin.__proto__); // {}
console.log(yuJin.__proto__ === IdolModel2.prototype); // true
console.log(testObj.__proto__===Object.prototype); // true
console.log(IdolModel.__proto__===Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true


function IdolModel2(name,year){
    this.name = name;
    this.year = year;
    this.sayHello = function () {
        return `${this.name}이 인사를 합니다.`;
    }
}
const yuJin2 = new IdolModel2('안유진',2003);
const wonYoung2 = new IdolModel2('장원영', 2002);
console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(wonYoung2.sayHello === yuJin2.sayHello); // false, 같은 기능이지만 메모리에선 다르게 할당되어있음
console.log('---------------------')
console.log(yuJin2.hasOwnProperty('sayHello')); // true, yuJin2에만 존재 -> 공유가 되게 하고싶다!

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}
IdolModel3.prototype.sayHello = function () {
    return `${this.name}이 인사합니다.`;
}

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2004);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());
console.log(wonYoung3.sayHello === yuJin3.sayHello); // true
console.log(wonYoung3.hasOwnProperty('sayHello')); // false: 상속은 받았으나 고유하진않음 -> 공유하고 있는 프로퍼티!

// static 만들기
IdolModel3.sayStaticHello = function () {
    return '안녕하세요 저는 staticMethod 입니다.';
}
console.log(IdolModel3.sayStaticHello());

// overriding

function IdolModel4(name, year) {
    this.name = name;
    this.year = year;
    
    this.sayHello = function () {
        return '안녕하세요 저는 인스턴스 메서드입니다.'
    }
}
IdolModel4.prototype.sayHello = function () {
    return '안녕하세요 전 prototype 메서드입니다!';
}
const yuJin4 = new IdolModel4('안유진', 2003);
// 프로퍼티 셰도잉- class의 override
console.log(yuJin4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__변경 vs 함수의 prototype의 변경
 */

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}
IdolModel.prototype.sayHello = function () {
    return `${this.name} 인사를 합니다.`;
}
function FemaleIdoModel(name, year) {
    this.name = name;
    this.year = year;
    this.dance = function () {
        return `${this.name}가 춤을 춥니다.`;
    }
}
const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdoModel('레이', 2004);

console.log(gaEul.__proto__); // { sayHello: [Function (anonymous)] }
console.log(gaEul.__proto__===IdolModel.prototype); // true
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); // true

console.log(gaEul.sayHello()); 
console.log(ray.dance()); 

Object.setPrototypeOf(ray, IdolModel.prototype); // protoType 변경
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdoModel); // false
console.log(ray.constructor === IdolModel); // true
console.log(gaEul.constructor === IdolModel); // true
console.log(Object.getPrototypeOf(ray)===FemaleIdoModel.prototype); // false
console.log(FemaleIdoModel.prototype === IdolModel.prototype); // false
console.log('---------------------')

FemaleIdoModel.prototype = IdolModel.prototype; // FemaleIdoModel, IdolModel의 prototype을 동일하게 만든다면?
const eSeo = new FemaleIdoModel('이서', 2002);

console.log(Object.getPrototypeOf(eSeo) === FemaleIdoModel.prototype); // true
console.log(FemaleIdoModel.prototype === IdolModel.prototype); // true
console.log(Object.getPrototypeOf(eSeo) === IdolModel.prototype); // true
console.log(Object.getPrototypeOf(eSeo) === FemaleIdoModel.prototype); // true

