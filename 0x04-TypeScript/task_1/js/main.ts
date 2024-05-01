class Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    if (yearsOfExperience) {
      this.yearsOfExperience = yearsOfExperience;
    }
  }
}

const teacher1 = new Teacher('John', 'Doe', true, 'New York', 5);
teacher1.contract = true;

console.log(teacher1);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe')); // J. Doe

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

const StudentClass: StudentConstructor = class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
};

const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework());
console.log(student.displayName());
