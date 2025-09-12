// // ---------------------------------------------
// // Task 1: Define DirectorInterface
// // ---------------------------------------------
// interface DirectorInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workDirectorTasks(): string;
// }

// // ---------------------------------------------
// // Task 2: Define TeacherInterface
// // ---------------------------------------------
// interface TeacherInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workTeacherTasks(): string;
// }

// // ---------------------------------------------
// // Task 3: Implement the Director class
// // ---------------------------------------------
// class Director implements DirectorInterface {
//   workFromHome(): string {
//     return "Working from home";
//   }

//   getCoffeeBreak(): string {
//     return "Getting a coffee break";
//   }

//   workDirectorTasks(): string {
//     return "Getting to director tasks";
//   }
// }

// // ---------------------------------------------
// // Task 4: Implement the Teacher class
// // ---------------------------------------------
// class Teacher implements TeacherInterface {
//   workFromHome(): string {
//     return "Cannot work from home";
//   }

//   getCoffeeBreak(): string {
//     return "Cannot have a break";
//   }

//   workTeacherTasks(): string {
//     return "Getting to work";
//   }
// }

// // ---------------------------------------------
// // Task 5: CreateEmployee function
// // ---------------------------------------------
// function createEmployee(salary: number | string): Director | Teacher {
//   if (typeof salary === "number" && salary < 500) {
//     return new Teacher();
//   }
//   return new Director();
// }

// // ---------------------------------------------
// // Example usage
// // ---------------------------------------------
// console.log(createEmployee(200));   // Teacher
// console.log(createEmployee(1000));  // Director
// console.log(createEmployee("$500")); // Director


// -=======================================

// ---------------------------------------------
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
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// ---------------------------------------------
// Task 6: Type predicate isDirector
// ---------------------------------------------
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// ---------------------------------------------
// Task 7: executeWork function
// ---------------------------------------------
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// ---------------------------------------------
// Example usage
// ---------------------------------------------
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
