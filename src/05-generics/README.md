# 05. 제네릭 (Generics)

TypeScript에서 제네릭을 다루는 방법을 학습합니다.

## 📚 학습 내용

### 1. 기본 제네릭
- 제네릭 함수
- 제네릭 인터페이스
- 제네릭 클래스

### 2. 제네릭 제약 조건
- extends 키워드
- 제네릭 타입 제한
- 여러 제약 조건

### 3. 제네릭 유틸리티
- 제네릭 함수 오버로딩
- 제네릭 타입 추론
- 제네릭 기본값

### 4. 고급 제네릭 패턴
- 조건부 타입
- 매핑된 타입
- 템플릿 리터럴 타입

### 5. 실용적 제네릭 사용
- API 응답 타입
- 상태 관리
- 이벤트 핸들러

## 🎯 학습 목표

- TypeScript 제네릭의 핵심 개념 이해
- 타입 안전성을 유지하면서 재사용 가능한 코드 작성
- 복잡한 타입 관계를 제네릭으로 표현하는 방법 습득

## 📁 파일 구조

```
05-generics/
├── README.md           # 이 파일
├── examples/           # 예제 코드
│   ├── basic-generics.ts       # 기본 제네릭
│   ├── generic-constraints.ts  # 제네릭 제약 조건
│   ├── generic-utilities.ts    # 제네릭 유틸리티
│   ├── advanced-patterns.ts    # 고급 패턴
│   └── practical-usage.ts      # 실용적 사용
├── exercises/          # 연습 문제
│   └── generics-exercise.ts
└── index.ts            # 메인 실행 파일
```

## 🔍 주요 개념

### 기본 제네릭
```typescript
function identity<T>(arg: T): T {
  return arg;
}

interface Container<T> {
  value: T;
  getValue(): T;
}
```

### 제네릭 제약 조건
```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

### 제네릭 클래스
```typescript
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
```
