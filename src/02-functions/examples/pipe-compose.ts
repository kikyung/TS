/**
 * Pipe와 Compose 함수 예제
 * 
 * 함수형 프로그래밍에서 함수 조합을 위한 pipe와 compose 함수를 학습합니다.
 */

// 1. 기본 유틸리티 함수들
const add = (a: number) => (b: number): number => a + b;
const multiply = (a: number) => (b: number): number => a * b;
const subtract = (a: number) => (b: number): number => b - a;
const divide = (a: number) => (b: number): number => b / a;

const toUpperCase = (str: string): string => str.toUpperCase();
const addExclamation = (str: string): string => str + '!';
const addQuestion = (str: string): string => str + '?';
const reverse = (str: string): string => str.split('').reverse().join('');

const isEven = (num: number): boolean => num % 2 === 0;
const square = (num: number): number => num * num;
const double = (num: number): number => num * 2;

console.log("=== 기본 유틸리티 함수들 ===");
console.log("add(5)(3):", add(5)(3));
console.log("multiply(4)(6):", multiply(4)(6));
console.log("toUpperCase('hello'):", toUpperCase('hello'));
console.log("isEven(8):", isEven(8));
console.log();

// 2. Pipe 함수 구현 (왼쪽에서 오른쪽으로 실행)
type PipeFunction<T, R> = (arg: T) => R;

function pipe<T>(value: T): T;
function pipe<T, A>(value: T, fn1: PipeFunction<T, A>): A;
function pipe<T, A, B>(value: T, fn1: PipeFunction<T, A>, fn2: PipeFunction<A, B>): B;
function pipe<T, A, B, C>(value: T, fn1: PipeFunction<T, A>, fn2: PipeFunction<A, B>, fn3: PipeFunction<B, C>): C;
function pipe<T, A, B, C, D>(value: T, fn1: PipeFunction<T, A>, fn2: PipeFunction<A, B>, fn3: PipeFunction<B, C>, fn4: PipeFunction<C, D>): D;
function pipe<T, A, B, C, D, E>(value: T, fn1: PipeFunction<T, A>, fn2: PipeFunction<A, B>, fn3: PipeFunction<B, C>, fn4: PipeFunction<C, D>, fn5: PipeFunction<D, E>): E;
function pipe<T, A, B, C, D, E, F>(value: T, fn1: PipeFunction<T, A>, fn2: PipeFunction<A, B>, fn3: PipeFunction<B, C>, fn4: PipeFunction<C, D>, fn5: PipeFunction<D, E>, fn6: PipeFunction<E, F>): F;
function pipe<T, A, B, C, D, E, F, G>(value: T, fn1: PipeFunction<T, A>, fn2: PipeFunction<A, B>, fn3: PipeFunction<B, C>, fn4: PipeFunction<C, D>, fn5: PipeFunction<D, E>, fn6: PipeFunction<E, F>, fn7: PipeFunction<F, G>): G;
function pipe<T, A, B, C, D, E, F, G, H>(value: T, fn1: PipeFunction<T, A>, fn2: PipeFunction<A, B>, fn3: PipeFunction<B, C>, fn4: PipeFunction<C, D>, fn5: PipeFunction<D, E>, fn6: PipeFunction<E, F>, fn7: PipeFunction<F, G>, fn8: PipeFunction<G, H>): H;
function pipe<T, A, B, C, D, E, F, G, H, I>(value: T, fn1: PipeFunction<T, A>, fn2: PipeFunction<A, B>, fn3: PipeFunction<B, C>, fn4: PipeFunction<C, D>, fn5: PipeFunction<D, E>, fn6: PipeFunction<E, F>, fn7: PipeFunction<F, G>, fn8: PipeFunction<G, H>, fn9: PipeFunction<H, I>): I;
function pipe<T, A, B, C, D, E, F, G, H, I, J>(value: T, fn1: PipeFunction<T, A>, fn2: PipeFunction<A, B>, fn3: PipeFunction<B, C>, fn4: PipeFunction<C, D>, fn5: PipeFunction<D, E>, fn6: PipeFunction<E, F>, fn7: PipeFunction<F, G>, fn8: PipeFunction<G, H>, fn9: PipeFunction<H, I>, fn10: PipeFunction<I, J>): J;
function pipe(value: any, ...fns: Array<(arg: any) => any>): any {
  return fns.reduce((acc, fn) => fn(acc), value);
}

