/**
 * 유니온 타입 (Union Types) 예제
 * 
 * TypeScript에서 유니온 타입의 사용법을 학습합니다.
 */

// 1. 기본 유니온 타입
type StringOrNumber = string | number;
type PrimitiveType = string | number | boolean | null | undefined;

function processValue(value: StringOrNumber): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toString();
  }
}

function validateInput(input: PrimitiveType): boolean {
  if (typeof input === "string") {
    return input.length > 0;
  } else if (typeof input === "number") {
    return input > 0;
  } else if (typeof input === "boolean") {
    return input === true;
  } else {
    return false; // null 또는 undefined
  }
}

console.log("=== 기본 유니온 타입 예제 ===");
console.log("processValue('hello'):", processValue('hello'));
console.log("processValue(42):", processValue(42));
console.log("validateInput('test'):", validateInput('test'));
console.log("validateInput(''):", validateInput(''));
console.log("validateInput(5):", validateInput(5));
console.log("validateInput(0):", validateInput(0));
console.log("validateInput(true):", validateInput(true));
console.log("validateInput(false):", validateInput(false));
console.log("validateInput(null):", validateInput(null));
console.log("validateInput(undefined):", validateInput(undefined));
console.log();

// 2. 구별된 유니온 (Discriminated Unions)
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

interface Triangle {
  kind: "triangle";
  base: number;
  height: number;
}

type Shape = Square | Rectangle | Circle | Triangle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "triangle":
      return (shape.base * shape.height) / 2;
    default:
      const exhaustiveCheck: never = shape;
      throw new Error(`Unexpected shape: ${exhaustiveCheck}`);
  }
}

function perimeter(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      return 4 * shape.size;
    case "rectangle":
      return 2 * (shape.width + shape.height);
    case "circle":
      return 2 * Math.PI * shape.radius;
    case "triangle":
      // 삼각형의 둘레는 세 변의 합이지만, 여기서는 밑변과 높이만 있으므로 근사값
      return shape.base + shape.height + Math.sqrt(shape.base * shape.base + shape.height * shape.height);
    default:
      const exhaustiveCheck: never = shape;
      throw new Error(`Unexpected shape: ${exhaustiveCheck}`);
  }
}

console.log("=== 구별된 유니온 예제 ===");
const square: Square = { kind: "square", size: 5 };
const rectangle: Rectangle = { kind: "rectangle", width: 4, height: 6 };
const circle: Circle = { kind: "circle", radius: 3 };
const triangle: Triangle = { kind: "triangle", base: 4, height: 3 };

console.log("정사각형 - 넓이:", area(square), "둘레:", perimeter(square));
console.log("직사각형 - 넓이:", area(rectangle), "둘레:", perimeter(rectangle));
console.log("원 - 넓이:", area(circle), "둘레:", perimeter(circle));
console.log("삼각형 - 넓이:", area(triangle), "둘레:", perimeter(triangle));
console.log();

// 3. 유니온 타입과 타입 가드
interface User {
  type: "user";
  id: number;
  name: string;
  email: string;
}

interface Admin {
  type: "admin";
  id: number;
  name: string;
  permissions: string[];
}

type Person = User | Admin;

function isAdmin(person: Person): person is Admin {
  return person.type === "admin";
}

function isUser(person: Person): person is User {
  return person.type === "user";
}

function processPerson(person: Person): void {
  if (isAdmin(person)) {
    console.log(`관리자 ${person.name}의 권한:`, person.permissions);
  } else if (isUser(person)) {
    console.log(`사용자 ${person.name}의 이메일:`, person.email);
  }
}

console.log("=== 유니온 타입과 타입 가드 예제 ===");
const user: User = {
  type: "user",
  id: 1,
  name: "홍길동",
  email: "hong@example.com"
};

const admin: Admin = {
  type: "admin",
  id: 2,
  name: "김관리",
  permissions: ["read", "write", "delete"]
};

processPerson(user);
processPerson(admin);
console.log();

// 4. 유니온 타입과 배열
type StringOrNumberArray = (string | number)[];
type MixedArray = Array<string | number | boolean>;

function processArray(arr: StringOrNumberArray): string[] {
  return arr.map(item => {
    if (typeof item === "string") {
      return item.toUpperCase();
    } else {
      return item.toString();
    }
  });
}

function sumNumbers(arr: MixedArray): number {
  return arr.reduce((sum: number, item) => {
    if (typeof item === "number") {
      return sum + item;
    } else if (typeof item === "string") {
      const num = parseFloat(item);
      return isNaN(num) ? sum : sum + num;
    } else {
      return sum;
    }
  }, 0);
}

console.log("=== 유니온 타입과 배열 예제 ===");
const mixedArray: StringOrNumberArray = ["hello", 42, "world", 100];
const processResult = processArray(mixedArray);
console.log("원본 배열:", mixedArray);
console.log("처리된 배열:", processResult);

const complexArray: MixedArray = ["10", 20, "30", true, 40, false];
const sum = sumNumbers(complexArray);
console.log("복합 배열:", complexArray);
console.log("숫자 합계:", sum);
console.log();

// 5. 유니온 타입과 함수 오버로딩
function formatValue(value: string): string;
function formatValue(value: number): string;
function formatValue(value: boolean): string;
function formatValue(value: string | number | boolean): string {
  if (typeof value === "string") {
    return `문자열: "${value}"`;
  } else if (typeof value === "number") {
    return `숫자: ${value.toFixed(2)}`;
  } else {
    return `불린: ${value}`;
  }
}

console.log("=== 유니온 타입과 함수 오버로딩 예제 ===");
console.log("formatValue('hello'):", formatValue('hello'));
console.log("formatValue(42):", formatValue(42));
console.log("formatValue(true):", formatValue(true));
console.log();

// 6. 유니온 타입과 조건부 타입
type NonNullable<T> = T extends null | undefined ? never : T;
type ExtractString<T> = T extends string ? T : never;
type ExtractNumber<T> = T extends number ? T : never;

console.log("=== 유니온 타입과 조건부 타입 예제 ===");
console.log("NonNullable<string | number | null> 타입:", "string | number");
console.log("ExtractString<string | number | boolean> 타입:", "string");
console.log("ExtractNumber<string | number | boolean> 타입:", "number");
console.log();

export {
  StringOrNumber,
  PrimitiveType,
  processValue,
  validateInput,
  Shape,
  area,
  perimeter,
  Person,
  isAdmin,
  isUser,
  processPerson,
  StringOrNumberArray,
  MixedArray,
  processArray,
  sumNumbers,
  formatValue,
  NonNullable,
  ExtractString,
  ExtractNumber
};
