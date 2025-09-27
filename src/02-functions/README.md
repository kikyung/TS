# 02. 함수 (Functions)

TypeScript에서 함수를 다루는 방법을 학습합니다.

## 📚 학습 내용

### 1. 함수 타입 정의
- 함수 매개변수 타입
- 함수 반환 타입
- 선택적 매개변수
- 기본값 매개변수

### 2. 함수 오버로딩
- 동일한 함수명으로 다른 시그니처 정의
- 오버로딩 vs 유니온 타입

### 3. 함수 타입 표현식
- 함수 타입 별칭
- 화살표 함수 타입
- 고차 함수

### 4. 콜백 함수
- 콜백 함수 타입 정의
- 이벤트 핸들러 타입

### 5. 제네릭 함수
- 타입 매개변수를 사용한 함수
- 제약 조건

### 6. 함수 조합 (Pipe & Compose)
- Pipe 함수: 왼쪽에서 오른쪽으로 함수 실행
- Compose 함수: 오른쪽에서 왼쪽으로 함수 실행
- 함수형 프로그래밍 패턴

## 🎯 학습 목표

- TypeScript에서 함수 타입을 정확하게 정의하는 방법 이해
- 함수 오버로딩을 통한 타입 안전성 확보
- 콜백 함수와 고차 함수의 타입 정의 방법 습득

## 📁 파일 구조

```
02-functions/
├── README.md           # 이 파일
├── examples/           # 예제 코드
│   ├── basic-functions.ts    # 기본 함수 타입
│   ├── pipe-compose.ts       # Pipe & Compose 함수
│   ├── function-overloading.ts # 함수 오버로딩
│   ├── function-types.ts     # 함수 타입 표현식
│   ├── callbacks.ts          # 콜백 함수
│   └── generic-functions.ts  # 제네릭 함수
├── exercises/          # 연습 문제
│   └── functions-exercise.ts
└── index.ts            # 메인 실행 파일
```

## 🔍 주요 개념

### 함수 타입 정의
```typescript
function add(a: number, b: number): number {
  return a + b;
}

const multiply: (a: number, b: number) => number = (a, b) => a * b;
```

### 함수 오버로딩
```typescript
function process(value: string): string;
function process(value: number): number;
function process(value: string | number): string | number {
  // 구현
}
```

### 콜백 함수
```typescript
function forEach<T>(array: T[], callback: (item: T, index: number) => void): void {
  array.forEach(callback);
}
```

### Pipe & Compose 함수
```typescript
// Pipe: 왼쪽에서 오른쪽으로 실행
const result = pipe(
  5,
  add(3),        // 5 + 3 = 8
  multiply(2),   // 8 * 2 = 16
  square         // 16 * 16 = 256
);

// Compose: 오른쪽에서 왼쪽으로 실행
const composed = compose(
  square,        // 마지막에 실행
  multiply(2),   // 그 다음
  add(3)         // 첫 번째로 실행
);
```
