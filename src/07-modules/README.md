# 07. 모듈 (Modules)

TypeScript에서 모듈 시스템을 다루는 방법을 학습합니다.

## 📚 학습 내용

### 1. ES6 모듈
- import/export 문법
- 기본 내보내기 (Default Export)
- 명명된 내보내기 (Named Export)

### 2. 모듈 타입
- 모듈 선언
- 모듈 확장
- 모듈 병합

### 3. 네임스페이스 (Namespaces)
- 네임스페이스 정의
- 네임스페이스 확장
- 네임스페이스 vs 모듈

### 4. 모듈 해석
- 모듈 해석 전략
- 경로 매핑
- 베이스 URL

### 5. 고급 모듈 패턴
- 동적 import
- 모듈 재내보내기
- 순환 의존성

## 🎯 학습 목표

- TypeScript 모듈 시스템의 핵심 개념 이해
- ES6 모듈과 네임스페이스의 차이점 파악
- 모듈 기반 코드 구조화 방법 습득

## 📁 파일 구조

```
07-modules/
├── README.md           # 이 파일
├── examples/           # 예제 코드
│   ├── es6-modules.ts          # ES6 모듈
│   ├── module-types.ts         # 모듈 타입
│   ├── namespaces.ts           # 네임스페이스
│   ├── module-resolution.ts    # 모듈 해석
│   └── advanced-patterns.ts   # 고급 패턴
├── exercises/          # 연습 문제
│   └── modules-exercise.ts
└── index.ts            # 메인 실행 파일
```

## 🔍 주요 개념

### ES6 모듈
```typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export default class Calculator {
  // ...
}

// main.ts
import Calculator, { add } from './math';
```

### 네임스페이스
```typescript
namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean;
  }
}

namespace Validation {
  export class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
      return s.includes('@');
    }
  }
}
```

### 모듈 확장
```typescript
declare module 'express' {
  interface Request {
    user?: User;
  }
}
```
