//JS 에서의 true, false
console.log("a" == "b");
console.log("a" == "a");

let num = 3;

//Java와 같은 경우는 if() 문에서
//single eq(=) 를 사용하면 syntax error가 발생한다
// if(num=5){}는 오류가 발생함
// 자바의 경우에는 싱글 sq를 사용하면 오류가난다
// 하지만 다음과 같은 코드는 논리적으로 문제가 없다
//if(num = method())==3)
//while ((reader = buffer.readLi()) != null)
// while (true){
//     redear = buffer.readLine();
//     if(reader == null)break;
// }
//js에서는 다음과같은 코드가 논리적으로는 문제가 될수 있지만 문법적으로는 정당하다
//  if ((num = 5) == true)
if ((num = 5)) {
  console.log("같은값");
}
// 이렇게 되버리는 이유
// js에서는 숫자 0,false,null, undefind(숫자아님), NaN를 제외한
// 모든것은 boolean에서 true로 취급된다
//if(값)  <<- 명령을 사용할때 값위에 나열한 타입 데이터가 나타나면 논리적으로 false로 인식되고
//그외에는 무조건  true이다.
if (0) {
  console.log(true);
} else {
  console.log(false);
}
if (null) {
} else {
  console.log(false);
}
let num1 = 3;
let num2 = "3";
/*
<동등연산자>
두값이 같은지 비교를 하는 연산자
주로 if, while등에서 사용
자동으로 형변환이 일어난다 숫자 == 문자 를 비교하면 문자열 을 자동으로 숫자 0으로 형변환해버린다 .
문자열과 숫자의 비교지만 내용만 같으면 같은것으로 true값이 된다 
동등 연산자 ( == )
일치 연산자 ( === )

<일치연산자>
무조건 자신의 데이터타입을(type)을 유지하면서 비교
 문자열 === 숫자열 을 비교하면 
 1. 두값의 타입이 일치하는지 비교
    같으면 true, 다르면 무조건 false
 2. 두값의 데이터타입이 같으면
 실제값을 비교하여 같으면 true, 다르면 false 

*/

console.log(num1 == num2);
console.log(num1 === num2);

console.log("" == "0"); //false 문자열 "" 와 문자열 "0" 비교함
console.log("" == 0); //ture  문자열 "" 와 숫자열 0 을 비교함( " " 형변환이 일어남)

console.log("true" == true); //false
console.log("flase" == false); //false

console.log("0" == true); //false
console.log("0" == false); //true

console.log(0 == true); //false
console.log(0 == false); //true

//숫자 0, null, undifinde 등은 if에서 false로 인식을 하지만 동등연산자를 사용할때는 주의해야한다
console.log(null == undefined); //true
console.log(null == false); //false
console.log(undefined == false); //false
console.log(null == 0); //false
console.log(undefined == 0); //false
//어떤 변수에 담긴 값이 null인가 확인하고싶을때
let un1 = null;
if (un1) {
  //논리적 오류 없음
}
if (un1) {
  console.log(true); // 논리적 오류 없음
} else {
  console.log(false); //논리적오류
}
/*
일반적으로 숫자형, 문자형 데이터가 같은지(일치하는지) 알아보고싶을때는 
일치연산자를 사용하는 것이 좋다
*/
console.log("3" === 3); //false
// parseInt() 문자열형 숫자를 실제 숫자로 변환하는 함수
// type이 다른 두 값을 비교하고자 할때는
// 코드가 다소 복잡해지지만
// 강제 형변환을 하고 일치연산자로 비교하는 것이 논리적 오류를 막을 수 있다.
console.log(parseInt("3") === 3); //true
//isNaN(값)
//값을 숫자로 변환할수 있냐ㅐ ?
//변환할수 있으면 false
//변환할수 없으면 ture
console.log(isNaN("3")); //false
console.log(isNaN(3)); //false
if (isNaN("3")) {
  console.log(true);
} else {
  console.log(false); //출력됨
}
//"A"를 숫자로 바꿀수 없는가 물어보는것
console.log(isNaN("A")); //true
console.log("A" == NaN); //flase
