/**
 * Array Functions
 */

let iveMembers=[
    '안유진',
    '레이',
    '장원영',
    '가을',
    '이서',
    '리즈'
]

console.log(iveMembers); // [ '안유진', '레이', '장원영', '가을', '이서', '리즈' ]
// push(): 마지막 인덱스에 아이템 추가, array 직접 변경
const result =iveMembers.push('코드팩토리'); // [ '안유진', '레이', '장원영', '가을', '이서', '리즈', '코드팩토리' ] 
console.log(result); // return 7
console.log(iveMembers.push('코드팩토리')); // return 8 == length+1

console.log('------------------------------------');
// pop
console.log(iveMembers.pop()); // 코드팩토리
console.log(iveMembers); 

console.log('------------------------------------');
// shift()

console.log(iveMembers.shift()); // 안유진, [0]을 pop
console.log(iveMembers);

// unshift()
console.log(iveMembers.unshift('안유진')); // [0]에 안유진 추가
console.log(iveMembers);
console.log('------------------------------------');
// splice()
console.log(iveMembers.splice(0,3));
console.log(iveMembers);

iveMembers=[
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]

console.log(iveMembers);
// concat(): 원래 array가 변경되지않음
console.log(iveMembers.concat('코드팩토리')); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서', '코드팩토리' ]
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
// slice(): 원래 array가 변경되지않음
console.log(iveMembers.slice(0,3)); // [ '안유진', '가을', '레이' ]
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

// spread operator: 펼치기
let iveMembers2 = [
    ...iveMembers,
]; // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log(iveMembers2);

console.log('------------------------------------');

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers); // true

console.log([
    ...iveMembers,
]===iveMembers) // false, spread operator로 펼치면 완전히 다른 array가 탄생한다.

// join(): array -> String으로 엮을때 사용
console.log(iveMembers.join()); // (,)를 기준으로 합침(String): 안유진,가을,레이,장원영,리즈,이서
console.log(iveMembers.join('/')); // 안유진/가을/레이/장원영/리즈/이서

// sort(): 원래 array변경
// 오름차순
iveMembers.sort();
console.log(iveMembers); // [ '가을', '레이', '리즈', '안유진', '이서', '장원영' ]
// 내림차순
console.log(iveMembers.reverse()); // [ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]

let numbers = [
    1, 9, 7, 5, 3,
];
console.log(numbers);

/**
 * a, b를 비교했을때
 * 1) a를 b 보다 나중에 정렬하려면(뒤에 두려면) 0보다 큰 숫자를 반환
 * 2) a를 b 보다 먼저 정렬하려면(앞에 두려면) 0보다 작은 숫자를 반환
 * 3) 원래 순서를 그대로 두려면 0을 반환
 */

numbers.sort((a, b) => {
    return a > b ? 1 : -1; // 양수 === true => 오름차순, 음수 === true => 내림차순
});
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1); // 내림차순
console.log(numbers);

console.log('------------------------------------');

// map(): 모든 인덱스의 값을 순회하면서 화살표 이후 상태로 변환, 새로운 array반환(기존 array 값은 변하지않음)
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`)); // [ '아이브: 장원영', '아이브: 이서', '아이브: 안유진', '아이브: 리즈', '아이브: 레이', '아이브: 가을' ]

console.log(iveMembers.map((x)=> {
    if (x === '안유진') {
        return `아이브: ${x}`;
    } else {
        return x;
    }
}))

console.log(iveMembers);

// filter(): true, false 구분
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => x % 2 == 0)); // [ 8, 6 ]

// find(): 해당되는 가장 첫번째 값
console.log(numbers.find((x) => x % 2 == 0)); // 8 array가 아닌 해당되는 아이템만 반환

// findIndex(): 해당되는 가장 첫번째 값의 index
console.log(numbers.findIndex((x) => x % 2 === 0)); // 1

// reduce(): 함수의 return된 값을 다시 p에 넣음, 가장 처음엔 이전값이 존재하지않음 => ( ,x)값으로 초기화
console.log(numbers.reduce((p, n) => p + n, 0)); // 25, pre(이전)+next(다음) 피보나치 느낌!

