/**
 * TypeScript 학습 프로젝트 메인 실행 파일
 * 
 * 각 개념별 학습 모듈을 순차적으로 실행합니다.
 */

console.log("🚀 TypeScript 학습 프로젝트 시작!");
console.log("=".repeat(50));

// 01. 기본 타입 학습
console.log("\n📚 01. 기본 타입 (Basic Types) 학습");
console.log("-".repeat(30));
import './01-basic-types';

// 02. 함수 타입 학습
console.log("\n📚 02. 함수 (Functions) 학습");
console.log("-".repeat(30));
import './02-functions';

// 03. 인터페이스 학습
console.log("\n📚 03. 인터페이스 (Interfaces) 학습");
console.log("-".repeat(30));
import './03-interfaces';

// 04. 클래스 학습
console.log("\n📚 04. 클래스 (Classes) 학습");
console.log("-".repeat(30));
import './04-classes';

// 05. 제네릭 학습
console.log("\n📚 05. 제네릭 (Generics) 학습");
console.log("-".repeat(30));
import './05-generics';

// 06. 고급 타입 학습
console.log("\n📚 06. 고급 타입 (Advanced Types) 학습");
console.log("-".repeat(30));
import './06-advanced-types';

// 07. 모듈 학습
console.log("\n📚 07. 모듈 (Modules) 학습");
console.log("-".repeat(30));
import './07-modules';

// 08. 유틸리티 타입 학습
console.log("\n📚 08. 유틸리티 타입 (Utility Types) 학습");
console.log("-".repeat(30));
import './08-utility-types';

// 09. 데코레이터 학습
console.log("\n📚 09. 데코레이터 (Decorators) 학습");
console.log("-".repeat(30));
import './09-decorators';

// 10. 실용적인 예제 학습
console.log("\n📚 10. 실용적인 예제 (Practical Examples) 학습");
console.log("-".repeat(30));
import './10-practical-examples';

console.log("\n🎉 모든 학습 모듈 완료!");
console.log("=".repeat(50));
console.log("\n💡 다음 단계:");
console.log("1. src/01-basic-types/exercises/ 폴더의 연습 문제 풀기");
console.log("2. src/02-functions/exercises/ 폴더의 연습 문제 풀기");
console.log("3. 각 폴더의 README.md 파일 읽기");
console.log("4. 예제 코드 수정하고 실험해보기");
console.log("\n🔧 명령어:");
console.log("- npm run dev: 개발 모드로 실행");
console.log("- npm run build: TypeScript 컴파일");
console.log("- npm start: 컴파일된 코드 실행");
