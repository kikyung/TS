## 타입스크립트 정리 #4 - 클래스 (2/2)

2편에서는 확장성과 재사용성을 높이는 두 가지를 다룹니다.

- 정적 속성과 메서드: 상태 없는 범용 유틸리티, 공용 상수 정의
- 추상 클래스: 공통 골격과 계약을 강제해 일관성 확보

---

### 4. 정적 속성과 메서드 (Static)

클래스 레벨에 존재하므로 인스턴스 없이 접근합니다. 순수 함수 유틸리티, 공용 상수, 팩토리 등에 적합합니다.

```typescript
class MathUtils {
  static readonly PI: number = 3.14159;
  static readonly E: number = 2.71828;

  static add(a: number, b: number): number {
    return a + b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static factorial(n: number): number {
    if (n <= 1) return 1;
    return n * MathUtils.factorial(n - 1);
  }

  static isPrime(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
}

console.log(MathUtils.PI);          // 3.14159
console.log(MathUtils.add(5, 3));   // 8
console.log(MathUtils.factorial(5)); // 120
```

- 인스턴스 상태에 의존하지 않는 계산/상수는 `static`으로 분리하세요.
- 테스트가 쉬워지고, 의존성 주입 없이도 재사용할 수 있습니다.

---

### 5. 추상 클래스 (Abstract Class)

공통 구현은 제공하되, 특정 메서드는 반드시 자식에서 구현하도록 강제합니다. 도메인의 공통 동작과 변하는 동작을 명확히 분리할 때 유용합니다.

```typescript
abstract class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void; // 자식이 반드시 구현

  move(): void {
    console.log(`${this.name}이(가) 움직입니다.`);
  }

  sleep(): void {
    console.log(`${this.name}이(가) 잠을 잡니다.`);
  }

  getName(): string {
    return this.name;
  }
}

class Dog extends Animal {
  private breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  makeSound(): void {
    console.log(`${this.name}이(가) 멍멍 짖습니다!`);
  }

  fetch(): void {
    console.log(`${this.name}이(가) 공을 가져옵니다.`);
  }

  getBreed(): string {
    return this.breed;
  }
}

class Cat extends Animal {
  private color: string;

  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }

  makeSound(): void {
    console.log(`${this.name}이(가) 야옹~ 합니다!`);
  }

  climb(): void {
    console.log(`${this.name}이(가) 나무를 올라갑니다.`);
  }

  getColor(): string {
    return this.color;
  }
}

const dog = new Dog("멍멍이", "골든 리트리버");
dog.makeSound();
dog.move();
dog.sleep();
dog.fetch();
console.log(dog.getBreed());

const cat = new Cat("야옹이", "치즈");
cat.makeSound();
cat.move();
cat.sleep();
cat.climb();
console.log(cat.getColor());
```

- 공통 행위(`move`, `sleep`)는 부모에서 제공, 변하는 행위(`makeSound`)만 자식에서 강제 구현.
- 타입 안전성과 가독성이 올라가며, 확장에도 열려 있는 구조를 만들 수 있습니다.

---

### 마무리

정적 멤버는 인스턴스와 무관한 지식과 연산을 모으는 데 적합하고, 추상 클래스는 변화 가능 지점을 명확히 드러내며 설계 일관성을 보장합니다.
