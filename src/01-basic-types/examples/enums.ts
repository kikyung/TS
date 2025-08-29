/**
 * 열거형 타입 (Enum Types) 예제
 * 
 * TypeScript에서 열거형을 다루는 방법을 학습합니다.
 * 열거형은 관련된 상수들의 집합을 정의합니다.
 */

// 1. 기본 열거형
enum Color {
  Red,
  Green,
  Blue
}

console.log("=== 기본 열거형 예제 ===");
console.log("Color.Red:", Color.Red);
console.log("Color.Green:", Color.Green);
console.log("Color.Blue:", Color.Blue);
console.log("Color[0]:", Color[0]);
console.log("Color[1]:", Color[1]);
console.log("Color[2]:", Color[2]);
console.log();

// 2. 명시적 값을 가진 열거형
enum Status {
  Pending = 0,
  Approved = 1,
  Rejected = 2
}

enum Direction {
  North = "NORTH",
  South = "SOUTH",
  East = "EAST",
  West = "WEST"
}

console.log("=== 명시적 값을 가진 열거형 예제 ===");
console.log("Status.Pending:", Status.Pending);
console.log("Status.Approved:", Status.Approved);
console.log("Status.Rejected:", Status.Rejected);
console.log("Direction.North:", Direction.North);
console.log("Direction.South:", Direction.South);
console.log();

// 3. 계산된 값을 가진 열거형
enum FileAccess {
  None = 0,
  Read = 1 << 0,    // 1
  Write = 1 << 1,   // 2
  ReadWrite = Read | Write  // 3
}

console.log("=== 계산된 값을 가진 열거형 예제 ===");
console.log("FileAccess.None:", FileAccess.None);
console.log("FileAccess.Read:", FileAccess.Read);
console.log("FileAccess.Write:", FileAccess.Write);
console.log("FileAccess.ReadWrite:", FileAccess.ReadWrite);
console.log();

// 4. 문자열과 숫자 혼합 열거형
enum MixedEnum {
  String = "STRING",
  Number = 42,
  Computed = "COMPUTED".length
}

console.log("=== 문자열과 숫자 혼합 열거형 예제 ===");
console.log("MixedEnum.String:", MixedEnum.String);
console.log("MixedEnum.Number:", MixedEnum.Number);
console.log("MixedEnum.Computed:", MixedEnum.Computed);
console.log();

// 5. 상수 열거형 (const enum)
const enum ConstEnum {
  A = 1,
  B = 2,
  C = 3
}

console.log("=== 상수 열거형 예제 ===");
console.log("ConstEnum.A:", ConstEnum.A);
console.log("ConstEnum.B:", ConstEnum.B);
console.log("ConstEnum.C:", ConstEnum.C);
console.log();

// 6. 열거형을 사용한 함수 매개변수
function processStatus(status: Status): string {
  switch (status) {
    case Status.Pending:
      return "대기 중";
    case Status.Approved:
      return "승인됨";
    case Status.Rejected:
      return "거부됨";
    default:
      return "알 수 없음";
  }
}

function getDirectionName(direction: Direction): string {
  switch (direction) {
    case Direction.North:
      return "북쪽";
    case Direction.South:
      return "남쪽";
    case Direction.East:
      return "동쪽";
    case Direction.West:
      return "서쪽";
    default:
      return "알 수 없음";
  }
}

console.log("=== 열거형을 사용한 함수 예제 ===");
console.log("processStatus(Status.Pending):", processStatus(Status.Pending));
console.log("processStatus(Status.Approved):", processStatus(Status.Approved));
console.log("getDirectionName(Direction.North):", getDirectionName(Direction.North));
console.log("getDirectionName(Direction.South):", getDirectionName(Direction.South));
console.log();

// 7. 열거형을 사용한 객체 속성
interface User {
  id: number;
  name: string;
  status: Status;
  favoriteColor: Color;
}

let user: User = {
  id: 1,
  name: "Alice",
  status: Status.Approved,
  favoriteColor: Color.Blue
};

console.log("=== 열거형을 사용한 객체 예제 ===");
console.log("사용자 정보:", user);
console.log("사용자 상태:", processStatus(user.status));
console.log("좋아하는 색상:", Color[user.favoriteColor]);
console.log();

// 8. 열거형을 사용한 배열
let users: User[] = [
  { id: 1, name: "Alice", status: Status.Approved, favoriteColor: Color.Blue },
  { id: 2, name: "Bob", status: Status.Pending, favoriteColor: Color.Red },
  { id: 3, name: "Charlie", status: Status.Rejected, favoriteColor: Color.Green }
];

console.log("=== 열거형을 사용한 배열 예제 ===");
users.forEach(user => {
  console.log(`${user.name}: ${processStatus(user.status)}, 좋아하는 색상: ${Color[user.favoriteColor]}`);
});
console.log();

// 9. 열거형의 실제 사용 사례
// HTTP 상태 코드
enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalServerError = 500
}

// 사용자 권한
enum UserRole {
  Guest = "GUEST",
  User = "USER",
  Moderator = "MODERATOR",
  Admin = "ADMIN"
}

console.log("=== 열거형 실제 사용 사례 예제 ===");
console.log("HTTP 상태 코드:", HttpStatus);
console.log("사용자 권한:", UserRole);
console.log();

// 10. 열거형 vs 유니온 타입
// 열거형 방식
enum LogLevel {
  Error = "ERROR",
  Warn = "WARN",
  Info = "INFO",
  Debug = "DEBUG"
}

// 유니온 타입 방식
type LogLevelUnion = "ERROR" | "WARN" | "INFO" | "DEBUG";

function logWithEnum(level: LogLevel, message: string): void {
  console.log(`[${level}] ${message}`);
}

function logWithUnion(level: LogLevelUnion, message: string): void {
  console.log(`[${level}] ${message}`);
}

console.log("=== 열거형 vs 유니온 타입 예제 ===");
logWithEnum(LogLevel.Error, "에러가 발생했습니다");
logWithUnion("WARN", "경고 메시지입니다");
console.log();

export {
  Color,
  Status,
  Direction,
  FileAccess,
  ConstEnum,
  HttpStatus,
  UserRole,
  LogLevel
};
