# TypeScript vs Java: 열거형(Enum) 완벽 가이드

## 들어가며

열거형(Enum)은 프로그래밍에서 관련된 상수들을 그룹화하여 관리하는 중요한 개념입니다. TypeScript와 Java는 모두 열거형을 지원하지만, 각각의 언어에서 구현 방식과 특징이 다릅니다. 이 글에서는 두 언어의 열거형을 비교 분석하고, 각각의 장단점과 사용 사례를 살펴보겠습니다.

## 1. 기본 열거형 정의

### TypeScript 열거형

```typescript
enum Color {
  Red,
  Green,
  Blue
}

console.log(Color.Red);    // 0
console.log(Color.Green);  // 1
console.log(Color.Blue);   // 2
```

### Java 열거형

```java
public enum Color {
  RED,
  GREEN,
  BLUE
}

System.out.println(Color.RED);    // RED
System.out.println(Color.GREEN);  // GREEN
System.out.println(Color.BLUE);   // BLUE
```

**주요 차이점:**
- **TypeScript**: 자동으로 0부터 시작하는 숫자 값 할당
- **Java**: 상수명 자체가 값으로 사용됨

## 2. 명시적 값 할당

### TypeScript

```typescript
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
```

### Java

```java
public enum Status {
  PENDING(0),
  APPROVED(1),
  REJECTED(2);
  
  private final int value;
  
  Status(int value) {
    this.value = value;
  }
  
  public int getValue() {
    return value;
  }
}

public enum Direction {
  NORTH("NORTH"),
  SOUTH("SOUTH"),
  EAST("EAST"),
  WEST("WEST");
  
  private final String value;
  
  Direction(String value) {
    this.value = value;
  }
  
  public String getValue() {
    return value;
  }
}
```

**주요 차이점:**
- **TypeScript**: 간단한 키-값 할당
- **Java**: 생성자와 private 필드를 통한 복잡한 구조

## 3. 계산된 값과 비트 연산

### TypeScript

```typescript
enum FileAccess {
  None = 0,
  Read = 1 << 0,        // 1
  Write = 1 << 1,       // 2
  ReadWrite = Read | Write  // 3
}

console.log(FileAccess.ReadWrite); // 3
```

### Java

```java
public enum FileAccess {
  NONE(0),
  READ(1 << 0),         // 1
  WRITE(1 << 1),        // 2
  READ_WRITE((1 << 0) | (1 << 1)); // 3
  
  private final int value;
  
  FileAccess(int value) {
    this.value = value;
  }
  
  public int getValue() {
    return value;
  }
}
```

## 4. 문자열과 숫자 혼합

### TypeScript

```typescript
enum MixedEnum {
  String = "STRING",
  Number = 42,
  Computed = "COMPUTED".length  // 8
}
```

### Java

```java
public enum MixedEnum {
  STRING("STRING"),
  NUMBER(42),
  COMPUTED("COMPUTED".length()); // 컴파일 에러!
  
  private final Object value;
  
  MixedEnum(Object value) {
    this.value = value;
  }
}
```

**주요 차이점:**
- **TypeScript**: 런타임 계산 가능
- **Java**: 컴파일 타임에 상수 값이 결정되어야 함

## 5. 상수 열거형 (TypeScript 전용)

```typescript
const enum ConstEnum {
  A = 1,
  B = 2,
  C = 3
}

// 컴파일 시 인라인으로 대체됨
console.log(ConstEnum.A); // console.log(1)로 컴파일됨
```

**특징:**
- 런타임에 열거형 객체가 생성되지 않음
- 성능 최적화에 유리
- Java에는 해당 개념이 없음

## 6. 메서드와 속성

### Java (풍부한 기능)

```java
public enum Planet {
  MERCURY(3.303e+23, 2.4397e6),
  VENUS(4.869e+24, 6.0518e6),
  EARTH(5.976e+24, 6.37814e6);
  
  private final double mass;
  private final double radius;
  
  Planet(double mass, double radius) {
    this.mass = mass;
    this.radius = radius;
  }
  
  public double getMass() {
    return mass;
  }
  
  public double getRadius() {
    return radius;
  }
  
  public double getSurfaceGravity() {
    return G * mass / (radius * radius);
  }
}
```

### TypeScript (제한적)

```typescript
enum Planet {
  Mercury = "MERCURY",
  Venus = "VENUS",
  Earth = "EARTH"
}

// 메서드나 속성을 직접 추가할 수 없음
// 별도의 클래스나 객체로 확장해야 함
```

## 7. 타입 안전성

### TypeScript

