# 06. 고급 타입 (Advanced Types)

TypeScript의 고급 타입 기능들을 학습합니다.

## 📚 학습 내용

### 1. 유니온 타입 (Union Types)
- 유니온 타입 정의
- 타입 가드 (Type Guards)
- 구별된 유니온 (Discriminated Unions)

### 2. 교차 타입 (Intersection Types)
- 타입 결합
- 인터페이스 확장
- 유틸리티 타입과의 조합

### 3. 조건부 타입 (Conditional Types)
- extends 키워드
- 조건부 타입 추론
- 분배 조건부 타입

### 4. 매핑된 타입 (Mapped Types)
- 속성 매핑
- 조건부 매핑
- 템플릿 리터럴 타입

### 5. 템플릿 리터럴 타입
- 문자열 리터럴 타입
- 템플릿 리터럴 타입
- 조건부 문자열 타입

## 🎯 학습 목표

- TypeScript의 고급 타입 시스템 이해
- 복잡한 타입 관계를 표현하는 방법 습득
- 타입 안전성을 극대화하는 고급 기법 활용

## 📁 파일 구조

```
06-advanced-types/
├── README.md           # 이 파일
├── examples/           # 예제 코드
│   ├── union-types.ts          # 유니온 타입
│   ├── intersection-types.ts   # 교차 타입
│   ├── conditional-types.ts    # 조건부 타입
│   ├── mapped-types.ts         # 매핑된 타입
│   └── template-literals.ts    # 템플릿 리터럴 타입
├── exercises/          # 연습 문제
│   └── advanced-types-exercise.ts
└── index.ts            # 메인 실행 파일
```

## 🔍 주요 개념

### 유니온 타입
```typescript
type StringOrNumber = string | number;

function processValue(value: StringOrNumber): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toString();
  }
}
```

### 교차 타입
```typescript
type Person = { name: string } & { age: number };

interface HasId { id: number }
interface HasName { name: string }
type Employee = HasId & HasName;
```

### 조건부 타입
```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
```
