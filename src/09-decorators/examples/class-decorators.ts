/**
 * 클래스 데코레이터 (Class Decorators) 예제
 * 
 * TypeScript에서 클래스 데코레이터의 사용법을 학습합니다.
 */

// 1. 기본 클래스 데코레이터
function sealed(constructor: Function) {
  console.log(`클래스 ${constructor.name}이(가) 봉인되었습니다.`);
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

function logged(constructor: Function) {
  console.log(`클래스 ${constructor.name}이(가) 정의되었습니다.`);
}

function withTiming<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      const start = Date.now();
      super(...args);
      const end = Date.now();
      console.log(`${constructor.name} 생성자 실행 시간: ${(end - start)}ms`);
    }
  };
}

// 2. 메타데이터를 추가하는 데코레이터
function addMetadata(constructor: Function) {
  // 클래스에 메타데이터 추가
  (constructor as any).metadata = {
    version: "1.0.0",
    author: "TypeScript Learning",
    createdAt: new Date().toISOString()
  };
  
  // 인스턴스 메서드 추가
  constructor.prototype.getMetadata = function() {
    return (constructor as any).metadata;
  };
}

// 3. 싱글톤 패턴을 강제하는 데코레이터
function singleton<T extends { new (...args: any[]): {} }>(constructor: T) {
  let instance: any;
  
  return class extends constructor {
    constructor(...args: any[]) {
      if (instance) {
        return instance;
      }
      super(...args);
      instance = this;
    }
  } as any;
}

// 4. 유효성 검사를 추가하는 데코레이터
function validate<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      
      // 클래스의 모든 속성에 대한 유효성 검사
      const properties = Object.getOwnPropertyNames(this);
      for (const prop of properties) {
        const value = (this as any)[prop];
        if (value === undefined || value === null) {
          console.warn(`경고: ${constructor.name}의 ${prop} 속성이 정의되지 않았습니다.`);
        }
      }
    }
  } as any;
}

// 5. 메서드 로깅을 추가하는 데코레이터
function logMethods<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      
      // 모든 메서드에 로깅 추가
      const methods = Object.getOwnPropertyNames(constructor.prototype);
      for (const method of methods) {
        if (method !== 'constructor' && typeof (this as any)[method] === 'function') {
          const originalMethod = (this as any)[method];
          (this as any)[method] = function(...args: any[]) {
            console.log(`[${constructor.name}] ${method} 메서드 호출됨`);
            const result = originalMethod.apply(this, args);
            console.log(`[${constructor.name}] ${method} 메서드 완료됨`);
            return result;
          };
        }
      }
    }
  } as any;
}

// 6. 데코레이터 적용
@sealed
@logged
@addMetadata
@withTiming
@validate
@logMethods
class User {
  private name: string;
  private email: string;
  private age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number): void {
    if (age >= 0) {
      this.age = age;
    }
  }

  introduce(): string {
    return `안녕하세요! 저는 ${this.name}이고, ${this.age}살입니다.`;
  }
}

@singleton
class Config {
  private settings: Map<string, any> = new Map();

  constructor() {
    this.settings.set('theme', 'dark');
    this.settings.set('language', 'ko');
    this.settings.set('notifications', true);
  }

  get(key: string): any {
    return this.settings.get(key);
  }

  set(key: string, value: any): void {
    this.settings.set(key, value);
  }

  getAll(): Map<string, any> {
    return new Map(this.settings);
  }
}

// 7. 데코레이터 팩토리 (매개변수가 있는 데코레이터)
function configurable(value: boolean) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        (this as any).configurable = value;
      }
    } as any;
  };
}

function deprecated(message: string = "이 클래스는 더 이상 사용되지 않습니다.") {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    console.warn(`[DEPRECATED] ${constructor.name}: ${message}`);
    return constructor;
  };
}

@configurable(true)
@deprecated("새로운 UserV2 클래스를 사용하세요.")
class OldUser {
  constructor(public name: string) {}
}

// 8. 데코레이터 조합 (주석 처리)
// function composeDecorators(...decorators: Function[]) {
//   return function <T extends { new (...args: any[]): {} }>(constructor: T) {
//     return decorators.reduce((acc, decorator) => {
//       return decorator(acc);
//     }, constructor);
//   };
// }

// @composeDecorators(
//   logged,
//   addMetadata,
//   validate
// )
class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number
  ) {}
}

// 9. 데코레이터 실행
console.log("=== 클래스 데코레이터 예제 ===");

console.log("\n--- User 클래스 테스트 ---");
const user1 = new User("홍길동", "hong@example.com", 25);

console.log("user1.getName():", user1.getName());
console.log("user1.introduce():", user1.introduce());
console.log("user1.getMetadata():", (user1 as any).getMetadata());

console.log("\n--- Config 클래스 테스트 (싱글톤) ---");
const config1 = new Config();
const config2 = new Config();

console.log("config1 === config2:", config1 === config2);
console.log("config1.get('theme'):", config1.get('theme'));
config1.set('theme', 'light');
console.log("config2.get('theme'):", config2.get('theme'));

console.log("\n--- OldUser 클래스 테스트 ---");
const oldUser = new OldUser("구사용자");
console.log("oldUser.name:", oldUser.name);
console.log("oldUser.configurable:", (oldUser as any).configurable);

console.log("\n--- Product 클래스 테스트 ---");
const product = new Product("prod-001", "노트북", 1000000);
console.log("product:", product);
// Product 클래스에는 데코레이터가 적용되지 않아서 getMetadata 메서드가 없음
console.log("Product 클래스 메타데이터:", (Product as any).metadata);

// 10. 데코레이터 메타데이터 확인
console.log("\n--- 데코레이터 메타데이터 ---");
console.log("User 클래스 메타데이터:", (User as any).metadata);
console.log("Product 클래스 메타데이터:", (Product as any).metadata);

// 11. 데코레이터를 통한 클래스 확장
function extendWithId<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    id: string;
    
    constructor(...args: any[]) {
      super(...args);
      this.id = `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    
    getId(): string {
      return this.id;
    }
  } as any;
}

@extendWithId
class SimpleClass {
  constructor(public name: string) {}
}

console.log("\n--- SimpleClass 테스트 ---");
const simple = new SimpleClass("간단한 클래스");
console.log("simple.name:", simple.name);
console.log("simple.getId():", (simple as any).getId());

export {
  sealed,
  logged,
  withTiming,
  addMetadata,
  singleton,
  validate,
  logMethods,
  configurable,
  deprecated,
  extendWithId,
  User,
  Config,
  OldUser,
  Product,
  SimpleClass
};
