
// Task 1: Define DirectorInterface
// ---------------------------------------------
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// ---------------------------------------------
// Task 2: Define TeacherInterface
// ---------------------------------------------
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// ---------------------------------------------
// Task 3: Implement the Director class
// ---------------------------------------------
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// ---------------------------------------------
// Task 4: Implement the Teacher class
// ---------------------------------------------
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}


// ---------------------------------------------
// Task 5: CreateEmployee function
// ---------------------------------------------
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number") {
    if (salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  return new Director();
}

// // Example usage
// // ---------------------------------------------
console.log(createEmployee(200));   // Teacher
console.log(createEmployee(1000));  // Director
console.log(createEmployee("$500")); // Director


// ---------------------------------------------
// Task 8: String literal type Subjects
// ---------------------------------------------
type Subjects = "Math" | "History";

// Function teachClass
function teachClass(todayClass:Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  if (todayClass === "History") {
    return "Teaching History";
  }
  return "";
}

// Example usage

console.log(teachClass("Math"));    // Teaching Math
console.log(teachClass("History")); // Teaching History