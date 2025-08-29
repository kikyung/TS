/**
 * 특수 타입 (Special Types) 예제
 * 
 * TypeScript의 특수 타입들을 학습합니다:
 * - any: 모든 타입 허용 (사용 지양)
 * - unknown: 타입 안전한 any
 * - void: 반환값이 없는 함수
 * - never: 절대 발생하지 않는 값
 */

// 1. Any 타입 (사용 지양)
let anyValue: any = "문자열";
anyValue = 42;
anyValue = true;
anyValue = [1, 2, 3];
anyValue = { name: "John" };

console.log("=== Any 타입 예제 ===");
console.log("anyValue (문자열):", anyValue);
console.log("anyValue (숫자):", anyValue);
console.log("anyValue (불린):", anyValue);
console.log("anyValue (배열):", anyValue);
console.log("anyValue (객체):", anyValue);
console.log();

// any 타입의 위험성
let anyArray: any[] = [1, "hello", true, { key: "value" }];
anyArray.forEach(item => {
  // 타입 체크 없이 사용하면 런타임 에러 가능성
  console.log("anyArray item:", item);
  // console.log(item.toUpperCase()); // 런타임 에러 가능
});
console.log();

// 2. Unknown 타입 (타입 안전한 any)
let unknownValue: unknown = "안전한 문자열";
unknownValue = 42;
unknownValue = true;

console.log("=== Unknown 타입 예제 ===");
console.log("unknownValue:", unknownValue);

// unknown 타입은 타입 가드를 통해 안전하게 사용
if (typeof unknownValue === "string") {
  console.log("문자열 길이:", unknownValue.length);
  console.log("대문자 변환:", unknownValue.toUpperCase());
} else if (typeof unknownValue === "number") {
  console.log("숫자 제곱:", unknownValue ** 2);
} else if (typeof unknownValue === "boolean") {
  console.log("불린 반전:", !unknownValue);
}
console.log();

// 3. Void 타입
function logMessage(message: string): void {
  console.log(`로그: ${message}`);
}

function doNothing(): void {
  // 아무것도 반환하지 않음
}

let voidVariable: void = undefined; // void는 undefined만 할당 가능

console.log("=== Void 타입 예제 ===");
logMessage("안녕하세요!");
doNothing();
console.log("voidVariable:", voidVariable);
console.log();

// 4. Never 타입
function throwError(message: string): never {
  throw new Error(message);
}

// 사용되지 않는 함수는 주석 처리
// function infiniteLoop(): never {
//   while (true) {
//     // 무한 루프
//   }
// }

function processValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value.toString();
  } else {
    // 이 부분은 절대 실행되지 않음 (never 타입)
    const exhaustiveCheck: never = value;
    throw new Error(`Unexpected value: ${exhaustiveCheck}`);
  }
}

console.log("=== Never 타입 예제 ===");
try {
  // throwError("에러 발생!");
} catch (error) {
  console.log("에러 캐치됨:", error);
}

console.log("processValue('hello'):", processValue("hello"));
console.log("processValue(42):", processValue(42));
console.log();

// 5. Any vs Unknown 비교
function processAny(value: any): void {
  // any는 타입 체크 없이 사용 가능 (위험)
  if (typeof value === "string") {
    console.log("Any 문자열 처리:", value.toUpperCase());
  } else {
    console.log("Any 다른 타입:", value);
  }
}

function processUnknown(value: unknown): void {
  // unknown은 타입 체크 후 사용해야 함 (안전)
  if (typeof value === "string") {
    console.log("Unknown 문자열 처리:", value.toUpperCase());
  } else {
    console.log("Unknown 다른 타입:", value);
  }
}

console.log("=== Any vs Unknown 비교 예제 ===");
processAny("hello");
processAny(42); // 안전하게 처리됨

processUnknown("hello");
processUnknown(42); // 안전하게 처리됨
console.log();

// 6. 실제 사용 사례
// API 응답 처리
type ApiResponse = {
  success: boolean;
  data?: unknown;
  error?: string;
};

function handleApiResponse(response: ApiResponse): void {
  if (response.success && response.data) {
    // 데이터 타입을 확인하고 안전하게 처리
    if (typeof response.data === "object" && response.data !== null) {
      console.log("API 응답 데이터:", response.data);
    } else {
      console.log("API 응답 데이터:", response.data);
    }
  } else if (response.error) {
    console.error("API 에러:", response.error);
  }
}

console.log("=== 실제 사용 사례 예제 ===");
const successResponse: ApiResponse = {
  success: true,
  data: { id: 1, name: "User" }
};

const errorResponse: ApiResponse = {
  success: false,
  error: "사용자를 찾을 수 없습니다"
};

handleApiResponse(successResponse);
handleApiResponse(errorResponse);
console.log();

// 7. 타입 가드 함수
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

function isArray(value: unknown): value is any[] {
  return Array.isArray(value);
}

function processValueSafely(value: unknown): void {
  if (isString(value)) {
    console.log("문자열 처리:", value.toUpperCase());
  } else if (isNumber(value)) {
    console.log("숫자 처리:", value.toFixed(2));
  } else if (isArray(value)) {
    console.log("배열 처리:", value.length);
  } else {
    console.log("기타 타입:", value);
  }
}

console.log("=== 타입 가드 함수 예제 ===");
processValueSafely("hello world");
processValueSafely(3.14159);
processValueSafely([1, 2, 3, 4, 5]);
processValueSafely(true);
console.log();

export {
  anyValue,
  unknownValue,
  logMessage,
  throwError,
  processValue,
  processValueSafely
};
