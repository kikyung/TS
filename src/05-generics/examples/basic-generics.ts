/**
 * 기본 제네릭 (Basic Generics) 예제
 * 
 * TypeScript에서 제네릭의 기본적인 사용법을 학습합니다.
 */

// 1. 제네릭 함수 (Generic Functions)
function identity<T>(arg: T): T {
  return arg;
}

function firstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

function lastElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
}

console.log("=== 제네릭 함수 예제 ===");
console.log("identity<string>('hello'):", identity<string>('hello'));
console.log("identity<number>(42):", identity<number>(42));
console.log("identity<boolean>(true):", identity<boolean>(true));

// 타입 추론을 통한 사용
console.log("identity('world'):", identity('world'));
console.log("identity(100):", identity(100));

const stringArray = ["apple", "banana", "cherry"];
const numberArray = [1, 2, 3, 4, 5];

console.log("firstElement(stringArray):", firstElement(stringArray));
console.log("lastElement(numberArray):", lastElement(numberArray));
console.log();

// 2. 제네릭 인터페이스 (Generic Interfaces)
interface Container<T> {
  value: T;
  getValue(): T;
  setValue(value: T): void;
}

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  timestamp: Date;
}

console.log("=== 제네릭 인터페이스 예제 ===");
const stringContainer: Container<string> = {
  value: "Hello",
  getValue() {
    return this.value;
  },
  setValue(value: string) {
    this.value = value;
  }
};

const numberContainer: Container<number> = {
  value: 42,
  getValue() {
    return this.value;
  },
  setValue(value: number) {
    this.value = value;
  }
};

console.log("stringContainer.getValue():", stringContainer.getValue());
stringContainer.setValue("World");
console.log("stringContainer.getValue() after setValue:", stringContainer.getValue());

console.log("numberContainer.getValue():", numberContainer.getValue());
numberContainer.setValue(100);
console.log("numberContainer.getValue() after setValue:", numberContainer.getValue());

const keyValuePair: KeyValuePair<string, number> = {
  key: "age",
  value: 25
};

console.log("keyValuePair:", keyValuePair);

const apiResponse: ApiResponse<string[]> = {
  success: true,
  data: ["item1", "item2", "item3"],
  message: "데이터 조회 성공",
  timestamp: new Date()
};

console.log("apiResponse:", apiResponse);
console.log();

// 3. 제네릭 클래스 (Generic Classes)
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items.length > 0 ? this.items[this.items.length - 1] : undefined;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

  toArray(): T[] {
    return [...this.items];
  }
}

class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  front(): T | undefined {
    return this.items.length > 0 ? this.items[0] : undefined;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

  toArray(): T[] {
    return [...this.items];
  }
}

console.log("=== 제네릭 클래스 예제 ===");
const stringStack = new Stack<string>();
stringStack.push("first");
stringStack.push("second");
stringStack.push("third");

console.log("stringStack.size():", stringStack.size());
console.log("stringStack.peek():", stringStack.peek());
console.log("stringStack.pop():", stringStack.pop());
console.log("stringStack.toArray():", stringStack.toArray());

const numberQueue = new Queue<number>();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);

console.log("numberQueue.size():", numberQueue.size());
console.log("numberQueue.front():", numberQueue.front());
console.log("numberQueue.dequeue():", numberQueue.dequeue());
console.log("numberQueue.toArray():", numberQueue.toArray());
console.log();

// 4. 제네릭 제약 조건 (Generic Constraints)
interface Lengthwise {
  length: number;
}

function loggingLength<T extends Lengthwise>(arg: T): T {
  console.log(`길이: ${arg.length}`);
  return arg;
}

interface HasId {
  id: number;
}

interface HasName {
  name: string;
}

function processEntity<T extends HasId & HasName>(entity: T): void {
  console.log(`ID: ${entity.id}, 이름: ${entity.name}`);
}

console.log("=== 제네릭 제약 조건 예제 ===");
console.log("loggingLength('hello'):", loggingLength('hello'));
console.log("loggingLength([1, 2, 3, 4, 5]):", loggingLength([1, 2, 3, 4, 5]));
console.log("loggingLength({ length: 10, value: 'test' }):", loggingLength({ length: 10, value: 'test' }));

const user = { id: 1, name: "홍길동", email: "hong@example.com" };
const product = { id: 100, name: "노트북", price: 1000000 };

processEntity(user);
processEntity(product);
console.log();

// 5. 제네릭 기본값 (Generic Defaults)
interface DefaultContainer<T = string> {
  value: T;
  getValue(): T;
}

interface NumberContainer extends DefaultContainer<number> {
  increment(): void;
  decrement(): void;
}

console.log("=== 제네릭 기본값 예제 ===");
const defaultContainer: DefaultContainer = {
  value: "기본값",
  getValue() {
    return this.value;
  }
};

const numberContainer2: NumberContainer = {
  value: 0,
  getValue() {
    return this.value;
  },
  increment() {
    this.value++;
  },
  decrement() {
    this.value--;
  }
};

console.log("defaultContainer.getValue():", defaultContainer.getValue());
console.log("numberContainer2.getValue():", numberContainer2.getValue());
numberContainer2.increment();
numberContainer2.increment();
console.log("numberContainer2.getValue() after increment:", numberContainer2.getValue());
numberContainer2.decrement();
console.log("numberContainer2.getValue() after decrement:", numberContainer2.getValue());
console.log();

// 6. 제네릭 유틸리티 함수
function createArray<T>(length: number, value: T): T[] {
  return Array(length).fill(value);
}

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}

console.log("=== 제네릭 유틸리티 함수 예제 ===");
console.log("createArray(3, 'hello'):", createArray(3, 'hello'));
console.log("createArray(5, 42):", createArray(5, 42));

const tuple: [string, number] = ["hello", 42];
console.log("원본 tuple:", tuple);
console.log("swap(tuple):", swap(tuple));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray(numbers, n => n % 2 === 0);
const oddNumbers = filterArray(numbers, n => n % 2 === 1);

console.log("원본 배열:", numbers);
console.log("짝수만:", evenNumbers);
console.log("홀수만:", oddNumbers);

const strings = ["apple", "banana", "cherry", "date", "elderberry"];
const longStrings = filterArray(strings, s => s.length > 5);
console.log("원본 문자열 배열:", strings);
console.log("5글자 초과 문자열:", longStrings);
console.log();

export {
  identity,
  firstElement,
  lastElement,
  Container,
  KeyValuePair,
  ApiResponse,
  Stack,
  Queue,
  loggingLength,
  processEntity,
  DefaultContainer,
  NumberContainer,
  createArray,
  swap,
  filterArray
};
