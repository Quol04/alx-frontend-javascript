
// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "David",
  lastName: "Kamau",
  age: 25,
  location: "Nairobi"
};

const student2: Student = {
  firstName: "Joy",
  lastName: "Wanjiku",
  age: 24,
  location: "Nyeri"
};

// 3. Store them in an array
const studentsList: Student[] = [student1, student2];

// 4. Render a table with Vanilla JS
const table: HTMLTableElement = document.createElement("table");
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
table.style.margin = "20px";
table.style.width = "50%";

// Add a header row
const headerRow: HTMLTableRowElement = document.createElement("tr");
["First Name", "Location"].forEach((headerText) => {
  const th: HTMLTableCellElement = document.createElement("th");
  th.textContent = headerText;
  th.style.border = "1px solid black";
  th.style.padding = "8px";
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

// Add rows for each student
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";
  firstNameCell.style.padding = "8px";

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "8px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);
