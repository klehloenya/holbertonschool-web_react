// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create student objects and store them in an array
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'New York',
  };
  
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'San Francisco',
  };
  
  const studentsList: Student[] = [student1, student2];
  
  // Render the table using Vanilla JavaScript
  const renderTable = (students: Student[]): void => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
  
    students.forEach((student) => {
      const row = document.createElement('tr');
      const firstNameCell = document.createElement('td');
      const locationCell = document.createElement('td');
  
      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
  
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
    document.body.appendChild(table);
  };
  
  // Render the table with the studentsList
  renderTable(studentsList);