// 3. Compose 함수 구현 (오른쪽에서 왼쪽으로 실행)
type ComposeFunction<T, R> = (arg: T) => R;

function compose<T>(value: T): T;
function compose<T, A>(fn1: ComposeFunction<T, A>): ComposeFunction<T, A>;
function compose<T, A, B>(fn2: ComposeFunction<A, B>, fn1: ComposeFunction<T, A>): ComposeFunction<T, B>;
function compose<T, A, B, C>(fn3: ComposeFunction<B, C>, fn2: ComposeFunction<A, B>, fn1: ComposeFunction<T, A>): ComposeFunction<T, C>;
function compose<T, A, B, C, D>(fn4: ComposeFunction<C, D>, fn3: ComposeFunction<B, C>, fn2: ComposeFunction<A, B>, fn1: ComposeFunction<T, A>): ComposeFunction<T, D>;
function compose<T, A, B, C, D, E>(fn5: ComposeFunction<D, E>, fn4: ComposeFunction<C, D>, fn3: ComposeFunction<B, C>, fn2: ComposeFunction<A, B>, fn1: ComposeFunction<T, A>): ComposeFunction<T, E>;
function compose<T, A, B, C, D, E, F>(fn6: ComposeFunction<E, F>, fn5: ComposeFunction<D, E>, fn4: ComposeFunction<C, D>, fn3: ComposeFunction<B, C>, fn2: ComposeFunction<A, B>, fn1: ComposeFunction<T, A>): ComposeFunction<T, F>;
function compose<T, A, B, C, D, E, F, G>(fn7: ComposeFunction<F, G>, fn6: ComposeFunction<E, F>, fn5: ComposeFunction<D, E>, fn4: ComposeFunction<C, D>, fn3: ComposeFunction<B, C>, fn2: ComposeFunction<A, B>, fn1: ComposeFunction<T, A>): ComposeFunction<T, G>;
function compose<T, A, B, C, D, E, F, G, H>(fn8: ComposeFunction<G, H>, fn7: ComposeFunction<F, G>, fn6: ComposeFunction<E, F>, fn5: ComposeFunction<D, E>, fn4: ComposeFunction<C, D>, fn3: ComposeFunction<B, C>, fn2: ComposeFunction<A, B>, fn1: ComposeFunction<T, A>): ComposeFunction<T, H>;
function compose<T, A, B, C, D, E, F, G, H, I>(fn9: ComposeFunction<H, I>, fn8: ComposeFunction<G, H>, fn7: ComposeFunction<F, G>, fn6: ComposeFunction<E, F>, fn5: ComposeFunction<D, E>, fn4: ComposeFunction<C, D>, fn3: ComposeFunction<B, C>, fn2: ComposeFunction<A, B>, fn1: ComposeFunction<T, A>): ComposeFunction<T, I>;
function compose<T, A, B, C, D, E, F, G, H, I, J>(fn10: ComposeFunction<I, J>, fn9: ComposeFunction<H, I>, fn8: ComposeFunction<G, H>, fn7: ComposeFunction<F, G>, fn6: ComposeFunction<E, F>, fn5: ComposeFunction<D, E>, fn4: ComposeFunction<C, D>, fn3: ComposeFunction<B, C>, fn2: ComposeFunction<A, B>, fn1: ComposeFunction<T, A>): ComposeFunction<T, J>;
function compose(...fns: Array<(arg: any) => any>): (arg: any) => any {
  return (value: any) => fns.reduceRight((acc, fn) => fn(acc), value);
}

console.log("=== Pipe 함수 예제 ===");

// 숫자 계산 예제
const result1 = pipe(
  5,
  add(3),        // 5 + 3 = 8
  multiply(2),   // 8 * 2 = 16
  square,        // 16 * 16 = 256
  double         // 256 * 2 = 512
);
console.log("pipe(5, add(3), multiply(2), square, double):", result1);

// 문자열 처리 예제
const result2 = pipe(
  "hello world",
  toUpperCase,      // "HELLO WORLD"
  addExclamation,   // "HELLO WORLD!"
  reverse           // "!DLROW OLLEH"
);
console.log("pipe('hello world', toUpperCase, addExclamation, reverse):", result2);

// 조건부 처리 예제
const processNumber = (num: number) => pipe(
  num,
  double,           // 2배
  square,           // 제곱
  (n: number) => isEven(n) ? n : n + 1  // 짝수가 아니면 1 더하기
);

