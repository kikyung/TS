/**
 * 튜플 타입 (Tuple Types) 예제
 * 
 * TypeScript에서 튜플을 다루는 방법을 학습합니다.
 * 튜플은 고정된 길이와 타입을 가진 배열입니다.
 */

// 1. 기본 튜플 타입
let nameAndAge: [string, number] = ["홍길동", 25];
let coordinates: [number, number] = [10, 20];
let rgbColor: [number, number, number] = [255, 128, 0];

console.log("=== 기본 튜플 타입 예제 ===");
console.log("nameAndAge:", nameAndAge);
console.log("coordinates:", coordinates);
console.log("rgbColor:", rgbColor);
console.log();

// 2. 튜플 요소 접근
console.log("=== 튜플 요소 접근 예제 ===");
console.log("이름:", nameAndAge[0]);
console.log("나이:", nameAndAge[1]);
console.log("X 좌표:", coordinates[0]);
console.log("Y 좌표:", coordinates[1]);
console.log("빨강:", rgbColor[0]);
console.log("초록:", rgbColor[1]);
console.log("파랑:", rgbColor[2]);
console.log();

// 3. 튜플 요소 수정
nameAndAge[0] = "김철수";
nameAndAge[1] = 30;
coordinates[0] = 15;
coordinates[1] = 25;

console.log("=== 튜플 요소 수정 예제 ===");
console.log("수정된 nameAndAge:", nameAndAge);
console.log("수정된 coordinates:", coordinates);
console.log();

// 4. 읽기 전용 튜플 (Readonly Tuple)
let readonlyTuple: readonly [string, number] = ["읽기전용", 100];
// readonlyTuple[0] = "수정불가"; // 컴파일 에러: 읽기 전용

console.log("=== 읽기 전용 튜플 예제 ===");
console.log("readonlyTuple:", readonlyTuple);
console.log("첫 번째 요소:", readonlyTuple[0]);
console.log();

// 5. 선택적 요소가 있는 튜플
let optionalTuple: [string, number?] = ["필수", 42];
let optionalTuple2: [string, number?] = ["필수만"];

console.log("=== 선택적 요소 튜플 예제 ===");
console.log("optionalTuple:", optionalTuple);
console.log("optionalTuple2:", optionalTuple2);
console.log();

// 6. 나머지 요소가 있는 튜플
let restTuple: [string, number, ...string[]] = ["첫번째", 1, "추가1", "추가2", "추가3"];

console.log("=== 나머지 요소 튜플 예제 ===");
console.log("restTuple:", restTuple);
console.log("첫 번째:", restTuple[0]);
console.log("두 번째:", restTuple[1]);
console.log("나머지 요소들:", restTuple.slice(2));
console.log();

// 7. 복잡한 튜플 타입
type Point3D = [number, number, number];
type PersonInfo = [string, number, string]; // [이름, 나이, 직업]

let point3D: Point3D = [10, 20, 30];
let personInfo: PersonInfo = ["Alice", 25, "Engineer"];

console.log("=== 복잡한 튜플 타입 예제 ===");
console.log("3D 점:", point3D);
console.log("사람 정보:", personInfo);
console.log();

// 8. 튜플을 사용한 함수 반환값
function getUserInfo(): [string, number, string] {
  return ["Bob", 30, "Designer"];
}

function getCoordinates(): [number, number] {
  return [Math.random() * 100, Math.random() * 100];
}

console.log("=== 튜플 함수 반환값 예제 ===");
console.log("사용자 정보:", getUserInfo());
console.log("랜덤 좌표:", getCoordinates());
console.log();

// 9. 튜플 구조 분해 (Destructuring)
let [name, age] = nameAndAge;
let [x, y] = coordinates;
let [r, g, b] = rgbColor;

console.log("=== 튜플 구조 분해 예제 ===");
console.log("구조 분해된 이름:", name);
console.log("구조 분해된 나이:", age);
console.log("구조 분해된 X:", x);
console.log("구조 분해된 Y:", y);
console.log("구조 분해된 R:", r);
console.log("구조 분해된 G:", g);
console.log("구조 분해된 B:", b);
console.log();

// 10. 튜플의 실제 사용 사례
// API 응답 데이터
type ApiResponse = [boolean, string, any?];
let successResponse: ApiResponse = [true, "성공", { data: "결과" }];
let errorResponse: ApiResponse = [false, "에러 발생"];

console.log("=== 튜플 실제 사용 사례 예제 ===");
console.log("성공 응답:", successResponse);
console.log("에러 응답:", errorResponse);
console.log();

// 11. 튜플 vs 배열의 차이점
let tuple: [string, number] = ["hello", 10];
let array: (string | number)[] = ["hello", 10];

console.log("=== 튜플 vs 배열 차이점 예제 ===");
console.log("튜플:", tuple);
console.log("배열:", array);

// 튜플은 정확한 길이와 타입 순서를 보장
// array.push("world"); // 배열은 길이 제한 없음
// tuple.push("world"); // 튜플도 push는 가능하지만 타입 안전성은 떨어짐

export {
  nameAndAge,
  coordinates,
  rgbColor,
  point3D,
  personInfo
};
