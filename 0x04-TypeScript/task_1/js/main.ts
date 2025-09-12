// ---------------------------------------------
// Task 1: Define a Teacher interface
// ---------------------------------------------
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
  location: "Lagos",
  contract: false, // extra property
};
console.log(teacher3);


// ---------------------------------------------
// Task 2: Define a Director interface that extends Teacher

interface Director extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Director = {
  firstName: "Alice",
  lastName: "Johnson",
  location: "Lagos",
  fullTimeEmployee: true,
  numberOfReports: 5,
};
console.log(director1);


// ---------------------------------------------
// Task 3: Define the printTeacher function
// ---------------------------------------------
interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

// Function implementation with destructured params
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // Output: "J. Doe"


// ---------------------------------------------
// Task 4: Define the StudentClass
// ---------------------------------------------
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass {
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


// ---------------------------------------------