console.log("processNumber(3):", processNumber(3)); // 3 -> 6 -> 36 -> 37
console.log("processNumber(4):", processNumber(4)); // 4 -> 8 -> 64 -> 64

console.log();

console.log("=== Compose 함수 예제 ===");

// Compose로 같은 계산을 오른쪽에서 왼쪽으로 실행
const composedCalculation = compose(
  double,         // 마지막에 실행
  square,         // 그 다음
  multiply(2),    // 그 다음
  add(3)          // 첫 번째로 실행
);

const result3 = composedCalculation(5);
console.log("compose(double, square, multiply(2), add(3))(5):", result3);

// Compose로 문자열 처리
const composedString = compose(
  reverse,           // 마지막에 실행
  addExclamation,    // 그 다음
  toUpperCase        // 첫 번째로 실행
);

const result4 = composedString("hello world");
console.log("compose(reverse, addExclamation, toUpperCase)('hello world'):", result4);

console.log();

// 4. 고급 Pipe와 Compose 예제
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

const users: User[] = [
  { id: 1, name: "홍길동", email: "hong@example.com", age: 25, isActive: true },
  { id: 2, name: "김철수", email: "kim@example.com", age: 30, isActive: false },
  { id: 3, name: "이영희", email: "lee@example.com", age: 28, isActive: true },
  { id: 4, name: "박민수", email: "park@example.com", age: 35, isActive: true },
  { id: 5, name: "정수진", email: "jung@example.com", age: 22, isActive: false }
];

// 유틸리티 함수들
const filterActive = (users: User[]): User[] => users.filter(user => user.isActive);
const filterByAge = (minAge: number) => (users: User[]): User[] => 
  users.filter(user => user.age >= minAge);
const sortByName = (users: User[]): User[] => 
  [...users].sort((a, b) => a.name.localeCompare(b.name));
const mapToNames = (users: User[]): string[] => users.map(user => user.name);
const addPrefix = (prefix: string) => (names: string[]): string[] => 
  names.map(name => `${prefix} ${name}`);

console.log("=== 고급 Pipe 예제 (사용자 데이터 처리) ===");

// 활성 사용자 중 25세 이상인 사용자들의 이름을 정렬하고 접두사 추가
const activeUsersOver25 = pipe(
  users,
  filterActive,           // 활성 사용자만 필터링
  filterByAge(25),        // 25세 이상 필터링
  sortByName,             // 이름으로 정렬
  mapToNames,             // 이름만 추출
  addPrefix("👤")         // 접두사 추가
);

console.log("활성 사용자 중 25세 이상 (정렬된 이름):", activeUsersOver25);

// Compose로 같은 작업을 오른쪽에서 왼쪽으로 실행
const composedUserProcessing = compose(
  addPrefix("👤"),        // 마지막에 실행
  mapToNames,             // 그 다음
  sortByName,             // 그 다음
  filterByAge(25),        // 그 다음
  filterActive             // 첫 번째로 실행
);

const result5 = composedUserProcessing(users);
console.log("compose로 처리한 결과:", result5);

console.log();

// 5. 비동기 Pipe 예제
const delay = (ms: number) => (value: any) => 
  new Promise(resolve => setTimeout(() => resolve(value), ms));

const asyncAdd = (a: number) => async (b: number): Promise<number> => {
  await delay(100);
  return a + b;
};

const asyncMultiply = (a: number) => async (b: number): Promise<number> => {
  await delay(100);
  return a * b;
};

const asyncSquare = async (num: number): Promise<number> => {
  await delay(100);
  return num * num;
};

// 비동기 Pipe 함수
async function asyncPipe<T>(value: T): Promise<T>;
async function asyncPipe<T, A>(value: T, fn1: (arg: T) => Promise<A>): Promise<A>;
async function asyncPipe<T, A, B>(value: T, fn1: (arg: T) => Promise<A>, fn2: (arg: A) => Promise<B>): Promise<B>;
async function asyncPipe<T, A, B, C>(value: T, fn1: (arg: T) => Promise<A>, fn2: (arg: A) => Promise<B>, fn3: (arg: B) => Promise<C>): Promise<C>;
async function asyncPipe<T, A, B, C, D>(value: T, fn1: (arg: T) => Promise<A>, fn2: (arg: A) => Promise<B>, fn3: (arg: B) => Promise<C>, fn4: (arg: C) => Promise<D>): Promise<D>;
async function asyncPipe(value: any, ...fns: Array<(arg: any) => Promise<any>>): Promise<any> {
  return fns.reduce(async (acc, fn) => fn(await acc), Promise.resolve(value));
}

