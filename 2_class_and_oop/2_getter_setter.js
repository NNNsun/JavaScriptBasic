/**
 * Getter and Setter
 */

class IdolModel{
    name;
    year;
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때 
     */
    get nameAndYear() {
        return `${this.name}: ${this.year}`;
    }
    // setter는 무조건 파라미터를 하나만! 받음, 파라미터 무조건 필요
    set setName(name) {
        this.name = name;
    }
}
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear) // 함수처럼 정의를 했지만 get 키워드를 사용했기때문에 변수처럼 사용, nameAndYear()로 사용하지않음(error)
yuJin.setName = '장원영' //setter를 사용함, private때를 위해 사용
console.log(yuJin);

class IdolModel2{
    #name; // #: private 값 정의, ECMAScript ES7 엔진이상 사용 가능
    year;
    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }
    get name() {
        return this.#name;
    }
    // 현대사회에선 사용하지 않음
    set name(name) {
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진2', 2003);
console.log(yuJin2); // IdolModel2 { year: 2003 }
console.log(yuJin2.name); // getter 사용
yuJin2.name = '코드팩토리';
console.log(yuJin2.name);
