/**
 * function ->함수
 */

/**
 * 만약에 2라는 숫자에  *10/ 2 % 3 스트링으로 변환해서
 * 반환받고 싶다면 어떻게 해야할까?
 */

console.log((2*10/2%3).toString());
console.log((3*10/2%3).toString());
/**
 * DRY
 * D-> Don't
 * R-> Repeat
 * Y-> Yourself
 */

function calculate(){
    console.log((2*10/2%3).toString());
}
// calculate();

function calculate(number){ // 파라미터
    console.log((number*10/2%3).toString());
}
calculate(4); // 아규먼트

/**
 * Parameter: 함수에서 입력받는 값에 대한 정의
 * Argument: 실제 입력하는 값
 */

function multiply(x, y){ // 파라미터
    console.log(x*y);
}
multiply(2,4);

function multiply(x,y=10) { // 디폴트 값
    console.log(x*y);
}
multiply(2,4);
multiply(2);


/**
 * 반환받기 return
 */
console.log('----------------------');

function multiply(x,y) {
    return x*y; 
}
const result1 = multiply(2,4);
console.log(result1);

const result2 = multiply(2,3);
console.log(result2);

/**
 * Arrow 함수: 간편!
 */

const multiply2=(x,y)=>{
    return x*y;
}
console.log(multiply2(3,4));
const multiply3 = (x,y)=>x*y;
console.log(multiply3(4,5));

const multiply4 = x=>x*2;
console.log(multiply4(2));

const multiply5 = x=>y=>z=> `x: ${x} y:${y} z:${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x){
    return function (y) {
        return function (z) {
            return `x: ${x} y:${y} z:${z}`;
        }
    }
}

const multiplyTwo = function(x,y){
    return x*y;
}


console.log(multiply6(2)(5)(7));
console.log(multiplyTwo(4,5));

const multiplyThree = function(x,y,z){
    console.log(arguments); // [Arguments] { '0': 4, '1': 5, '2': 6 }
    return x*y*z;
}
console.log('----------------------');
console.log(multiplyThree(4,5,6));
const multiplyAll = function(...arguments){ // 외부에서 무한하게 아규먼트를 받음
    return Object.values(arguments).reduce((a,b)=>a*b,1);   
}


console.log(multiplyAll(3,4,5,6,9));

// immediately invoked function: 선언과 동시에 즉시 실행하는 함수
(function(x,y){
    console.log(x*y);
})(4,5)

console.log(typeof multiply); // function
console.log(multiply instanceof Object); // 오브젝트냐(함수냐)? true

