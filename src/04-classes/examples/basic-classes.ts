/**
 * 기본 클래스 (Basic Classes) 예제
 * 
 * TypeScript에서 클래스의 기본적인 사용법을 학습합니다.
 */

// 1. 기본 클래스 정의
class Person {
  // 속성 (Properties)
  private name: string;
  protected age: number;
  public email: string;
  readonly id: number;

  // 생성자 (Constructor)
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.id = Date.now();
  }

  // 메서드 (Methods)
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

console.log("=== 기본 클래스 예제 ===");
const person1 = new Person("홍길동", 25, "hong@example.com");
console.log("person1:", person1);
console.log("이름:", person1.getName());
console.log("나이:", person1.getAge());
console.log("소개:", person1.introduce());

person1.setAge(26);
console.log("나이 변경 후:", person1.getAge());
console.log();

// 2. 접근 제한자 (Access Modifiers)
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

console.log("=== 접근 제한자 예제 ===");
const account = new BankAccount("123-456-789");
console.log("계좌번호:", account.accountNumber);
account.deposit(10000);
account.deposit(5000);
console.log("잔액:", account.getBalance());
account.withdraw(3000);
console.log("출금 후 잔액:", account.getBalance());
// account.balance = 1000000; // 컴파일 에러: private 속성
console.log();

// 3. 게터와 세터 (Getters and Setters)
class Temperature {
  private _celsius: number = 0;

  constructor(celsius: number) {
    this.celsius = celsius;
  }

  // 게터 (Getter)
  get celsius(): number {
    return this._celsius;
  }

  // 세터 (Setter)
  set celsius(value: number) {
    if (value >= -273.15) { // 절대 영도 이상
      this._celsius = value;
    } else {
      throw new Error("절대 영도 이하의 온도는 설정할 수 없습니다.");
    }
  }

  // 화씨 온도 게터
  get fahrenheit(): number {
    return (this._celsius * 9/5) + 32;
  }

  // 화씨 온도 세터
  set fahrenheit(value: number) {
    this.celsius = (value - 32) * 5/9;
  }

  // 켈빈 온도 게터
  get kelvin(): number {
    return this._celsius + 273.15;
  }

  // 켈빈 온도 세터
  set kelvin(value: number) {
    this.celsius = value - 273.15;
  }
}

console.log("=== 게터와 세터 예제 ===");
const temp = new Temperature(25);
console.log("섭씨:", temp.celsius, "°C");
console.log("화씨:", temp.fahrenheit, "°F");
console.log("켈빈:", temp.kelvin, "K");

temp.fahrenheit = 86;
console.log("화씨 86°F 설정 후 섭씨:", temp.celsius, "°C");

temp.kelvin = 300;
console.log("켈빈 300K 설정 후 섭씨:", temp.celsius, "°C");
console.log();

// 4. 정적 속성과 메서드 (Static Properties and Methods)
class MathUtils {
  // 정적 속성
  static readonly PI: number = 3.14159;
  static readonly E: number = 2.71828;

  // 정적 메서드
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

console.log("=== 정적 속성과 메서드 예제 ===");
console.log("PI:", MathUtils.PI);
console.log("E:", MathUtils.E);
console.log("5 + 3 =", MathUtils.add(5, 3));
console.log("4 * 7 =", MathUtils.multiply(4, 7));
console.log("5! =", MathUtils.factorial(5));
console.log("17은 소수인가?", MathUtils.isPrime(17));
console.log("24는 소수인가?", MathUtils.isPrime(24));
console.log();

// 5. 추상 클래스 (Abstract Classes)
abstract class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  // 추상 메서드 (구현이 없는 메서드)
  abstract makeSound(): void;

  // 일반 메서드 (구현이 있는 메서드)
  move(): void {
    console.log(`${this.name}이(가) 움직입니다.`);
  }

  sleep(): void {
    console.log(`${this.name}이(가) 잠을 잡니다.`);
  }

  // 이름을 가져오는 getter 메서드
  getName(): string {
    return this.name;
  }
}

// 추상 클래스를 상속받는 구체 클래스
class Dog extends Animal {
  private breed: string;

  constructor(name: string, breed: string) {
    super(name); // 부모 클래스 생성자 호출
    this.breed = breed;
  }

  // 추상 메서드 구현
  makeSound(): void {
    console.log(`${this.name}이(가) 멍멍 짖습니다!`);
  }

  // 추가 메서드
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

  // 추상 메서드 구현
  makeSound(): void {
    console.log(`${this.name}이(가) 야옹~ 합니다!`);
  }

  // 추가 메서드
  climb(): void {
    console.log(`${this.name}이(가) 나무를 올라갑니다.`);
  }

  getColor(): string {
    return this.color;
  }
}

console.log("=== 추상 클래스 예제 ===");
const dog = new Dog("멍멍이", "골든 리트리버");
const cat = new Cat("야옹이", "치즈");

dog.makeSound();
dog.move();
dog.sleep();
dog.fetch();
console.log(`${dog.getName()}의 품종:`, dog.getBreed());

cat.makeSound();
cat.move();
cat.sleep();
cat.climb();
console.log(`${cat.getName()}의 색상:`, cat.getColor());
console.log();

export {
  Person,
  BankAccount,
  Temperature,
  MathUtils,
  Animal,
  Dog,
  Cat
};
