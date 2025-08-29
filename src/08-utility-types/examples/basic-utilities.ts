/**
 * 기본 유틸리티 타입 (Basic Utility Types) 예제
 * 
 * TypeScript의 내장 유틸리티 타입들을 학습합니다.
 */

// 1. 기본 인터페이스 정의
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
  createdAt: Date;
  preferences: {
    theme: string;
    language: string;
    notifications: boolean;
  };
}

interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  tags: string[];
  inStock: boolean;
}

// 2. Partial<T> - 모든 속성을 선택적으로
type PartialUser = Partial<User>;
type PartialProduct = Partial<Product>;

console.log("=== Partial<T> 유틸리티 타입 예제 ===");
const partialUser: PartialUser = {
  name: "홍길동",
  email: "hong@example.com"
  // 다른 속성들은 선택적이므로 생략 가능
};

const partialProduct: PartialProduct = {
  name: "노트북",
  price: 1000000
  // 다른 속성들은 선택적이므로 생략 가능
};

console.log("partialUser:", partialUser);
console.log("partialProduct:", partialProduct);
console.log();

// 3. Required<T> - 모든 속성을 필수로
type RequiredUser = Required<User>;
type RequiredProduct = Required<Product>;

console.log("=== Required<T> 유틸리티 타입 예제 ===");
const requiredUser: RequiredUser = {
  id: 1,
  name: "김철수",
  email: "kim@example.com",
  age: 30,
  isActive: true,
  createdAt: new Date(),
  preferences: {
    theme: "dark",
    language: "ko",
    notifications: true
  }
};

const requiredProduct: RequiredProduct = {
  id: "prod-001",
  name: "마우스",
  price: 50000,
  description: "무선 마우스", // 이제 필수 속성
  tags: ["무선", "게이밍"],
  inStock: true
};

console.log("requiredUser:", requiredUser);
console.log("requiredProduct:", requiredProduct);
console.log();

// 4. Readonly<T> - 모든 속성을 읽기 전용으로
type ReadonlyUser = Readonly<User>;
type ReadonlyProduct = Readonly<Product>;

console.log("=== Readonly<T> 유틸리티 타입 예제 ===");
const readonlyUser: ReadonlyUser = {
  id: 2,
  name: "박영희",
  email: "park@example.com",
  age: 25,
  isActive: true,
  createdAt: new Date(),
  preferences: {
    theme: "light",
    language: "en",
    notifications: false
  }
};

const readonlyProduct: ReadonlyProduct = {
  id: "prod-002",
  name: "키보드",
  price: 150000,
  description: "기계식 키보드",
  tags: ["기계식", "RGB"],
  inStock: false
};

console.log("readonlyUser:", readonlyUser);
console.log("readonlyProduct:", readonlyProduct);

// readonlyUser.name = "새이름"; // 컴파일 에러: 읽기 전용
// readonlyProduct.price = 200000; // 컴파일 에러: 읽기 전용
console.log();

// 5. Pick<T, K> - 특정 속성만 선택
type UserBasicInfo = Pick<User, 'id' | 'name' | 'email'>;
type ProductBasicInfo = Pick<Product, 'id' | 'name' | 'price'>;

console.log("=== Pick<T, K> 유틸리티 타입 예제 ===");
const userBasicInfo: UserBasicInfo = {
  id: 3,
  name: "이민수",
  email: "lee@example.com"
};

const productBasicInfo: ProductBasicInfo = {
  id: "prod-003",
  name: "모니터",
  price: 300000
};

console.log("userBasicInfo:", userBasicInfo);
console.log("productBasicInfo:", productBasicInfo);
console.log();

// 6. Omit<T, K> - 특정 속성 제외
type UserWithoutId = Omit<User, 'id'>;
type ProductWithoutPrice = Omit<Product, 'price'>;

console.log("=== Omit<T, K> 유틸리티 타입 예제 ===");
const userWithoutId: UserWithoutId = {
  name: "최지영",
  email: "choi@example.com",
  age: 28,
  isActive: true,
  createdAt: new Date(),
  preferences: {
    theme: "auto",
    language: "ko",
    notifications: true
  }
};

const productWithoutPrice: ProductWithoutPrice = {
  id: "prod-004",
  name: "헤드폰",
  description: "노이즈 캔슬링 헤드폰",
  tags: ["무선", "노이즈캔슬링"],
  inStock: true
};

console.log("userWithoutId:", userWithoutId);
console.log("productWithoutPrice:", productWithoutPrice);
console.log();

// 7. Record<K, T> - 키-값 타입 매핑
type UserMap = Record<string, User>;
type ProductMap = Record<string, Product>;
type StatusMap = Record<'pending' | 'approved' | 'rejected', string>;

