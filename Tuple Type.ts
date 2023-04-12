type TupleType = [string, number];

// 튜플 타입으로 선언
// let x: [string, number];
// 초기화
let x: TupleType = ["hi", 30];
x = ["hello", 10]; // 성공
// 잘못된 초기화
// x = [10, "hello"]; // 오류
