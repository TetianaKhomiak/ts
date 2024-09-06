// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. 
// Наприклад, тип значення для кожного ключа може бути число | рядок.

interface MyUnion {
    [key: string]: string | number;
  }

// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. 
// Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
interface  MyFunctions {
    [key: string]: (arg: any) => any;
  }

const myFunctions:  MyFunctions = {
    greet: (name: string) => `Welcome, ${name}!`,
    toUpperCase: (name: string) => name.toUpperCase(),
};

console.log(myFunctions.greet?.("Tetiana"));
console.log(myFunctions.toUpperCase?.("Tetiana"));


// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, 
// подібного до масиву. Ключі повинні бути числами, а значення - певного типу.
interface StringArrayLike {
    [key: number]: string;
}

// Створіть інтерфейс з певними властивостями та індексною сигнатурою. 
// Наприклад, ви можете мати властивості типу name: string 
// та індексну сигнатуру для додаткових динамічних властивостей.
interface MyProperties {
    [key: string]: string; 

    name: string; 
    2: string; 
}

// Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, 
// додаючи специфічні властивості.
interface SuperClass{
    [key: string]: number;
}

interface SubClass extends SuperClass{
    length: 0;
    amount: 2;
}

// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, 
// чи відповідають значення певних ключів певним критеріям 
// (наприклад, чи всі значення є числами).  
interface StringNumberMap {
    [key: string]: number | string;
  }

function areValuesNumbers(obj: StringNumberMap): boolean {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] !== "number") {
          return false;
        }
      }
    }
    return true;
}

 const mixedValuesExample: StringNumberMap = {
    a: 1,
    b: "2", 
    c: 3,
    d: "4", 
};
console.log(areValuesNumbers(mixedValuesExample)); // false

const allNumbersExample: StringNumberMap = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};
console.log(areValuesNumbers(allNumbersExample)); // true

