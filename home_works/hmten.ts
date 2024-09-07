//1. створити тип DeepReadonly, який буде робити доступними тільки для читання
// навіть властивості вкладених обʼєктів.
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type MyObject = {
  name: string;
  details: {
    age: number;
    address: {
      city: string;
      country: string;
      postalCode: {
        code: number;
        prefix: string;
      };
    };
  };
};

const readonlyObject: DeepReadonly<MyObject> = {
  name: "Tetiana",
  details: {
    age: 30,
    address: {
      city: "Kyiv",
      country: "Ukraine",
      postalCode: {
        code: 12345,
        prefix: "UA",
      },
    },
  },
};

readonlyObject.name = "Tania"; //a read-only property
readonlyObject.details.age = "25"; //a read-only property
readonlyObject.details.address.city = "Zhytomyr"; //a read-only property
readonlyObject.details.address.postalCode.code = 54321; //a read-only property

//2. створити тип DeepRequireReadonly який буде робити доступними тільки для читання
// навіть властивості вкладених обʼєктів та ще й робити їх обовʼязковими.
type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: T[K] extends object
    ? DeepRequireReadonly<T[K]>
    : T[K];
};

type MyObjectOptional = {
  name?: string;
  details?: {
    age?: number;
    address?: {
      city?: string;
      country?: string;
      postalCode?: {
        code?: number;
        prefix?: string;
      };
    };
  };
};

const deepRequireReadonly: DeepRequireReadonly<MyObjectOptional> = {
  name: "Tetiana",
  details: {
    age: 30,
    address: {
      city: "Kyiv",
      country: "Ukraine",
      postalCode: {
        code: 12345,
        prefix: "UA",
      },
    },
  },
};

readonlyObject.name = "Tania"; //a read-only property
readonlyObject.details.age = "25"; //a read-only property
readonlyObject.details.address.city = "Zhytomyr"; //a read-only property
readonlyObject.details.address.postalCode.code = 54321; //a read-only property

const incompleteObject: DeepRequireReadonly<MyObjectOptional> = {
  name: "Incomplete", // Property 'details' is missing in type '{ name: string; }'
};

const completeObject: DeepRequireReadonly<MyObjectOptional> = {
  name: "Tania",
  details: {
    age: 20,
    address: {
      city: "Zhytomyr",
      country: "Ukraine",
      postalCode: {
        code: 54321,
        prefix: "UA",
      },
    },
  },
};

//3. створити тип UpperCaseKeys, який буде приводити всі ключі до верхнього регістру.

type ToGetter<T extends string> = Uppercase<T>;

type UpperCaseKeys<T> = {
  [K in keyof T & string as ToGetter<K>]: T[K];
};

// or
// type UpperCaseKeys<T> = {
//     [K in keyof T as Uppercase<string & K>]: T[K];
//   };

type MyObject2 = {
  name: string;
  age: number;
  city: string;
};

type UppercaseObject = UpperCaseKeys<MyObject2>;
// type UppercaseObject = {
//   NAME: string;
//   AGE: number;
//   CITY: string;
// };

const obj: UppercaseObject = {
  NAME: "Tetiana",
  AGE: 30,
  CITY: "Kyiv",
};

// 4. Створіть тип ObjectToPropertyDescriptor, який перетворює
// звичайний обʼєкт на обʼєкт де кожне value є дескриптором.
type PropertyDescriptor<T> = {
  value: T;
  writable?: boolean;
  configurable?: boolean;
  enumerable?: boolean;
};

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: PropertyDescriptor<T[K]>;
};

type MyObject3 = {
  name: string;
  age: number;
};

type MyObjectDescriptor = ObjectToPropertyDescriptor<MyObject3>;

const obj2: MyObjectDescriptor = {
  name: {
    value: "Tetiana",
    writable: true,
    configurable: true,
    enumerable: true,
  },
  age: {
    value: 30,
    writable: true,
    configurable: true,
    enumerable: true,
  },
};
