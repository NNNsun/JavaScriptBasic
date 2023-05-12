/**
 *  Async / Await
 */

const getPromise = (seconds) => new Promise((resolve, reject) => { // promise에서만 비동기 사용 가능
    setTimeout(() => {
        resolve('완료');
        reject('에러');
    }, seconds * 1000);
});
async function runner() { // 비동기 코드
    try
    {
          const result1 = await getPromise(1);
         console.log(result1);
        const result2=await getPromise(2);
         console.log(result2);
           const result3=await getPromise(3);
         console.log(result3);
          const result4=await getPromise(4);
        console.log(result4);
    } catch (e){
        console.log(e);
    } finally {
        console.log("자바스크립트 문법 끝!!");
        
    }
}
runner();