/**
 * 배열 타입 (Array Types) 예제
 * 
 * TypeScript에서 배열을 다루는 방법을 학습합니다.
 */

// 1. 기본 배열 타입
let stringArray: string[] = ["apple", "banana", "cherry"];
let numberArray: number[] = [1, 2, 3, 4, 5];
let booleanArray: boolean[] = [true, false, true];

console.log("=== 기본 배열 타입 예제 ===");
console.log("stringArray:", stringArray);
console.log("numberArray:", numberArray);
console.log("booleanArray:", booleanArray);
console.log();

// 2. 제네릭 배열 타입 (Array<T>)
let genericStringArray: Array<string> = ["red", "green", "blue"];
let genericNumberArray: Array<number> = [10, 20, 30, 40];
let genericBooleanArray: Array<boolean> = [false, true, false];

console.log("=== 제네릭 배열 타입 예제 ===");
console.log("genericStringArray:", genericStringArray);
console.log("genericNumberArray:", genericNumberArray);
console.log("genericBooleanArray:", genericBooleanArray);
console.log();

// 3. 읽기 전용 배열 (ReadonlyArray)
let readonlyArray: ReadonlyArray<string> = ["readonly", "array"];
// readonlyArray[0] = "modified"; // 컴파일 에러: 읽기 전용

console.log("=== 읽기 전용 배열 예제 ===");
console.log("readonlyArray:", readonlyArray);
console.log("readonlyArray[0]:", readonlyArray[0]);
console.log();

// 4. 유니온 타입 배열
let mixedArray: (string | number)[] = ["hello", 42, "world", 100];
let unionArray: Array<string | number> = ["mixed", 123, "types"];

console.log("=== 유니온 타입 배열 예제 ===");
console.log("mixedArray:", mixedArray);
console.log("unionArray:", unionArray);
console.log();

// 5. 객체 배열
interface Person {
  name: string;
  age: number;
}

let personArray: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

console.log("=== 객체 배열 예제 ===");
console.log("personArray:", personArray);
console.log("첫 번째 사람:", personArray[0]);
console.log();

// 6. 2차원 배열 (배열의 배열)
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let stringMatrix: Array<Array<string>> = [
  ["a", "b", "c"],
  ["d", "e", "f"]
];

console.log("=== 2차원 배열 예제 ===");
console.log("matrix:", matrix);
console.log("matrix[0][1]:", matrix[0]?.[1]);
console.log("stringMatrix:", stringMatrix);
console.log();

// 7. 배열 메서드와 타입 안전성
let numbers: number[] = [1, 2, 3, 4, 5];

// map 메서드
let doubledNumbers = numbers.map(n => n * 2);
console.log("=== 배열 메서드 예제 ===");
console.log("원본 배열:", numbers);
console.log("2배된 배열:", doubledNumbers);

// filter 메서드
let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("짝수만:", evenNumbers);

// reduce 메서드
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("합계:", sum);
console.log();

// 8. 빈 배열 초기화
let emptyStringArray: string[] = [];
let emptyNumberArray: number[] = [];

// 빈 배열에 요소 추가
emptyStringArray.push("first");
emptyStringArray.push("second");

emptyNumberArray.push(1);
emptyNumberArray.push(2);

console.log("=== 빈 배열 초기화 예제 ===");
console.log("emptyStringArray:", emptyStringArray);
console.log("emptyNumberArray:", emptyNumberArray);
console.log();

// 9. 배열 길이와 인덱스
let fruits: string[] = ["apple", "banana", "orange"];
console.log("=== 배열 길이와 인덱스 예제 ===");
console.log("fruits 배열 길이:", fruits.length);
console.log("첫 번째 요소:", fruits[0]);
console.log("마지막 요소:", fruits[fruits.length - 1]);
console.log();

export {
  stringArray,
  numberArray,
  personArray,
  matrix,
  numbers
};
