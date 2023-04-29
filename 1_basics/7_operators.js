/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(10%3);
console.log('------------');
console.log(10*(10+10));

/**
 * 증가와 감소
 */
let number =1;
number ++;
console.log(number);
number--;
console.log(number);
console.log('------------');

/**
 * 연산자의 위치
 */
let result=1;
console.log(result); // 1 
result=number++; // 1, 2
console.log(result, number);

result=number--; // 2 1
console.log(result, number);

result = ++ number;
console.log(result, number); // 대부분 뒤에 연산자를 쓴다

let sample ='99';
console.log(+sample); // number

sample ='안유진';
// NaN -> Not a Number
sample='99';
console.log(-sample); //number

/**
 * 할당 연산자(assignment operator)
 */

number =100;
console.log(number);
number+=10;
console.log(number);

/**
 *  비교 연산자
 *  1) 값의 비교
 *  2) 값과 타입의 비교
 */

console.log(5==5); // true
console.log(5=='5'); // true
console.log(0==''); // true
console.log(true=='1'); // true
console.log(false=='0'); // true

// '='세개만 사용
console.log(5===5); //true
console.log(5==='5'); // false
console.log(0===''); // false
console.log(true==='1');  // false
console.log(false==='0'); // false
console.log('------------');
console.log(5!==5); //false
console.log(5!=='5'); // true
console.log(0!==''); // true
console.log(true!=='1');  // true
console.log(false!=='0'); // true


console.log('------------');
/**
 * 대소 관계 비교 연산자
 */
console.log(100>1); // true
console.log(100>=1); // true
console.log(100<1); // false

/**
 * 삼항 조건 연산자 (ternary operation)
 */
console.log(10>0 ? '10이 0보다 크다': '10이 0보다 작다');
console.log('------------');

/**
 * 논리 연산자
 * 1) &&
 * 2) ||
 */

// && 조건은 모두 true여야 true를 반환한다.
console.log(true&&true); // true
console.log(true&&false); // false
console.log('------------');

// ||는 하나만 true여도  true를 반환한다.
console.log(true||false); // true
console.log(true||true); // true
console.log(false||true); // true
console.log(false||false); // false
console.log('------------');

/**
 *  단축평가(short circuit evaluation)
 *  
 *  &&를 사용했을때 좌측이 true면 우측 값 반환
 *  &&를 사용했을때 좌측이 false면 좌측 값 반환
 *  ||를 사용했을때 좌측이 true면 좌측값 반환
 *  ||를 사용했을때 좌측이 false면 우측값 반환
 */

console.log(true||'아이브'); // true
console.log(false||'아이브'); // 아이브
console.log(true&&'아이브'); // 아이브
console.log(false&&'아이브'); // false
console.log('------------');

/**
 * 지수 연산자
 */
console.log(2**3);
console.log(10**3);

/**
 * null 연산자
 */
let name;
console.log(name); // undefined
name =name?? '코드팩토리'; // 좌측값이 Null이나 undefined 일때, 우측값을 반환하는 것 -> name에 저장됨
console.log(name); // 코드팩토리

name =name??'아이브';
console.log(name); // 코드팩토리

let name2;
name2 ??='코드팩토리'; // 좌측값이 Null이나 undefined 일때, 우측값을 반환하는 것 -> name에 저장됨
console.log(name); // 코드팩토리
