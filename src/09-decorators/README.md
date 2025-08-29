# 09. 데코레이터 (Decorators)

TypeScript에서 데코레이터를 다루는 방법을 학습합니다.

## 📚 학습 내용

### 1. 클래스 데코레이터
- 클래스 데코레이터 정의
- 클래스 메타데이터 수정
- 클래스 생성자 조작

### 2. 메서드 데코레이터
- 메서드 데코레이터 정의
- 메서드 동작 수정
- 메서드 래핑

### 3. 속성 데코레이터
- 속성 데코레이터 정의
- 속성 메타데이터 수정
- 속성 접근 제어

### 4. 매개변수 데코레이터
- 매개변수 데코레이터 정의
- 매개변수 검증
- 매개변수 변환

### 5. 데코레이터 팩토리
- 데코레이터 팩토리 함수
- 매개변수가 있는 데코레이터
- 데코레이터 조합

## 🎯 학습 목표

- TypeScript 데코레이터의 핵심 개념 이해
- 메타프로그래밍을 통한 코드 재사용성 향상
- 데코레이터를 활용한 관심사 분리 구현

## 📁 파일 구조

```
09-decorators/
├── README.md           # 이 파일
├── examples/           # 예제 코드
│   ├── class-decorators.ts     # 클래스 데코레이터
│   ├── method-decorators.ts    # 메서드 데코레이터
│   ├── property-decorators.ts  # 속성 데코레이터
│   ├── parameter-decorators.ts # 매개변수 데코레이터
│   └── decorator-factories.ts  # 데코레이터 팩토리
├── exercises/          # 연습 문제
│   └── decorators-exercise.ts
└── index.ts            # 메인 실행 파일
```

## 🔍 주요 개념

### 클래스 데코레이터
```typescript
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
}
```

### 메서드 데코레이터
```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log(`Calling ${propertyKey} with:`, args);
    return method.apply(this, args);
  };
}

class Calculator {
  @log
  add(a: number, b: number) {
    return a + b;
  }
}
```

### 속성 데코레이터
```typescript
function readonly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false
  });
}

class User {
  @readonly
  name: string = "John";
}
```
