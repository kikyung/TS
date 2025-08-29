# 04. 클래스 (Classes)

TypeScript에서 클래스를 다루는 방법을 학습합니다.

## 📚 학습 내용

### 1. 기본 클래스 정의
- 클래스 선언과 인스턴스 생성
- 생성자 (Constructor)
- 속성과 메서드

### 2. 접근 제한자 (Access Modifiers)
- public: 공개 접근
- private: 비공개 접근
- protected: 보호된 접근
- readonly: 읽기 전용

### 3. 상속 (Inheritance)
- 클래스 상속
- 메서드 오버라이딩
- super 키워드

### 4. 추상 클래스 (Abstract Classes)
- 추상 메서드와 추상 클래스
- 추상 클래스 상속
- 인터페이스 구현

### 5. 고급 클래스 기능
- 정적 속성과 메서드
- 게터와 세터
- 데코레이터와 클래스

## 🎯 학습 목표

- TypeScript 클래스의 핵심 개념 이해
- 객체 지향 프로그래밍 원칙 적용
- 접근 제한자를 통한 캡슐화 구현

## 📁 파일 구조

```
04-classes/
├── README.md           # 이 파일
├── examples/           # 예제 코드
│   ├── basic-classes.ts        # 기본 클래스
│   ├── access-modifiers.ts     # 접근 제한자
│   ├── inheritance.ts          # 상속
│   ├── abstract-classes.ts    # 추상 클래스
│   └── advanced-features.ts   # 고급 기능
├── exercises/          # 연습 문제
│   └── classes-exercise.ts
└── index.ts            # 메인 실행 파일
```

## 🔍 주요 개념

### 기본 클래스
```typescript
class Person {
  private name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  public getName(): string {
    return this.name;
  }
}
```

### 상속
```typescript
class Employee extends Person {
  private salary: number;
  
  constructor(name: string, salary: number) {
    super(name);
    this.salary = salary;
  }
}
```

### 추상 클래스
```typescript
abstract class Animal {
  abstract makeSound(): void;
  
  move(): void {
    console.log("Moving...");
  }
}
```
