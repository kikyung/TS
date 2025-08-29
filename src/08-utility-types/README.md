# 08. 유틸리티 타입 (Utility Types)

TypeScript의 내장 유틸리티 타입들을 학습합니다.

## 📚 학습 내용

### 1. 기본 유틸리티 타입
- Partial<T>: 모든 속성을 선택적으로
- Required<T>: 모든 속성을 필수로
- Readonly<T>: 모든 속성을 읽기 전용으로

### 2. 속성 조작 유틸리티 타입
- Pick<T, K>: 특정 속성만 선택
- Omit<T, K>: 특정 속성 제외
- Record<K, T>: 키-값 타입 매핑

### 3. 함수 관련 유틸리티 타입
- ReturnType<T>: 함수 반환 타입
- Parameters<T>: 함수 매개변수 타입
- ConstructorParameters<T>: 생성자 매개변수 타입

### 4. 고급 유틸리티 타입
- Exclude<T, U>: 타입에서 특정 타입 제외
- Extract<T, U>: 타입에서 특정 타입 추출
- NonNullable<T>: null과 undefined 제거

### 5. 조건부 유틸리티 타입
- ThisType<T>: this 컨텍스트 타입
- InstanceType<T>: 클래스 인스턴스 타입
- Awaited<T>: Promise 해결 타입

## 🎯 학습 목표

- TypeScript 내장 유틸리티 타입의 활용법 이해
- 복잡한 타입 변환을 유틸리티 타입으로 간소화
- 타입 안전성을 높이는 유틸리티 타입 조합 방법 습득

## 📁 파일 구조

```
08-utility-types/
├── README.md           # 이 파일
├── examples/           # 예제 코드
│   ├── basic-utilities.ts      # 기본 유틸리티 타입
│   ├── property-utilities.ts   # 속성 조작 유틸리티 타입
│   ├── function-utilities.ts   # 함수 관련 유틸리티 타입
│   ├── advanced-utilities.ts   # 고급 유틸리티 타입
│   └── conditional-utilities.ts # 조건부 유틸리티 타입
├── exercises/          # 연습 문제
│   └── utility-types-exercise.ts
└── index.ts            # 메인 실행 파일
```

## 🔍 주요 개념

### 기본 유틸리티 타입
```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;        // 모든 속성이 선택적
type RequiredUser = Required<User>;      // 모든 속성이 필수
type ReadonlyUser = Readonly<User>;      // 모든 속성이 읽기 전용
```

### 속성 조작 유틸리티 타입
```typescript
type UserId = Pick<User, 'id'>;          // id 속성만 선택
type UserWithoutId = Omit<User, 'id'>;   // id 속성 제외
type UserMap = Record<string, User>;     // 문자열 키에 User 값
```

### 함수 관련 유틸리티 타입
```typescript
type UserCreator = (name: string, email: string) => User;
type UserReturnType = ReturnType<UserCreator>;    // User
type UserParams = Parameters<UserCreator>;        // [string, string]
```
