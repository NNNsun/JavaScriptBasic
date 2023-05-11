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
    //아래 계산은 매우 오래걸린다는 가정을 했을때
    var number = 10 * 10;
    function innerCacheFunction(newNumb) {
        return number * newNumb;
    }
    return innerCacheFunction;
}
const runner2 = cacheFunction();
console.log(runner2(10));