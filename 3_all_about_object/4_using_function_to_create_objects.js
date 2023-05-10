/**
 * Using function to create objects
 */

function IdolModel(name, year) {
    console.log(new.target); // [Function: IdolModel]
    if (!new.target) {
        return new IdolModel(name, year);
    }
    this.name = name;
    this.year = year;

    this.dance = function () {
        return `${this.name}이 춤을 춥니다.`;
    }
}
const yuJin = new IdolModel('안유진', 2003); // new로 this가 어디에 맵핑이되는지 결정해줌(현재: IdolModel)
console.log(yuJin);
console.log(yuJin.dance());
const yuJin2 =  IdolModel('안유진', 2003); // 함수형으로 실행하게 됨
console.log(yuJin2); // undefined
console.log(global.name); // 안유진: new를 사용하지않으면 this 키워드가 global에 붙게된다 - 하지마라!!

const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};
// const yuJin3 = new IdolModelArrow('안유진', 2003); // TypeError: IdolModelArrow is not a constructor