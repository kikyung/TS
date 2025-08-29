/**
 * 기본 함수 타입 (Basic Function Types) 예제
 * 
 * TypeScript에서 함수의 기본적인 타입 정의 방법을 학습합니다.
 */

// 1. 기본 함수 타입 정의
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return `안녕하세요, ${name}님!`;
}

function logMessage(message: string): void {
  console.log(`로그: ${message}`);
}

console.log("=== 기본 함수 타입 예제 ===");
console.log("add(5, 3):", add(5, 3));
console.log("greet('홍길동'):", greet('홍길동'));
logMessage('테스트 메시지');
console.log();

// 2. 화살표 함수 타입 정의
const multiply = (a: number, b: number): number => a * b;
const divide = (a: number, b: number): number => a / b;
const isEven = (num: number): boolean => num % 2 === 0;

console.log("=== 화살표 함수 타입 예제 ===");
console.log("multiply(4, 6):", multiply(4, 6));
console.log("divide(10, 2):", divide(10, 2));
console.log("isEven(8):", isEven(8));
console.log("isEven(7):", isEven(7));
console.log();

// 3. 선택적 매개변수 (Optional Parameters)
function createUser(name: string, email: string, age?: number): object {
  const user: any = { name, email };
  if (age !== undefined) {
    user.age = age;
  }
  return user;
}

function sendMessage(to: string, message: string, cc?: string, bcc?: string): void {
  console.log(`메시지 전송: ${to}`);
  console.log(`내용: ${message}`);
  if (cc) console.log(`참조: ${cc}`);
  if (bcc) console.log(`숨은참조: ${bcc}`);
}

console.log("=== 선택적 매개변수 예제 ===");
console.log("createUser('Alice', 'alice@example.com'):", createUser('Alice', 'alice@example.com'));
console.log("createUser('Bob', 'bob@example.com', 25):", createUser('Bob', 'bob@example.com', 25));
sendMessage('user@example.com', '안녕하세요!');
sendMessage('user@example.com', '안녕하세요!', 'cc@example.com', 'bcc@example.com');
console.log();

// 4. 기본값 매개변수 (Default Parameters)
function createGreeting(name: string, greeting: string = "안녕하세요"): string {
  return `${greeting}, ${name}님!`;
}

function calculateDiscount(price: number, discountRate: number = 0.1): number {
  return price * (1 - discountRate);
}

console.log("=== 기본값 매개변수 예제 ===");
console.log("createGreeting('홍길동'):", createGreeting('홍길동'));
console.log("createGreeting('김철수', '좋은 아침'):", createGreeting('김철수', '좋은 아침'));
console.log("calculateDiscount(1000):", calculateDiscount(1000));
console.log("calculateDiscount(1000, 0.2):", calculateDiscount(1000, 0.2));
console.log();

// 5. 나머지 매개변수 (Rest Parameters)
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

function formatMessage(prefix: string, ...messages: string[]): string {
  return `${prefix}: ${messages.join(', ')}`;
}

console.log("=== 나머지 매개변수 예제 ===");
console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5));
console.log("sum(10, 20):", sum(10, 20));
console.log("formatMessage('INFO', '사용자 로그인', '데이터 로드'):", formatMessage('INFO', '사용자 로그인', '데이터 로드'));
console.log();

// 6. 유니온 타입 매개변수
function processValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toString();
  }
}

function validateInput(input: string | number | boolean): boolean {
  if (typeof input === "string") {
    return input.length > 0;
  } else if (typeof input === "number") {
    return input > 0;
  } else {
    return input === true;
  }
}

console.log("=== 유니온 타입 매개변수 예제 ===");
console.log("processValue('hello'):", processValue('hello'));
console.log("processValue(42):", processValue(42));
console.log("validateInput('test'):", validateInput('test'));
console.log("validateInput(''):", validateInput(''));
console.log("validateInput(5):", validateInput(5));
console.log("validateInput(0):", validateInput(0));
console.log("validateInput(true):", validateInput(true));
console.log("validateInput(false):", validateInput(false));
console.log();

// 7. 객체 매개변수
interface UserConfig {
  name: string;
  email: string;
  age?: number;
  preferences?: string[];
}

function createUserProfile(config: UserConfig): object {
  return {
    id: Date.now(),
    ...config,
    createdAt: new Date().toISOString()
  };
}

function updateUserSettings(
  userId: number, 
  settings: Partial<UserConfig>
): object {
  return {
    userId,
    updatedAt: new Date().toISOString(),
    ...settings
  };
}

console.log("=== 객체 매개변수 예제 ===");
const userConfig: UserConfig = {
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  preferences: ["독서", "음악"]
};

console.log("createUserProfile(userConfig):", createUserProfile(userConfig));
console.log("updateUserSettings(1, { age: 26 }):", updateUserSettings(1, { age: 26 }));
console.log();

// 8. 함수 반환 타입 추론
// TypeScript는 반환 타입을 자동으로 추론합니다
function getRandomNumber() {
  return Math.random(); // number 타입으로 추론
}

function getGreeting(name: string) {
  return `Hello, ${name}!`; // string 타입으로 추론
}

function processData(data: any) {
  if (typeof data === "string") {
    return data.length; // number 타입으로 추론
  } else {
    return "Invalid data"; // string 타입으로 추론
  }
}

console.log("=== 함수 반환 타입 추론 예제 ===");
console.log("getRandomNumber():", getRandomNumber());
console.log("getGreeting('World'):", getGreeting('World'));
console.log("processData('hello'):", processData('hello'));
console.log("processData(42):", processData(42));
console.log();

export {
  add,
  greet,
  multiply,
  createUser,
  createGreeting,
  sum,
  processValue,
  createUserProfile,
  updateUserSettings
};