console.log("=== 비동기 Pipe 예제 ===");

const asyncResult = await asyncPipe(
  3,
  asyncAdd(2),      // 3 + 2 = 5
  asyncMultiply(3), // 5 * 3 = 15
  asyncSquare       // 15 * 15 = 225
);

console.log("비동기 pipe 결과:", asyncResult);

console.log();

// 6. 에러 처리가 포함된 Pipe
const safeDivide = (divisor: number) => (dividend: number): number => {
  if (divisor === 0) {
    throw new Error("0으로 나눌 수 없습니다");
  }
  return dividend / divisor;
};

const safeSquare = (num: number): number => {
  if (num < 0) {
    throw new Error("음수는 제곱할 수 없습니다");
  }
  return num * num;
};

const withErrorHandling = <T>(fn: (arg: T) => T) => (arg: T): T | string => {
  try {
    return fn(arg);
  } catch (error) {
    return `에러: ${error instanceof Error ? error.message : '알 수 없는 에러'}`;
  }
};

console.log("=== 에러 처리가 포함된 Pipe 예제 ===");

const safeResult1 = pipe(
  10,
  withErrorHandling(safeDivide(2)),  // 10 / 2 = 5
  withErrorHandling(safeSquare)      // 5 * 5 = 25
);
console.log("안전한 계산:", safeResult1);

const safeResult2 = pipe(
  10,
  withErrorHandling(safeDivide(0)),  // 에러 발생
  withErrorHandling(safeSquare)
);
console.log("에러 처리:", safeResult2);

const safeResult3 = pipe(
  -5,
  withErrorHandling(safeSquare),     // 에러 발생
  withErrorHandling(safeDivide(2))
);
console.log("에러 처리:", safeResult3);

console.log();

// 7. 실용적인 사용 사례
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

const products: Product[] = [
  { id: 1, name: "노트북", price: 1000000, category: "전자제품", inStock: true },
  { id: 2, name: "마우스", price: 50000, category: "전자제품", inStock: true },
  { id: 3, name: "키보드", price: 80000, category: "전자제품", inStock: false },
  { id: 4, name: "책상", price: 200000, category: "가구", inStock: true },
  { id: 5, name: "의자", price: 150000, category: "가구", inStock: true }
];

const filterInStock = (products: Product[]): Product[] => 
  products.filter(product => product.inStock);

const filterByCategory = (category: string) => (products: Product[]): Product[] => 
  products.filter(product => product.category === category);

const sortByPrice = (ascending: boolean = true) => (products: Product[]): Product[] => 
  [...products].sort((a, b) => ascending ? a.price - b.price : b.price - a.price);

const calculateTotalPrice = (products: Product[]): number => 
  products.reduce((total, product) => total + product.price, 0);

const formatCurrency = (amount: number): string => 
  `₩${amount.toLocaleString()}`;

console.log("=== 실용적인 사용 사례 (상품 데이터 처리) ===");

// 재고가 있는 전자제품을 가격 순으로 정렬하고 총 가격 계산
const electronicsTotal = pipe(
  products,
  filterInStock,                    // 재고 있는 상품만
  filterByCategory("전자제품"),     // 전자제품만
  sortByPrice(true),               // 가격 오름차순 정렬
  calculateTotalPrice,             // 총 가격 계산
  formatCurrency                   // 통화 형식으로 포맷
);

console.log("재고가 있는 전자제품 총 가격:", electronicsTotal);

// Compose로 같은 작업을 오른쪽에서 왼쪽으로 실행
const composedProductProcessing = compose(
  formatCurrency,                  // 마지막에 실행
  calculateTotalPrice,             // 그 다음
  sortByPrice(true),              // 그 다음
  filterByCategory("전자제품"),    // 그 다음
  filterInStock                    // 첫 번째로 실행
);

const result6 = composedProductProcessing(products);
console.log("compose로 처리한 상품 총 가격:", result6);

export {
  pipe,
  compose,
  asyncPipe,
  add,
  multiply,
  subtract,
  divide,
  toUpperCase,
  addExclamation,
  addQuestion,
  reverse,
  isEven,
  square,
  double,
  filterActive,
  filterByAge,
  sortByName,
  mapToNames,
  addPrefix,
  safeDivide,
  safeSquare,
  withErrorHandling
};
