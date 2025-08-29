# 01. 기본 타입 (Basic Types)

TypeScript의 기본 타입들을 학습합니다.

## 📚 학습 내용

### 1. Primitive Types
- `string`: 문자열
- `number`: 숫자 (정수, 실수)
- `boolean`: 불린값
- `null` & `undefined`: null과 undefined 타입

### 2. Array Types
- `string[]`: 문자열 배열
- `Array<number>`: 숫자 배열 (제네릭 문법)

### 3. Tuple Types
- `[string, number]`: 고정된 길이와 타입의 배열

### 4. Enum Types
- `enum Color`: 열거형 타입

### 5. Any & Unknown
- `any`: 모든 타입 허용 (사용 지양)
- `unknown`: 타입 안전한 any

### 6. Void & Never
- `void`: 반환값이 없는 함수
- `never`: 절대 발생하지 않는 값

## 🎯 학습 목표

- TypeScript의 기본 타입 시스템 이해
- 각 타입의 특징과 사용법 파악
- 타입 안전성을 위한 적절한 타입 선택

## 📁 파일 구조

```
01-basic-types/
├── README.md           # 이 파일
├── examples/           # 예제 코드
│   ├── primitive.ts    # 기본 타입 예제
│   ├── arrays.ts       # 배열 타입 예제
│   ├── tuples.ts       # 튜플 타입 예제
│   ├── enums.ts        # 열거형 예제
│   └── special.ts      # 특수 타입 예제
├── exercises/          # 연습 문제
│   └── basic-types-exercise.ts
└── index.ts            # 메인 실행 파일
```
