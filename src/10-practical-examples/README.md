# 10. 실용적인 예제 (Practical Examples)

TypeScript를 실제 프로젝트에서 활용하는 방법을 학습합니다.

## 📚 학습 내용

### 1. API 클라이언트
- HTTP 클라이언트 타입 정의
- API 응답 타입 처리
- 에러 핸들링

### 2. 상태 관리
- Redux 스타일 상태 관리
- React 상태 관리
- 전역 상태 타입 정의

### 3. 폼 검증
- 폼 데이터 타입 정의
- 검증 규칙 타입
- 에러 메시지 타입

### 4. 이벤트 시스템
- 이벤트 타입 정의
- 이벤트 핸들러 타입
- 커스텀 이벤트

### 5. 데이터베이스 모델
- 엔티티 타입 정의
- 쿼리 결과 타입
- 관계 타입 정의

## 🎯 학습 목표

- 실제 프로젝트에서 TypeScript 활용 방법 습득
- 타입 안전성을 갖춘 실용적인 코드 작성
- 복잡한 비즈니스 로직의 타입 정의 방법 이해

## 📁 파일 구조

```
10-practical-examples/
├── README.md           # 이 파일
├── examples/           # 예제 코드
│   ├── api-client.ts           # API 클라이언트
│   ├── state-management.ts     # 상태 관리
│   ├── form-validation.ts      # 폼 검증
│   ├── event-system.ts         # 이벤트 시스템
│   └── database-models.ts      # 데이터베이스 모델
├── exercises/          # 연습 문제
│   └── practical-examples-exercise.ts
└── index.ts            # 메인 실행 파일
```

## 🔍 주요 개념

### API 클라이언트
```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

class ApiClient {
  async get<T>(url: string): Promise<ApiResponse<T>> {
    // HTTP GET 요청 구현
  }
}
```

### 상태 관리
```typescript
interface AppState {
  user: User | null;
  posts: Post[];
  loading: boolean;
}

type AppAction = 
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_POSTS'; payload: Post[] }
  | { type: 'SET_LOADING'; payload: boolean };
```

### 폼 검증
```typescript
interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

interface ValidationErrors {
  [key: string]: string[];
}
```
