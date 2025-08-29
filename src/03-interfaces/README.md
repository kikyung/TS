# 03. 인터페이스 (Interfaces)

TypeScript에서 인터페이스를 다루는 방법을 학습합니다.

## 📚 학습 내용

### 1. 기본 인터페이스 정의
- 객체 타입 정의
- 선택적 속성 (Optional Properties)
- 읽기 전용 속성 (Readonly Properties)

### 2. 인터페이스 확장
- 인터페이스 상속
- 다중 인터페이스 확장
- 인터페이스 합치기

### 3. 함수 타입 인터페이스
- 함수 시그니처 정의
- 메서드 정의
- 인덱스 시그니처

### 4. 클래스 인터페이스
- 클래스 구현 (implements)
- 인터페이스 vs 추상 클래스

### 5. 고급 인터페이스 패턴
- 제네릭 인터페이스
- 조건부 타입과 인터페이스
- 유틸리티 타입과 인터페이스

## 🎯 학습 목표

- TypeScript 인터페이스의 핵심 개념 이해
- 객체 지향 프로그래밍에서 인터페이스 활용 방법 습득
- 타입 안전성을 위한 인터페이스 설계 능력 향상

## 📁 파일 구조

```
03-interfaces/
├── README.md           # 이 파일
├── examples/           # 예제 코드
│   ├── basic-interfaces.ts     # 기본 인터페이스
│   ├── interface-extensions.ts # 인터페이스 확장
│   ├── function-interfaces.ts  # 함수 타입 인터페이스
│   ├── class-interfaces.ts     # 클래스 인터페이스
│   └── advanced-patterns.ts    # 고급 패턴
├── exercises/          # 연습 문제
│   └── interfaces-exercise.ts
└── index.ts            # 메인 실행 파일
```

## 🔍 주요 개념

### 기본 인터페이스
```typescript
interface User {
  id: number;
  name: string;
  email?: string;        // 선택적 속성
  readonly createdAt: Date; // 읽기 전용
}
```

### 인터페이스 확장
```typescript
interface Employee extends User {
  department: string;
  salary: number;
}
```

### 함수 타입 인터페이스
```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```
