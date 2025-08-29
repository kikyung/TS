/**
 * ES6 모듈 (ES6 Modules) 예제
 * 
 * TypeScript에서 ES6 모듈 시스템을 다루는 방법을 학습합니다.
 */

// 1. 기본 내보내기 (Default Export)
export default class Calculator {
  private result: number = 0;

  add(a: number, b: number): number {
    this.result = a + b;
    return this.result;
  }

  subtract(a: number, b: number): number {
    this.result = a - b;
    return this.result;
  }

  multiply(a: number, b: number): number {
    this.result = a * b;
    return this.result;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("0으로 나눌 수 없습니다.");
    }
    this.result = a / b;
    return this.result;
  }

  getResult(): number {
    return this.result;
  }

  clear(): void {
    this.result = 0;
  }
}

// 2. 명명된 내보내기 (Named Export)
export const PI = 3.14159;
export const E = 2.71828;

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("0으로 나눌 수 없습니다.");
  }
  return a / b;
}

// 3. 타입과 인터페이스 내보내기
export interface MathOperation {
  (a: number, b: number): number;
  name: string;
}

export type OperationType = "add" | "subtract" | "multiply" | "divide";

export interface CalculatorConfig {
  precision: number;
  allowNegative: boolean;
  maxValue: number;
}

// 4. 유틸리티 함수들
export function roundToDecimal(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

export function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

export function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// 5. 상수 객체
export const MATH_CONSTANTS = {
  PI: 3.14159,
  E: 2.71828,
  GOLDEN_RATIO: 1.61803,
  SQRT2: 1.41421,
  SQRT3: 1.73205
} as const;

// 6. 열거형 내보내기
export enum MathOperator {
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "*",
  DIVIDE = "/"
}

// 7. 클래스 내보내기
export class AdvancedCalculator extends Calculator {
  private history: string[] = [];

  constructor() {
    super();
  }

  override add(a: number, b: number): number {
    const result = super.add(a, b);
    this.history.push(`${a} + ${b} = ${result}`);
    return result;
  }

  override subtract(a: number, b: number): number {
    const result = super.subtract(a, b);
    this.history.push(`${a} - ${b} = ${result}`);
    return result;
  }

  override multiply(a: number, b: number): number {
    const result = super.multiply(a, b);
    this.history.push(`${a} * ${b} = ${result}`);
    return result;
  }

  override divide(a: number, b: number): number {
    const result = super.divide(a, b);
    this.history.push(`${a} / ${b} = ${result}`);
    return result;
  }

  getHistory(): string[] {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}

// 8. 함수 오버로딩
export function calculate(operation: "add", a: number, b: number): number;
export function calculate(operation: "subtract", a: number, b: number): number;
export function calculate(operation: "multiply", a: number, b: number): number;
export function calculate(operation: "divide", a: number, b: number): number;
export function calculate(operation: OperationType, a: number, b: number): number {
  switch (operation) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
    default:
      throw new Error(`알 수 없는 연산: ${operation}`);
  }
}

// 9. 모듈 내부에서 사용하는 private 함수 (내보내지 않음)
// function validateNumber(value: number): boolean {
//   return !isNaN(value) && isFinite(value);
// }

// 10. 모듈 초기화
console.log("=== ES6 모듈 예제 ===");
console.log("PI:", PI);
console.log("E:", E);
console.log("MATH_CONSTANTS:", MATH_CONSTANTS);
console.log("MathOperator.ADD:", MathOperator.ADD);

const calc = new Calculator();
console.log("5 + 3 =", calc.add(5, 3));
console.log("10 - 4 =", calc.subtract(10, 4));
console.log("6 * 7 =", calc.multiply(6, 7));
console.log("15 / 3 =", calc.divide(15, 3));

const advancedCalc = new AdvancedCalculator();
advancedCalc.add(10, 20);
advancedCalc.multiply(5, 6);
console.log("계산 히스토리:", advancedCalc.getHistory());

console.log("calculate('add', 100, 200):", calculate('add', 100, 200));
console.log("calculate('multiply', 12, 8):", calculate('multiply', 12, 8));
console.log();

// 11. 모듈 메타데이터
export const MODULE_INFO = {
  name: "Math Module",
  version: "1.0.0",
  author: "TypeScript Learning",
  description: "수학 연산을 위한 모듈"
};

// 12. 조건부 내보내기 (주석 처리)
// const isDevelopment = process.env['NODE_ENV'] === 'development';

// if (isDevelopment) {
//   export function debugLog(message: string): void {
//     console.log(`[DEBUG] ${message}`);
//   }
// }

// 13. 모든 것을 하나의 객체로 내보내기
export const MathUtils = {
  add,
  subtract,
  multiply,
  divide,
  roundToDecimal,
  isPrime,
  factorial,
  calculate,
  constants: MATH_CONSTANTS,
  operators: MathOperator
};
