  abstract class BaseShape{
    public abstract readonly color: string;
    public abstract readonly name: string;

    public abstract calculateArea(): number;
  }

  class Shape extends BaseShape {
    public readonly color: string;
    public readonly name: string;

    constructor(color: string, name: string) {
      super();
      this.color = color;
      this.name = name;
    }

    public calculateArea(): number {
     console.log("Method is required to be implemented.");
     return 0;
    }
  }

  class Circle extends Shape {
    private readonly radius: number;

    constructor(color: string, radius: number) {
      super(color, "Circle");
      this.radius = radius;
    }

    public calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Triangle extends Shape {
    private readonly base: number;
    private readonly height: number;

    constructor(color: string, base: number, height: number) {
      super(color, "Triangle");
      this.base = base;
      this.height = height;
    }

    public calculateArea(): number {
      return 0.5 * this.base * this.height;
    }
  }

  class Rectangle extends Shape {
    private readonly width: number;
    private readonly height: number;

    constructor(color: string, width: number, height: number) {
      super(color, "Rectangle");
      this.width = width;
      this.height = height;
    }

    public calculateArea(): number {
      return this.width * this.height;
    }

    public print(): void {
      const area = this.calculateArea();
      console.log(
        `Area of ${this.name} with color ${this.color} is equal to ${area}`
      );
    }
  }

  class Square extends Shape {
    private readonly side: number;

    constructor(color: string, side: number) {
      super(color, "Square");
      this.side = side;
    }

    public calculateArea(): number {
      return this.side * this.side;
    }

    public print(): void {
      const area = this.calculateArea();
      console.log(
        `Area of ${this.name} with color ${this.color} is equal to ${area}`
      );
    }
  }

  const circle = new Circle("Green", 1);
  console.log(circle.calculateArea());

  const triangle = new Triangle("Gray", 2, 18);
  console.log(triangle.calculateArea());

  const rectangle = new Rectangle("Black", 7, 3);
  console.log(rectangle.calculateArea());
  rectangle.print();

  const square = new Square("Red", 8);
  console.log(square.calculateArea());
  square.print();



// abstract class Shape {
//     public abstract readonly color: string;
//     public abstract readonly name: string;

//     abstract calculateArea(): number;  
// }


// class Circle extends Shape {
//     public readonly color: string;
//     public readonly name: string = 'Circle';
//     private readonly radius: number;

//     constructor(color: string, radius: number) {
//         super();
//         this.color = color;
//         this.radius = radius;
//     }

//     public calculateArea(): number {
//         return Math.PI * this.radius * this.radius;
//     }
// }

// class Triangle extends Shape {
//     public readonly color: string;
//     public readonly name: string = 'Triangle';
//     private readonly base: number;
//     private readonly height: number;

//     constructor(color: string, base: number, height: number) {
//         super();
//         this.color = color;
//         this.base = base;
//         this.height = height;
//     }

//     public calculateArea(): number {
//         return 0.5 * this.base * this.height;
//     }
// }

// class Rectangle extends Shape {
//     public readonly color: string;
//     public readonly name: string = 'Rectangle';
//     private readonly width: number;
//     private readonly height: number;

//     constructor(color: string, width: number, height: number) {
//         super();
//         this.color = color;
//         this.width = width;
//         this.height = height;
//     }

//     public calculateArea(): number {
//         return this.width * this.height;
//     }

//     public print(): void {
//         const area = this.calculateArea();
//         console.log(`Area of ${this.name} with color ${this.color} is equal to ${area}`);
//     }
// }

// class Square extends Shape {
//     public readonly color: string;
//     public readonly name: string = 'Square';
//     private readonly side: number;

//     constructor(color: string, side: number) {
//         super();
//         this.color = color;
//         this.side = side;
//     }

//     public calculateArea(): number {
//         return this.side * this.side;
//     }

//     public print(): void {
//         const area = this.calculateArea();
//         console.log(`Area of ${this.name} with color ${this.color} is equal to ${area}`);
//     }
// }


// const circle = new Circle("Green", 1);
// circle.calculateArea(); 

// const triangle = new Triangle("Gray", 2, 18);
// triangle.calculateArea(); 

// const rectangle = new Rectangle("Black", 7, 3);
// rectangle.calculateArea(); 
// rectangle.print(); 

// const square = new Square("Red", 8);
// square.calculateArea(); 
// square.print(); 
