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
