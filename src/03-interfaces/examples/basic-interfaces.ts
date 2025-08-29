/**
 * 기본 인터페이스 (Basic Interfaces) 예제
 * 
 * TypeScript에서 인터페이스의 기본적인 사용법을 학습합니다.
 */

// 1. 기본 인터페이스 정의
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;           // 선택적 속성 (Optional Properties)
  readonly createdAt: Date; // 읽기 전용 속성 (Readonly Properties)
}

// 인터페이스를 사용한 객체 생성
const user1: User = {
  id: 1,
  name: "홍길동",
  email: "hong@example.com",
  createdAt: new Date()
};

const user2: User = {
  id: 2,
  name: "김철수",
  email: "kim@example.com",
  age: 25,               // 선택적 속성
  createdAt: new Date()
};

console.log("=== 기본 인터페이스 예제 ===");
console.log("user1:", user1);
console.log("user2:", user2);
console.log();

// 2. 선택적 속성 (Optional Properties)
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;   // 선택적 속성
  tags?: string[];        // 선택적 속성
}

const product1: Product = {
  id: 1,
  name: "노트북",
  price: 1000000
};

const product2: Product = {
  id: 2,
  name: "마우스",
  price: 50000,
  description: "무선 마우스",
  tags: ["무선", "게이밍"]
};

console.log("=== 선택적 속성 예제 ===");
console.log("product1:", product1);
console.log("product2:", product2);
console.log();

// 3. 읽기 전용 속성 (Readonly Properties)
interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
  readonly retries: number;
}

const config: Config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3
};

// config.apiUrl = "https://new-api.example.com"; // 컴파일 에러: 읽기 전용

console.log("=== 읽기 전용 속성 예제 ===");
console.log("config:", config);
console.log("API URL:", config.apiUrl);
console.log();

// 4. 함수 속성과 메서드
interface Calculator {
  add(a: number, b: number): number;
  subtract: (a: number, b: number) => number; // 화살표 함수 문법
  multiply(a: number, b: number): number;
  divide(a: number, b: number): number;
}

const calculator: Calculator = {
  add(a, b) {
    return a + b;
  },
  subtract: (a, b) => a - b,
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  }
};

console.log("=== 함수 속성과 메서드 예제 ===");
console.log("10 + 5 =", calculator.add(10, 5));
console.log("10 - 5 =", calculator.subtract(10, 5));
console.log("10 * 5 =", calculator.multiply(10, 5));
console.log("10 / 5 =", calculator.divide(10, 5));
console.log();

// 5. 인덱스 시그니처 (Index Signatures)
interface StringArray {
  [index: number]: string;
}

interface NumberDictionary {
  [key: string]: number;
  length: number;        // 필수 속성
}

const stringArray: StringArray = ["apple", "banana", "cherry"];
const numberDict: NumberDictionary = {
  length: 3,
  first: 1,
  second: 2,
  third: 3
};

console.log("=== 인덱스 시그니처 예제 ===");
console.log("stringArray:", stringArray);
console.log("stringArray[1]:", stringArray[1]);
console.log("numberDict:", numberDict);
console.log("numberDict.first:", numberDict["first"]);
console.log();

// 6. 인터페이스와 유니온 타입
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

type Shape = Square | Rectangle | Circle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
    case "circle":
      return Math.PI * shape.radius * shape.radius;
  }
}

console.log("=== 인터페이스와 유니온 타입 예제 ===");
const square: Square = { kind: "square", size: 5 };
const rectangle: Rectangle = { kind: "rectangle", width: 4, height: 6 };
const circle: Circle = { kind: "circle", radius: 3 };

console.log("정사각형 넓이:", area(square));
console.log("직사각형 넓이:", area(rectangle));
console.log("원 넓이:", area(circle));
console.log();

// 7. 인터페이스와 제네릭
interface Box<T> {
  contents: T;
  getContents(): T;
  setContents(contents: T): void;
}

const stringBox: Box<string> = {
  contents: "Hello, TypeScript!",
  getContents() {
    return this.contents;
  },
  setContents(contents: string) {
    this.contents = contents;
  }
};

const numberBox: Box<number> = {
  contents: 42,
  getContents() {
    return this.contents;
  },
  setContents(contents: number) {
    this.contents = contents;
  }
};

console.log("=== 인터페이스와 제네릭 예제 ===");
console.log("stringBox contents:", stringBox.getContents());
stringBox.setContents("Updated content!");
console.log("stringBox updated contents:", stringBox.getContents());

console.log("numberBox contents:", numberBox.getContents());
numberBox.setContents(100);
console.log("numberBox updated contents:", numberBox.getContents());
console.log();

export {
  User,
  Product,
  Config,
  Calculator,
  StringArray,
  NumberDictionary,
  Shape,
  Box,
  area
};
