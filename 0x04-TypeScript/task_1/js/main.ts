
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



// Define Directors interface that extends Teacher
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