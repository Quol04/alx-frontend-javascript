//Task 1: Define a Teacher interface and a Directors interface that extends it
// Define the Teacher interface
interface Teacher {
  readonly firstName: string;        // only set at initialization
  readonly lastName: string;         // only set at initialization
  fullTimeEmployee: boolean;         // always required
  yearsOfExperience?: number;        // optional
  location: string;                  // always required
  [key: string]: any;                // allow additional properties like "contract"
}

// Example usage
const teacher3: Teacher = {
  firstName: "David",
  fullTimeEmployee: false,
  lastName: "Smith",
  location: "lagos",
  contract: false, // extra property
};

console.log(teacher3);


// ---------------------------------------------

//Task 2: Define a Directors interface that extends Teacher
// and includes a numberOfReports property

interface Directors extends Teacher {
  numberOfReports: number;
}
// Example usage of Directors
const director1: Directors = {
  firstName: "Alice",
  lastName: "Johnson",
  location: "lagos",
  fullTimeEmployee: true,
  numberOfReports: 5,
};
console.log(director1);



// ---------------------------------------------

//Task 3: Define the function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: "J. Doe"



// ---------------------------------------------
//Task 4: Interface for constructor

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing the interface
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student: StudentClassInterface = new StudentClass("Mary", "Smith");
console.log(student.displayName());     // Mary
console.log(student.workOnHomework());  // Currently working