## 타입스크립트 정리 #4 - 클래스 (1/2)

클래스는 TypeScript에서 객체 지향 패턴을 가장 직관적으로 구현할 수 있는 도구입니다. 이번 글은 실습 코드 기준으로 핵심 개념을 압축해서 정리합니다. 블로그 연재 형식에 맞춰 2편으로 나눠 소개하고, 이번 1편에서는 다음 3가지를 다룹니다.

- 기본 클래스 구성요소: 속성, 생성자, 메서드
- 접근 제한자: public, private, protected, readonly
- 게터/세터: 캡슐화와 파생 속성 관리

---

### 1. 기본 클래스 정의

클래스는 속성, 생성자, 메서드로 구성됩니다. 접근 제한자와 `readonly`로 의도를 명확히 표현해 가독성과 안정성을 높입니다.

```typescript
class Person {
  private name: string;
  protected age: number;
  public email: string;
  readonly id: number;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.id = Date.now();
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number): void {
    if (age >= 0) {
      this.age = age;
    }
  }

  public introduce(): string {
    return `안녕하세요! 저는 ${this.name}이고, ${this.age}살입니다.`;
  }
}

const person1 = new Person("홍길동", 25, "hong@example.com");
console.log(person1.getName());   // 홍길동
console.log(person1.getAge());    // 25
console.log(person1.introduce()); // 안녕하세요! 저는 홍길동이고, 25살입니다.
```

- **private**: 클래스 내부에서만 접근 가능 (예: `name`)
- **protected**: 내부 + 자식 클래스에서 접근 가능 (예: `age`)
- **public**: 어디서든 접근 가능 (예: `email`)
- **readonly**: 재할당 불가, 생성 시점에만 설정 (예: `id`)

실무 팁: 신뢰 경계를 넘는 데이터는 `readonly`로 고정하고, 수정이 필요한 값은 `setter`를 통해 유효성 검증과 함께 변경하세요.

---

### 2. 접근 제한자 (Access Modifiers)

캡슐화를 통해 불변성과 무결성을 지키는 것이 핵심입니다. 외부에서는 비즈니스적으로 허용된 연산만 노출합니다.

```typescript
class BankAccount {
  private balance: number = 0;
  public readonly accountNumber: string;

  constructor(accountNumber: string) {
    this.accountNumber = accountNumber;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`${amount}원이 입금되었습니다.`);
    }
  }

  public withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`${amount}원이 출금되었습니다.`);
      return true;
    } else {
      console.log("잔액이 부족합니다.");
      return false;
    }
  }

  public getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount("123-456-789");
account.deposit(10000);
account.withdraw(3000);
console.log(account.getBalance()); // 7000
```

- `balance`는 외부에서 직접 수정할 수 없습니다.
- 입금/출금은 비즈니스 규칙을 통과해야만 반영됩니다.

---

### 3. 게터와 세터 (Getters / Setters)

게터/세터는 내부 표현을 숨기고, 유효성 검증과 파생 속성(화씨/켈빈)을 안전하게 제공합니다.

```typescript
class Temperature {
  private _celsius: number = 0;

  constructor(celsius: number) {
    this.celsius = celsius;
  }

  get celsius(): number {
    return this._celsius;
  }

  set celsius(value: number) {
    if (value >= -273.15) {
      this._celsius = value;
    } else {
      throw new Error("절대 영도 이하의 온도는 설정할 수 없습니다.");
    }
  }

  get fahrenheit(): number {
    return (this._celsius * 9/5) + 32;
  }

  set fahrenheit(value: number) {
    this.celsius = (value - 32) * 5/9;
  }

  get kelvin(): number {
    return this._celsius + 273.15;
  }

  set kelvin(value: number) {
    this.celsius = value - 273.15;
  }
}

const temp = new Temperature(25);
console.log(temp.fahrenheit); // 77
temp.kelvin = 300;            // 섭씨로 환산되어 내부 상태 업데이트
console.log(temp.celsius);    // 26.85...
```

- 최소 유효값(절대 영도)을 세터에서 강제하여, 내부 상태를 항상 올바르게 유지합니다.
- 화씨/켈빈은 파생 속성으로, 읽기/쓰기를 모두 지원합니다.

---

### 마무리

이번 글에서는 클래스의 뼈대와 캡슐화, 그리고 게터/세터를 통해 안전한 상태 관리를 정리했습니다.

