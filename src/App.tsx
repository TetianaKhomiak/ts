// import React from "react";

// const App = () => {
//   type Lecturer = {
//     name: string;
//     surname: string;
//     position: string;
//     company: string;
//     experience: number;
//     courses: string[];
//     contacts: string[];
//   };

//   class School {
//     private _areas: Area[] = [];
//     private _lecturers: Lecturer[] = [];

//     get areas(): Area[] {
//       return this._areas;
//     }

//     get lecturers(): Lecturer[] {
//       return this._lecturers;
//     }

//     addArea(area: Area): void {
//       this._areas.push(area);
//     }

//     removeArea(areaName: string): void {
//       this._areas = this._areas.filter((area) => area.name !== areaName);
//     }

//     addLecturer(lecturer: Lecturer): void {
//       this._lecturers.push(lecturer);
//     }

//     removeLecturer(surname: string): void {
//       this._lecturers = this._lecturers.filter(
//         (lecturer) => lecturer.surname !== surname
//       );
//     }
//   }

//   class Area {
//     private _levels: Level[] = [];
//     private _name: string;

//     constructor(name: string) {
//       this._name = name;
//     }

//     get name(): string {
//       return this._name;
//     }

//     get levels(): Level[] {
//       return this._levels;
//     }

//     addLevel(level: Level): void {
//       this._levels.push(level);
//     }

//     removeLevel(levelName: string): void {
//       this._levels = this._levels.filter((level) => level.name !== levelName);
//     }
//   }

//   class Level {
//     private _groups: Group[] = [];
//     private _name: string;
//     private _description: string;

//     constructor(name: string, description: string) {
//       this._name = name;
//       this._description = description;
//     }

//     get name(): string {
//       return this._name;
//     }

//     get description(): string {
//       return this._description;
//     }

//     get groups(): Group[] {
//       return this._groups;
//     }

//     addGroup(group: Group): void {
//       this._groups.push(group);
//     }

//     removeGroup(groupName: string): void {
//       this._groups = this._groups.filter(
//         (group) => group.levelName !== groupName
//       );
//     }
//     // removeGroup(groupName: string): void {
//     //   this._groups = this._groups.filter((group) => group.name !== groupName);
//     // }
//   }

//   enum Status {
//     Active = "Active",
//     Inactive = "Inactive",
//     Pending = "Pending",
//   }

//   class Group {
//     private _area: Area;
//     private _status: Status;
//     private _students: Student[] = [];

//     public directionName: string;
//     public levelName: string;

//     constructor(directionName: string, levelName: string, area: Area) {
//       this.directionName = directionName;
//       this.levelName = levelName;
//       this._status = Status.Active;
//       this._area = area;
//     }

//     get area(): Area {
//       return this._area;
//     }

//     get status(): Status {
//       return this._status;
//     }

//     get students(): Student[] {
//       return this._students;
//     }

//     get direction(): string {
//       return this.directionName;
//     }

//     get level(): string {
//       return this.levelName;
//     }

//     addStudent(student: Student): void {
//       this._students.push(student);
//     }

//     removeStudent(fullName: string): void {
//       this._students = this._students.filter(
//         (student) => student.fullName !== fullName
//       );
//     }

//     setStatus(status: Status): void {
//       this._status = status;
//     }

//     showPerformance(): Student[] {
//       return this._students
//         .slice()
//         .sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
//     }
//   }

//   class Student {
//     private _firstName: string;
//     private _lastName: string;
//     private _birthYear: number;
//     private _grades: { [workName: string]: number } = {};
//     private _visits: { [lesson: string]: boolean } = {};

//     constructor(firstName: string, lastName: string, birthYear: number) {
//       this._firstName = firstName;
//       this._lastName = lastName;
//       this._birthYear = birthYear;
//     }

//     get fullName(): string {
//       return `${this._lastName} ${this._firstName}`;
//     }

//     set fullName(value: string) {
//       [this._lastName, this._firstName] = value.split(" ");
//     }

//     get age(): number {
//       return new Date().getFullYear() - this._birthYear;
//     }

//     setGrade(workName: string, mark: number): void {
//       this._grades[workName] = mark;
//     }

//     setVisit(lesson: string, present: boolean): void {
//       this._visits[lesson] = present;
//     }

//     getPerformanceRating(): number {
//       const gradeValues = Object.values(this._grades);

//       if (!gradeValues.length) return 0;

//       const averageGrade =
//         gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
//       const attendancePercentage =
//         (Object.values(this._visits).filter((present) => present).length /
//           Object.values(this._visits).length) *
//         100;

//       return (averageGrade + attendancePercentage) / 2;
//     }
//   }
//   // // Assuming all classes and enum are defined as above

//   // // Create an Area instance
//   // const area = new Area("Science");

//   // // Create a Group instance
//   // const group = new Group("Physics", "Level 1", area);

//   // // Create Student instances
//   // const student1 = new Student("John", "Doe", 2000);
//   // const student2 = new Student("Jane", "Smith", 1999);
//   // console.log(student1);

//   // // Add students to the group
//   // group.addStudent(student1);
//   // group.addStudent(student2);

//   // // Access the students property to see the list of students
//   // console.log(group.students);

//   // // Expected output
//   // // [
//   // //   Student { _firstName: 'John', _lastName: 'Doe', _birthYear: 2000, _grades: {}, _visits: {} },
//   // //   Student { _firstName: 'Jane', _lastName: 'Smith', _birthYear: 1999, _grades: {}, _visits: {} }
//   // // ]

//   return <div>App</div>;
// };

// export default App;
import React from "react";
const App = () => {
  abstract class BaseShape {
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

    public print(): void {
      if (this.name === "Rectangle" || this.name === "Square") {
        const area = this.calculateArea();
        console.log(
          `Area of ${this.name} with color ${this.color} is equal to ${area}`
        );
      }
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

  return <div>App</div>;
};

export default App;
