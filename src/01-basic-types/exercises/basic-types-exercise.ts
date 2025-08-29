/**
 * 기본 타입 (Basic Types) 연습 문제
 * 
 * 아래 문제들을 해결하여 기본 타입에 대한 이해를 확인하세요.
 */

// 연습 문제 1: 변수 타입 지정
// 아래 변수들에 적절한 타입을 지정하세요

// TODO: userName 변수에 적절한 타입을 지정하세요
let userName: string = "홍길동";

// TODO: userAge 변수에 적절한 타입을 지정하세요
let userAge: number = 25;

// TODO: isActive 변수에 적절한 타입을 지정하세요
let isActive: boolean = true;

// TODO: userHobbies 변수에 적절한 타입을 지정하세요
let userHobbies: string[] = ["독서", "운동", "음악"];

// TODO: userCoordinates 변수에 적절한 타입을 지정하세요
let userCoordinates: [number, number] = [37.5665, 126.9780];

// 연습 문제 2: 함수 타입 지정
// 아래 함수들에 적절한 매개변수와 반환 타입을 지정하세요

// TODO: calculateArea 함수의 매개변수와 반환 타입을 지정하세요
function calculateArea(width: number, height: number): number {
  return width * height;
}

// TODO: formatUserInfo 함수의 매개변수와 반환 타입을 지정하세요
function formatUserInfo(name: string, age: number): string {
  return `${name} (${age}세)`;
}

// TODO: validateEmail 함수의 매개변수와 반환 타입을 지정하세요
function validateEmail(email: string): boolean {
  return email.includes("@");
}

// 연습 문제 3: 열거형 정의
// TODO: UserRole 열거형을 정의하세요 (Guest, User, Admin)
enum UserRole {
  Guest = "GUEST",
  User = "USER",
  Admin = "ADMIN"
}

// TODO: OrderStatus 열거형을 정의하세요 (Pending, Processing, Completed, Cancelled)
enum OrderStatus {
  Pending = "PENDING",
  Processing = "PROCESSING",
  Completed = "COMPLETED",
  Cancelled = "CANCELLED"
}

// 연습 문제 4: 인터페이스 정의
// TODO: User 인터페이스를 정의하세요 (id, name, email, role 속성 포함)
interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

// 연습 문제 5: 타입 가드 함수
// TODO: isString 타입 가드 함수를 작성하세요
function isString(value: unknown): value is string {
  return typeof value === "string";
}

// TODO: isNumber 타입 가드 함수를 작성하세요
function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

// 연습 문제 6: 실제 사용 사례
// TODO: processUserData 함수를 작성하세요 (매개변수: unknown, 반환: string)
function processUserData(data: unknown): string {
  if (isString(data)) {
    return `문자열 데이터: ${data.toUpperCase()}`;
  } else if (isNumber(data)) {
    return `숫자 데이터: ${data.toFixed(2)}`;
  } else {
    return "알 수 없는 데이터 타입";
  }
}

// 연습 문제 7: 복합 타입
// TODO: ApiResponse 타입을 정의하세요 (success, data, error 속성 포함)
type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

// 연습 문제 8: 유니온 타입
// TODO: Status 타입을 정의하세요 (string | number | boolean)
type Status = string | number | boolean;

// 연습 문제 9: 리터럴 타입
// TODO: Direction 타입을 정의하세요 ("north" | "south" | "east" | "west")
type Direction = "north" | "south" | "east" | "west";

// 연습 문제 10: 조건부 타입
// TODO: NonNullable 타입을 정의하세요 (T에서 null과 undefined를 제거)
type NonNullable<T> = T extends null | undefined ? never : T;

// 테스트 함수
function runBasicTypesExercise(): void {
  console.log("=== 기본 타입 연습 문제 실행 ===");
  
  // 문제 1 테스트
  console.log("문제 1 - 변수 타입 지정:");
  console.log("userName:", userName);
  console.log("userAge:", userAge);
  console.log("isActive:", isActive);
  console.log("userHobbies:", userHobbies);
  console.log("userCoordinates:", userCoordinates);
  console.log();
  
  // 문제 2 테스트
  console.log("문제 2 - 함수 타입 지정:");
  console.log("calculateArea(5, 3):", calculateArea(5, 3));
  console.log("formatUserInfo('김철수', 30):", formatUserInfo('김철수', 30));
  console.log("validateEmail('test@example.com'):", validateEmail('test@example.com'));
  console.log();
  
  // 문제 3 테스트
  console.log("문제 3 - 열거형 정의:");
  console.log("UserRole.Admin:", UserRole.Admin);
  console.log("OrderStatus.Pending:", OrderStatus.Pending);
  console.log();
  
  // 문제 4 테스트
  const user: User = {
    id: 1,
    name: "홍길동",
    email: "hong@example.com",
    role: UserRole.User
  };
  console.log("문제 4 - 인터페이스 정의:");
  console.log("user:", user);
  console.log();
  
  // 문제 5-6 테스트
  console.log("문제 5-6 - 타입 가드와 실제 사용 사례:");
  console.log("processUserData('hello'):", processUserData('hello'));
  console.log("processUserData(42):", processUserData(42));
  console.log("processUserData(true):", processUserData(true));
  console.log();
  
  // 문제 7-10 테스트
  console.log("문제 7-10 - 고급 타입:");
  const apiResponse: ApiResponse<User> = {
    success: true,
    data: user
  };
  console.log("ApiResponse:", apiResponse);
  
  const direction: Direction = "north";
  console.log("Direction:", direction);
  
  type NonNullString = NonNullable<string | null | undefined>;
  console.log("NonNullable 타입 예시 완료");
  console.log();
  
  console.log("🎉 모든 연습 문제 완료!");
}

// 연습 문제 실행
runBasicTypesExercise();

export {
  User,
  UserRole,
  OrderStatus,
  ApiResponse,
  Direction,
  NonNullable,
  processUserData
};
