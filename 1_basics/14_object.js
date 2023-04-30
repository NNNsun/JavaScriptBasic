/**
 *  Object 객체
 */

// key : value pair
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function () {
        return `${this.name}이 춤을 춥니다.`; // this: 현재 객체를 가리킴 
    }
}
console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';
console.log(yuJin[key]);
console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';
const groupKey = '안유진';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey]: nameValue, // [key]
    [groupKey]: groupValue,
    dance: function () {
        return `${this.name}이 춤을 춥니다.`
    }
}
console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드팩토리';
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2); // 새로운 프로퍼티(속성) 생성: englishName: 'An Yu Jin'

/**
 * 객체의 특징
 * 1) const로 선언할 경우 객체 자체를 변경 할수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */

const wonYoung = {
    name: '장원영',
    group:'아이브',
}
console.log(wonYoung); 
// wonYoung = {}; [const] wonYoung => 값을 바꿀수없음

wonYoung['group'] = '코드팩토리';
console.log(wonYoung);

/**
 * 모든 키 값 다 가져오기
 */
console.log(Object.keys(wonYoung)) // [ 'name', 'group' ] array로 반환됨
/**
 * 모든 벨류 값 다 가져오기
 */
console.log(Object.values(wonYoung)) // [ '장원영', '코드팩토리' ] array로 반환됨

// 최근 생긴 문법
const name = '안유진';
const yuJin3 = {
    name,
};
console.log(yuJin3); // { name: '안유진' }