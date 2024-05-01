interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'Los Angeles',
};

const studentsList: Array<Student> = [student1, student2];

const body: HTMLElement = document.getElementsByTagName('body')[0];
const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLElement = document.createElement('tbody');

table.appendChild(tbody);
body.appendChild(table);

studentsList.forEach((student) => {
  const row: HTMLElement = document.createElement('tr');
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  tbody.appendChild(row);
});
