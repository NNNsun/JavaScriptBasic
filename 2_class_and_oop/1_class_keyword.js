/**
 *  Class key
 */
class IdolModel{
    // property를 작성하는 것은 optional이다. 하지만 무조건 정의해라!!
    name;
    year;
    // constructor: 생성자
    constructor(name,year) {
        this.name=name; // this: new 키워드를 사용해서 생성되는 인스턴스를 말함, this.name(property)=name(입력받은 값)
        this.year=year;
    }

    sayName() {
        return `안녕하세요 ${this.name} 입니다`
    }
}

const yuJin = new IdolModel('안유진',2003);
console.log(yuJin); // IdolModel { name: '안유진', year: '2003' } 객체로 나옴
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
const ray = new IdolModel('레이',2003);
const wonYoung = new IdolModel('장원영',2004);
const liz = new IdolModel('리즈',2004);
const eseo = new IdolModel('이서', 2007);

console.log(eseo.name);
console.log(eseo.sayName());

console.log(typeof IdolModel); // class === 함수
console.log(typeof eseo); // class로 생성한 것은 object이다.
