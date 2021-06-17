console.log("안녕하세요");

let arr = [];
// 비어잇는 공백 배열
arr.push("홍길동");
arr.push("이몽룡");
arr.push("홍길동");

// 배열전체내용확인하기
console.log(arr);
console.log(arr[1]);

let arrCopy = [...arr, "임꺽정"];
console.log(arrCopy);
