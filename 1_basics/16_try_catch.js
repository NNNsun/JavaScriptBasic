/**
 * try...catch
 * 
 * 1) 발생시킬때 -> 던진다고 한다. (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 한다. (catch)
 */


function runner() {
    try {
        console.log('Hello');
        throw new Error('큰문제가 생겼습니다!');
    } catch (e) {
        console.log('----catch----');
        console.log(e)
    } finally {
        // error가 나든 말든 실행
        // option 이다, 쓰든말든 상관없다.
        console.log('---finally---')
    }
   

}
runner();