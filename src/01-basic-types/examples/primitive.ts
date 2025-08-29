/**
 * 기본 타입 (Primitive Types) 예제
 * 
 * TypeScript의 기본 타입들을 살펴봅니다.
 */

// 1. String 타입
let userName: string = "홍길동";
let userEmail: string = "hong@example.com";
let message: string = `안녕하세요, ${userName}님!`;

console.log("=== String 타입 예제 ===");
console.log("userName:", userName);
console.log("userEmail:", userEmail);
console.log("message:", message);
console.log();

// 2. Number 타입
let age: number = 25;
let height: number = 175.5;
let temperature: number = -5;
let infinity: number = Infinity;
let notANumber: number = NaN;

console.log("=== Number 타입 예제 ===");
console.log("age:", age);
console.log("height:", height);
console.log("temperature:", temperature);
console.log("infinity:", infinity);
console.log("notANumber:", notANumber);
console.log();

// 3. Boolean 타입
let isActive: boolean = true;
let isLoggedIn: boolean = false;
let hasPermission: boolean = true;

console.log("=== Boolean 타입 예제 ===");
console.log("isActive:", isActive);
console.log("isLoggedIn:", isLoggedIn);
console.log("hasPermission:", hasPermission);
console.log();

// 4. Null과 Undefined 타입
let nullableValue: null = null;
let undefinedValue: undefined = undefined;

// 주의: null과 undefined는 다른 타입입니다
console.log("=== Null과 Undefined 타입 예제 ===");
console.log("nullableValue:", nullableValue);
console.log("undefinedValue:", undefinedValue);
console.log("null === undefined:", null === undefined);
console.log("null == undefined:", null == undefined);
console.log();

// 5. 타입 추론 (Type Inference)
// TypeScript는 초기값을 보고 타입을 자동으로 추론합니다
let inferredString = "자동으로 string 타입으로 추론됨";
let inferredNumber = 42;
let inferredBoolean = true;

console.log("=== 타입 추론 예제 ===");
console.log("inferredString 타입:", typeof inferredString);
console.log("inferredNumber 타입:", typeof inferredNumber);
console.log("inferredBoolean 타입:", typeof inferredBoolean);
console.log();

// 6. 타입 어노테이션 vs 타입 추론
// 명시적 타입 어노테이션
let explicitString: string = "명시적으로 string 타입 지정";
let explicitNumber: number = 100;

// 타입 추론 (권장)
let implicitString = "타입 추론으로 string 타입";
let implicitNumber = 200;

console.log("=== 타입 어노테이션 vs 타입 추론 ===");
console.log("explicitString:", explicitString);
console.log("explicitNumber:", explicitNumber);
console.log("implicitString:", implicitString);
console.log("implicitNumber:", implicitNumber);
console.log();

// 7. 타입 에러 예시 (주석 처리)
/*
// 아래 코드들은 컴파일 에러가 발생합니다

// string 타입에 number 할당
// let errorString: string = 123;

// number 타입에 string 할당
// let errorNumber: number = "hello";

// boolean 타입에 string 할당
// let errorBoolean: boolean = "true";
*/

export {
  userName,
  age,
  isActive,
  nullableValue,
  undefinedValue
};
