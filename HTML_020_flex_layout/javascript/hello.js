console.log("반갑습니다");
let num1 = 30;
let num2 = 40;
let sum = num1 + num2;

console.log(" 30 + 40 = ", sum);

/*
 var 키워드는 java의 public과 성질이 유사하다
 한번 선언된 변수를 다시 선언할 수 있다.
 변수의 타입도 없다.
*/

var strName = "홍길동";
var strNation = "대한민국";
//var 키워드를 선언되서 저장된 변수는 형식이 변환되는 다른값을 입력하여도 문제가없다
/*
let 
ES6이상에서 사용하는 변수선언 키워드
private 과 성질이 유사하다
한번 선언된 변수를 다시선언할수 없다

*/

strName = 100;
var strName = 99 * 100;

let nation1 = "Korea";
// nation1 = 200;
//var의 속성과 동일하게 형식에 관계없이 저장가능하다 단, 한번 선언된 변수는 값을 변경할수 없다

//배열을 선언하기

let arra = [1, 2, 3, 4, 5, 6];
//배열에서 값을 읽을때
console.log(array[0]);

let array2 = array[(0, 2, 4)];
console.log(array2);
