/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

for(let i=0;i<10;i++){
    console.log(i);
}

console.log('------------------');

// *을 이용해서 6*6의 정사각형을 출력해라
let stars='';
for(let i=0; i<6;i++){
    for(let j=0; j<6;j++){
        stars+='*'
    }
    stars+= '\n';
}
console.log(stars);
console.log('------------------');

/**
 * for...in, (인덱스,키)
 */

const yuJin ={
    name:'안유진',
    year:2003,
    group:'아이브',
}
for(let key in yuJin){
    console.log(key); 
    // name 
    // year 
    // group
}
const iveMembersArray = ['안유진','레이','가을','장원영','리즈','이서'];
for(let key in iveMembersArray){
    console.log(key) // index 값 0 1 2 3 4 5
}

/**
 * for...of (value)
 */
for(let value of iveMembersArray){
    console.log(value);
}

let number=0;
while(number<10){
    number++
}
console.log(number);

/**
 * do...while 쓰지마!
 */
number=0;
do{
    number++;
}while(number<10);
console.log(number);

/**
 * break
 */

console.log('------------------');
for(let i=0; i<10; i++){
    if(i===5){
        break;
    }
    console.log(i);
}
console.log('------------------');
number=0;
while(number<10){
    if(number===5){
        break;
    }
    number++;
    console.log(number);
}

/**
 * continue
 */
console.log('------------------');
for(let i=0; i<10; i++){
    if(i===5){
        continue; // 5만 제외
    }
    console.log(i)
}
console.log('------------------');
number=0;
while(number<10){
    number++;
    if(number===5){
        continue; // 5만 제외
    }
    console.log(number);
}