console.log("=== Record<K, T> 유틸리티 타입 예제 ===");
const userMap: UserMap = {
  "user1": {
    id: 1,
    name: "사용자1",
    email: "user1@example.com",
    age: 25,
    isActive: true,
    createdAt: new Date(),
    preferences: {
      theme: "dark",
      language: "ko",
      notifications: true
    }
  },
  "user2": {
    id: 2,
    name: "사용자2",
    email: "user2@example.com",
    age: 30,
    isActive: false,
    createdAt: new Date(),
    preferences: {
      theme: "light",
      language: "en",
      notifications: false
    }
  }
};

const productMap: ProductMap = {
  "prod1": {
    id: "prod-001",
    name: "상품1",
    price: 100000,
    description: "첫 번째 상품",
    tags: ["신상품"],
    inStock: true
  },
  "prod2": {
    id: "prod-002",
    name: "상품2",
    price: 200000,
    description: "두 번째 상품",
    tags: ["인기상품"],
    inStock: false
  }
};

const statusMap: StatusMap = {
  pending: "대기 중",
  approved: "승인됨",
  rejected: "거부됨"
};

console.log("userMap:", userMap);
console.log("productMap:", productMap);
console.log("statusMap:", statusMap);
console.log();

// 8. ReturnType<T> - 함수 반환 타입
type AddFunction = (a: number, b: number) => number;
type StringFunction = (input: string) => string;
type ComplexFunction = (x: number, y: string) => { result: number; message: string };

type AddReturnType = ReturnType<AddFunction>;
type StringReturnType = ReturnType<StringFunction>;
type ComplexReturnType = ReturnType<ComplexFunction>;

console.log("=== ReturnType<T> 유틸리티 타입 예제 ===");
console.log("AddFunction 반환 타입:", "number");
console.log("StringFunction 반환 타입:", "string");
console.log("ComplexFunction 반환 타입:", "{ result: number; message: string }");

// 실제 함수 정의
const add: AddFunction = (a, b) => a + b;
const toUpperCase: StringFunction = (input) => input.toUpperCase();
const complex: ComplexFunction = (x, y) => ({ result: x * 2, message: y });

console.log("add(5, 3):", add(5, 3));
console.log("toUpperCase('hello'):", toUpperCase('hello'));
console.log("complex(10, 'test'):", complex(10, 'test'));
console.log();

// 9. Parameters<T> - 함수 매개변수 타입
type AddParameters = Parameters<AddFunction>;
type StringParameters = Parameters<StringFunction>;
type ComplexParameters = Parameters<ComplexFunction>;

console.log("=== Parameters<T> 유틸리티 타입 예제 ===");
console.log("AddFunction 매개변수 타입:", "[number, number]");
console.log("StringFunction 매개변수 타입:", "[string]");
console.log("ComplexFunction 매개변수 타입:", "[number, string]");

// 매개변수 타입을 활용한 함수
function executeWithParams<T extends (...args: any[]) => any>(
  func: T,
  ...args: Parameters<T>
): ReturnType<T> {
  return func(...args);
}

console.log("executeWithParams(add, 10, 20):", executeWithParams(add, 10, 20));
console.log("executeWithParams(toUpperCase, 'world'):", executeWithParams(toUpperCase, 'world'));
console.log("executeWithParams(complex, 5, 'hello'):", executeWithParams(complex, 5, 'hello'));
console.log();

// 10. NonNullable<T> - null과 undefined 제거
type StringOrNull = string | null;
type NumberOrUndefined = number | undefined;
type MixedType = string | number | null | undefined;

type NonNullString = NonNullable<StringOrNull>;
type NonNullNumber = NonNullable<NumberOrUndefined>;
type NonNullMixed = NonNullable<MixedType>;

console.log("=== NonNullable<T> 유틸리티 타입 예제 ===");
console.log("StringOrNull 타입:", "string | null");
console.log("NonNullString 타입:", "string");
console.log("NumberOrUndefined 타입:", "number | undefined");
console.log("NonNullNumber 타입:", "number");
console.log("MixedType 타입:", "string | number | null | undefined");
console.log("NonNullMixed 타입:", "string | number");

// NonNullable을 활용한 함수
function processNonNullValue<T>(value: NonNullable<T>): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value.toString();
  } else {
    return "알 수 없는 타입";
  }
}

console.log("processNonNullValue('hello'):", processNonNullValue('hello'));
console.log("processNonNullValue(42):", processNonNullValue(42));
console.log();

export {
  User,
  Product,
  PartialUser,
  RequiredUser,
  ReadonlyUser,
  UserBasicInfo,
  ProductBasicInfo,
  UserWithoutId,
  ProductWithoutPrice,
  UserMap,
  ProductMap,
  StatusMap,
  AddFunction,
  StringFunction,
  ComplexFunction,
  AddReturnType,
  StringReturnType,
  ComplexReturnType,
  AddParameters,
  StringParameters,
  ComplexParameters,
  NonNullString,
  NonNullNumber,
  NonNullMixed,
  executeWithParams,
  processNonNullValue
};
