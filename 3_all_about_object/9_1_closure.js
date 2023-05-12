/**
 * Closure
 * 
 * 클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합니다.
 * 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 Closure라고 한다.
 * 
 */
function getNumber(){
    var number = 5;
    function innerGetNumber() {
        return number;
    }
    return innerGetNumber(); //error
}

function getNumber(){
    var number = 5;
    function innerGetNumber() {
        return number;
    }
    return innerGetNumber;
}
const runner = getNumber();
console.log(runner); // [Function: innerGetNumber]
console.log(runner()); // 5

function cacheFunction() {
    //아래 계산은 매우 오래걸린다는 가정을 했을때 값을 기억하고 있음
    var number = 10 * 10;
    function innerCacheFunction(newNumb) {
        return number * newNumb;
    }
    return innerCacheFunction;
}
const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(20));

function cacheFunction2() {
    var number = 99;
    function increment() {
        number++;
        return number;
    }
    return increment;
}
const runner3 = cacheFunction2();
console.log(runner3()); // 100
console.log(runner3()); // 101
console.log(runner3()); // 102
console.log(runner3()); // 103

/**
 * 3) 정보 은닉
 */
function Idol(name, year) {
    this.name = name;
    var _year = year;
    this.sayNameAndYear = function () {
        return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}
const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear());
console.log(yuJin._year); // undefined
console.log(yuJin.name); // 안유진
