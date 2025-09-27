# TypeScript에서 Pipe와 Compose 함수 완벽 가이드

## 🎯 개요

함수형 프로그래밍에서 **함수 조합(Function Composition)**은 매우 중요한 개념입니다. TypeScript에서 `pipe`와 `compose` 함수를 사용하면 여러 함수를 체이닝하여 복잡한 로직을 간결하고 읽기 쉽게 만들 수 있습니다.

이 글에서는 TypeScript에서 `pipe`와 `compose` 함수의 개념, 구현 방법, 그리고 실무에서의 활용 사례를 자세히 알아보겠습니다.

## 📚 목차

1. [Pipe와 Compose란?](#pipe와-compose란)
2. [기본 구현 방법](#기본-구현-방법)
3. [실제 사용 예제](#실제-사용-예제)
4. [고급 활용 사례](#고급-활용-사례)
5. [비동기 처리](#비동기-처리)
6. [에러 처리](#에러-처리)
7. [실무 적용 팁](#실무-적용-팁)

## Pipe와 Compose란?

### Pipe 함수
- **방향**: 왼쪽에서 오른쪽으로 실행
- **특징**: 데이터가 첫 번째 함수를 거쳐 두 번째 함수로, 그 다음 세 번째 함수로 순차적으로 전달
- **가독성**: 코드를 읽는 순서와 실행 순서가 일치

### Compose 함수
- **방향**: 오른쪽에서 왼쪽으로 실행
- **특징**: 마지막 함수부터 역순으로 실행
- **수학적**: 수학의 함수 합성과 동일한 개념

## 기본 구현 방법

### Pipe 함수 구현

```typescript
type PipeFunction<T, R> = (arg: T) => R;

function pipe<T>(value: T): T;
function pipe<T, A>(value: T, fn1: PipeFunction<T, A>): A;
function pipe<T, A, B>(value: T, fn1: PipeFunction<T, A>, fn2: PipeFunction<A, B>): B;
function pipe<T, A, B, C>(value: T, fn1: PipeFunction<T, A>, fn2: PipeFunction<A, B>, fn3: PipeFunction<B, C>): C;
// ... 더 많은 오버로드

function pipe(value: any, ...fns: Array<(arg: any) => any>): any {
  return fns.reduce((acc, fn) => fn(acc), value);
}
```

### Compose 함수 구현

```typescript
type ComposeFunction<T, R> = (arg: T) => R;

function compose<T>(value: T): T;
function compose<T, A>(fn1: ComposeFunction<T, A>): ComposeFunction<T, A>;
function compose<T, A, B>(fn2: ComposeFunction<A, B>, fn1: ComposeFunction<T, A>): ComposeFunction<T, B>;
// ... 더 많은 오버로드

function compose(...fns: Array<(arg: any) => any>): (arg: any) => any {
  return (value: any) => fns.reduceRight((acc, fn) => fn(acc), value);
}
```

## 실제 사용 예제

### 기본적인 숫자 계산

```typescript
const add = (a: number) => (b: number): number => a + b;
const multiply = (a: number) => (b: number): number => a * b;
const square = (num: number): number => num * num;
const double = (num: number): number => num * 2;

// Pipe 사용 (왼쪽에서 오른쪽으로)
const result1 = pipe(
  5,
  add(3),        // 5 + 3 = 8
  multiply(2),   // 8 * 2 = 16
  square,        // 16 * 16 = 256
  double         // 256 * 2 = 512
);

// Compose 사용 (오른쪽에서 왼쪽으로)
const composedCalculation = compose(
  double,         // 마지막에 실행
  square,         // 그 다음
  multiply(2),    // 그 다음
  add(3)          // 첫 번째로 실행
);

const result2 = composedCalculation(5);
```

### 문자열 처리

```typescript
const toUpperCase = (str: string): string => str.toUpperCase();
const addExclamation = (str: string): string => str + '!';
const reverse = (str: string): string => str.split('').reverse().join('');

// Pipe로 문자열 처리
const result = pipe(
  "hello world",
  toUpperCase,      // "HELLO WORLD"
  addExclamation,   // "HELLO WORLD!"
  reverse           // "!DLROW OLLEH"
);
```

## 고급 활용 사례

### 사용자 데이터 처리

```typescript
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
  // ... 더 많은 사용자
];

// 유틸리티 함수들
const filterActive = (users: User[]): User[] => 
  users.filter(user => user.isActive);

const filterByAge = (minAge: number) => (users: User[]): User[] => 
  users.filter(user => user.age >= minAge);

const sortByName = (users: User[]): User[] => 
  [...users].sort((a, b) => a.name.localeCompare(b.name));

const mapToNames = (users: User[]): string[] => 
  users.map(user => user.name);

const addPrefix = (prefix: string) => (names: string[]): string[] => 
  names.map(name => `${prefix} ${name}`);

// 활성 사용자 중 25세 이상인 사용자들의 이름을 정렬하고 접두사 추가
const activeUsersOver25 = pipe(
  users,
  filterActive,           // 활성 사용자만 필터링
  filterByAge(25),        // 25세 이상 필터링
  sortByName,             // 이름으로 정렬
  mapToNames,             // 이름만 추출
  addPrefix("👤")         // 접두사 추가
);
```

### 상품 데이터 처리

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

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

// 재고가 있는 전자제품을 가격 순으로 정렬하고 총 가격 계산
const electronicsTotal = pipe(
  products,
  filterInStock,                    // 재고 있는 상품만
  filterByCategory("전자제품"),     // 전자제품만
  sortByPrice(true),               // 가격 오름차순 정렬
  calculateTotalPrice,             // 총 가격 계산
  formatCurrency                   // 통화 형식으로 포맷
);
```

## 비동기 처리

### 비동기 Pipe 함수

```typescript
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
// ... 더 많은 오버로드

async function asyncPipe(value: any, ...fns: Array<(arg: any) => Promise<any>>): Promise<any> {
  return fns.reduce(async (acc, fn) => fn(await acc), Promise.resolve(value));
}

// 사용 예제
const asyncResult = await asyncPipe(
  3,
  asyncAdd(2),      // 3 + 2 = 5
  asyncMultiply(3), // 5 * 3 = 15
  asyncSquare       // 15 * 15 = 225
);
```

## 에러 처리

### 안전한 Pipe 함수

```typescript
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

// 안전한 계산
const safeResult = pipe(
  10,
  withErrorHandling(safeDivide(2)),  // 10 / 2 = 5
  withErrorHandling(safeSquare)      // 5 * 5 = 25
);
```

## 실무 적용 팁

### 1. 타입 안전성 확보

```typescript
// 제네릭을 활용한 타입 안전한 Pipe
function typedPipe<T, A, B, C>(
  value: T,
  fn1: (arg: T) => A,
  fn2: (arg: A) => B,
  fn3: (arg: B) => C
): C {
  return fn3(fn2(fn1(value)));
}
```

### 2. 함수 분리와 재사용성

```typescript
// 작은 단위의 함수들로 분리
const validateEmail = (email: string): boolean => 
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const normalizeEmail = (email: string): string => 
  email.toLowerCase().trim();

const createUser = (email: string, name: string) => ({
  id: Date.now(),
  email,
  name,
  createdAt: new Date()
});

// Pipe로 조합
const processUserRegistration = pipe(
  validateEmail,      // 이메일 검증
  normalizeEmail,     // 이메일 정규화
  (email: string) => createUser(email, "사용자")  // 사용자 생성
);
```

### 3. 디버깅을 위한 로깅

```typescript
const withLogging = <T>(label: string) => (value: T): T => {
  console.log(`${label}:`, value);
  return value;
};

const result = pipe(
  "hello world",
  withLogging("원본"),
  toUpperCase,
  withLogging("대문자 변환 후"),
  addExclamation,
  withLogging("느낌표 추가 후"),
  reverse,
  withLogging("최종 결과")
);
```

### 4. 조건부 처리

```typescript
const conditional = <T>(
  predicate: (value: T) => boolean,
  trueFn: (value: T) => T,
  falseFn: (value: T) => T
) => (value: T): T => {
  return predicate(value) ? trueFn(value) : falseFn(value);
};

const processNumber = pipe(
  double,           // 2배
  square,           // 제곱
  conditional(
    (n: number) => isEven(n),  // 짝수인지 확인
    (n: number) => n,          // 짝수면 그대로
    (n: number) => n + 1       // 홀수면 1 더하기
  )
);
```

## 🎯 결론

`pipe`와 `compose` 함수는 TypeScript에서 함수형 프로그래밍을 구현하는 강력한 도구입니다. 이들을 활용하면:

1. **가독성 향상**: 코드의 실행 흐름을 명확하게 표현
2. **재사용성 증대**: 작은 함수들을 조합하여 복잡한 로직 구현
3. **테스트 용이성**: 각 함수를 독립적으로 테스트 가능
4. **유지보수성**: 로직 변경 시 해당 함수만 수정하면 됨

실무에서는 데이터 변환, API 응답 처리, 폼 검증 등 다양한 상황에서 활용할 수 있습니다. 처음에는 익숙하지 않을 수 있지만, 점진적으로 도입해보시면 코드의 품질이 크게 향상되는 것을 경험하실 수 있을 것입니다.

## 📚 추가 학습 자료

- [Ramda.js](https://ramdajs.com/) - 함수형 프로그래밍 라이브러리
- [Lodash/FP](https://github.com/lodash/lodash/wiki/FP-Guide) - 함수형 프로그래밍 스타일의 Lodash
- [RxJS](https://rxjs.dev/) - 반응형 프로그래밍과 함수 조합

---

*이 글이 도움이 되셨다면 좋아요와 공유 부탁드립니다! 추가로 궁금한 점이 있으시면 댓글로 남겨주세요.*
