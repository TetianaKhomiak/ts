// створити тип DeepReadonly, який буде робити доступними тільки для читання
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

// створити тип DeepRequireReadonly який буде робити доступними тільки для читання
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
