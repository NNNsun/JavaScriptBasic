/**
 * Callback
 */

function waitAndRun() {
    setTimeout(() => {
        console.log('끝');
    }, 2000);
}
// waitAndRun();
function waitAndRun2() {
    setTimeout(
        () => {
            console.log('1번 콜백 끝');
             setTimeout(
                () => {
                     console.log('2번 콜백 끝');
                      setTimeout(
                    () => {
                        console.log('3번 콜백 끝');
                    } ,2000
                     );
                 } ,2000
            );
             } ,2000
    );
}
// waitAndRun2();
/**
 * Promise
 */

// const timeoutPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('완료');
//     }, 2000);
// });
// timeoutPromise.then((res) => {
//     console.log('then')
//     console.log(res);
// });


// const getPromise = (second) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('완료');
//     }, second*1000);
// });
// getPromise(1).then((res) => {
//     console.log('--fist then--');
//     console.log(res);
//     return getPromise(2);
// }).then((res) => {  // 이런식으로 체이닝 가능
//     console.log('---second then---');
//     console.log(res);
//     return getPromise(3);
// }).then((res) => {  // 이런식으로 체이닝 가능
//     console.log('---third then---');
//     console.log(res);
//     return getPromise(4);
// });

const getPromise2 = (second) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // if (xxx) {
        // resolve('완료');
        // } else {
        // reject('에러');
        // }
    }, second*1000);
});
getPromise2(3).then((res) => {
    console.log('--fist then--');
    console.log(res);
}).catch((res) => {
    console.log('--fist catch--');
    console.log(res);
}).finally((res) => {
    console.log('--fist finally--');
    console.log(res);
});

Promise.all([ // => 동시에 실행
    getPromise2(1),
    getPromise2(2),
    getPromise2(3),
]).then((res) => { // 가장 느린 함수대로 반환
    console.log(res);
});