```typescript
enum Status {
  Pending = "PENDING",
  Approved = "APPROVED"
}

function processStatus(status: Status): string {
  switch (status) {
    case Status.Pending:
      return "대기 중";
    case Status.Approved:
      return "승인됨";
    default:
      return "알 수 없음";
  }
}

// 컴파일 타임에 타입 체크
processStatus(Status.Pending); // OK
// processStatus("PENDING");   // 컴파일 에러!
```

### Java

```java
public enum Status {
  PENDING, APPROVED
}

public String processStatus(Status status) {
  switch (status) {
    case PENDING:
      return "대기 중";
    case APPROVED:
      return "승인됨";
    default:
      return "알 수 없음";
  }
}

// 런타임에도 타입 안전성 보장
processStatus(Status.PENDING); // OK
// processStatus("PENDING");   // 컴파일 에러!
```

## 8. 성능 비교

### TypeScript
- **일반 enum**: 런타임에 객체 생성, 약간의 메모리 오버헤드
- **const enum**: 컴파일 타임에 인라인 대체, 최적화된 성능
- **트랜스파일**: JavaScript로 변환 시 추가 코드 생성

### Java
- **JVM 최적화**: 열거형은 JVM에서 최적화되어 처리
- **싱글톤 패턴**: 각 열거형 값은 싱글톤 인스턴스
- **메모리 효율**: 효율적인 메모리 사용

## 9. 사용 권장 사례

### TypeScript 열거형 사용 시기
- 간단한 상수 그룹화
- 성능이 중요한 경우 (const enum)
- JavaScript와의 호환성이 필요한 경우
- 런타임에 동적으로 값이 필요한 경우

### Java 열거형 사용 시기
- 복잡한 데이터 구조가 필요한 경우
- 메서드와 속성이 필요한 경우
- 강력한 타입 안전성이 필요한 경우
- JVM 환경에서 최적화된 성능이 필요한 경우

## 10. 대안적 접근 방법

### TypeScript 유니온 타입

```typescript
type LogLevel = "ERROR" | "WARN" | "INFO" | "DEBUG";

function log(level: LogLevel, message: string): void {
  console.log(`[${level}] ${message}`);
}

// enum보다 가벼우며 트리 쉐이킹에 유리
```

### Java 상수 클래스

```java
public final class LogLevel {
  public static final String ERROR = "ERROR";
  public static final String WARN = "WARN";
  public static final String INFO = "INFO";
  public static final String DEBUG = "DEBUG";
  
  private LogLevel() {} // 인스턴스화 방지
}
```

## 11. 실제 프로젝트에서의 활용

### TypeScript 예제

```typescript
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

// API 응답 처리
function handleResponse(status: HttpStatus): void {
  switch (status) {
    case HttpStatus.OK:
      console.log("요청 성공");
      break;
    case HttpStatus.NotFound:
      console.log("리소스를 찾을 수 없음");
      break;
    default:
      console.log("기타 상태");
  }
}
```

### Java 예제

```java
public enum OrderStatus {
  PENDING("대기 중") {
    @Override
    public boolean canCancel() {
      return true;
    }
  },
  PROCESSING("처리 중") {
    @Override
    public boolean canCancel() {
      return false;
    }
  },
  COMPLETED("완료") {
    @Override
    public boolean canCancel() {
      return false;
    }
  };
  
  private final String description;
  
  OrderStatus(String description) {
    this.description = description;
  }
  
  public String getDescription() {
    return description;
  }
  
  public abstract boolean canCancel();
}

// 사용 예시
public class OrderService {
  public void processOrder(Order order) {
    if (order.getStatus().canCancel()) {
      // 주문 취소 로직
    }
  }
}
```

## 12. 결론

TypeScript와 Java의 열거형은 각각의 언어 철학과 설계 목적을 반영합니다.

**TypeScript 열거형의 특징:**
- 간단하고 직관적인 문법
- JavaScript와의 호환성
- const enum을 통한 성능 최적화
- 런타임 유연성

**Java 열거형의 특징:**
- 강력한 타입 안전성
- 풍부한 기능 (메서드, 속성, 생성자)
- JVM 최적화
- 객체지향적 설계

**선택 기준:**
- **TypeScript**: 간단한 상수 그룹화, 웹 개발, JavaScript 호환성
- **Java**: 복잡한 비즈니스 로직, 엔터프라이즈 애플리케이션, 강력한 타입 시스템

두 언어 모두 열거형을 통해 코드의 가독성과 유지보수성을 향상시킬 수 있으며, 프로젝트의 요구사항과 개발 환경에 맞는 적절한 선택이 중요합니다.

---

*이 글은 TypeScript와 Java의 열거형에 대한 기본적인 이해를 바탕으로 작성되었습니다. 더 자세한 내용이나 특정 사용 사례에 대해 궁금한 점이 있다면 댓글로 남겨주세요!*
