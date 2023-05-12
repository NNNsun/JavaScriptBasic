/**
 * Async theory
 */
function longWork() {
    const now = new Date();
    /**
     *  milliseconds singe epoch
     * 1970년 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을
     * 밀리초로 반환한다.
     */
    const milliseconds = now.getTime();
    const afterTwoSeconds = milliseconds + 2 * 1000;
    while (new Date().getTime() < afterTwoSeconds) {
        // 2초동안 걸리는 작업
    }
    console.log('완료');
 
}
// console.log('Hello');
// longWork() // (2초) 완료
// console.log('World');

function longWork() {
    setTimeout(() => { 
        console.log("완료");
    },2000)
} // 비동기
console.log('Hello') // Call Stack
longWork() // Task Queue,[Event Loop]
console.log('World');
