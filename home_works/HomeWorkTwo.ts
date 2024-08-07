type Lecturer = {
    name: string;
    surname: string;
    position: string;
    company: string;
    experience: number;
    courses: string[];
    contacts: string[];
  };
  
class School {
    private _areas: Area[] = [];
    private _lecturers: Lecturer[] = [];
  
    get areas(): Area[] {
      return this._areas;
    }
  
    get lecturers(): Lecturer[] {
      return this._lecturers;
    }
  
    addArea(area: Area): void {
      this._areas.push(area);
    }
  
    removeArea(areaName: string): void {
      this._areas = this._areas.filter(area => area.name !== areaName);
    }
  
    addLecturer(lecturer: Lecturer): void {
      this._lecturers.push(lecturer);
    }
  
    removeLecturer(surname: string): void {
      this._lecturers = this._lecturers.filter(lecturer => lecturer.surname !== surname);
    }
  }

  class Area {
    private _levels: Level[] = [];
    private _name: string;
  
    constructor(name: string) {
      this._name = name;
    }
  
    get name(): string {
      return this._name;
    }
  
    get levels(): Level[] {
      return this._levels;
    }
  
    addLevel(level: Level): void {
      this._levels.push(level);
    }
  
    removeLevel(levelName: string): void {
      this._levels = this._levels.filter(level => level.name !== levelName);
    }
  }

  class Level {
    private _groups: Group[] = [];
    private _name: string;
    private _description: string;
  
    constructor(name: string, description: string) {
      this._name = name;
      this._description = description;
    }
  
    get name(): string {
      return this._name;
    }
  
    get description(): string {
      return this._description;
    }
  
    get groups(): Group[] {
      return this._groups;
    }
  
    addGroup(group: Group): void {
      this._groups.push(group);
    }
  
    removeGroup(groupName: string): void {
      this._groups = this._groups.filter(group => group.levelName !== groupName);
    }
  }

  enum Status {
    Active = 'Active',
    Inactive = 'Inactive',
    Pending = 'Pending',
  }

  class Group {
   private _area: Area;
    private _status: Status;
    private _students: Student[] = [];
    
    public directionName: string;
    public levelName: string;
  
  constructor(directionName: string, levelName: string, area: Area) {
    this.directionName = directionName;
    this.levelName = levelName;
    this._status = Status.Active; 
    this._area = area;
  }

  set area(value: Area) {
    this._area = value;
  }

  get area(): Area {
    return this._area;
  }
  
    get status(): Status {
      return this._status;
    }

    get students(): Student[] {
      return this._students;
    }

    get direction(): string {
      return this.directionName;
    }

    get level(): string {
      return this.levelName;
    }
  
    addStudent(student: Student): void {
      this._students.push(student);
    }
  
    removeStudent(fullName: string): void {
      this._students = this._students.filter(student => student.fullName !== fullName);
    }
  
    setStatus(status: Status): void {
      this._status = status;
    }
  
    showPerformance(): Student[] {
      return this._students.slice().sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    }
  }
  
  class Student {
    private _firstName: string;
    private _lastName: string;
    private _birthYear: number;
    private _grades: { [workName: string]: number } = {};
    private _visits: { [lesson: string]: boolean } = {};
  
    constructor(firstName: string, lastName: string, birthYear: number) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._birthYear = birthYear;
    }
  
    get fullName(): string {
      return `${this._lastName} ${this._firstName}`;
    }
  
    set fullName(value: string) {
      [this._lastName, this._firstName] = value.split(' ');
    }
  
    get age(): number {
      return new Date().getFullYear() - this._birthYear;
    }
  
    setGrade(workName: string, mark: number): void {
      this._grades[workName] = mark;
    }
  
    setVisit(lesson: string, present: boolean): void {
      this._visits[lesson] = present;
    }
  
    getPerformanceRating(): number {
      const gradeValues = Object.values(this._grades);
  
      if (!gradeValues.length) return 0;
  
      const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
      const attendancePercentage = (Object.values(this._visits).filter(present => present).length / Object.values(this._visits).length) * 100;
  
      return (averageGrade + attendancePercentage) / 2;
    }
  }
  


