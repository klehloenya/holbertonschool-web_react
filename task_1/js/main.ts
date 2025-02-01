// Define the Teacher interface
interface Teacher {
    readonly firstName: string; // Can only be set during initialization
    readonly lastName: string; // Can only be set during initialization
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // Optional
    location: string;
    [key: string]: any; // Allow any additional attributes
  }
  
  // Create a Teacher object
  const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, // Additional attribute
  };
  
  // Log the Teacher object to the console
  console.log(teacher3);
