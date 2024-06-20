#!/usr/bin/env node
class Student {
    name: string;
    studentID: number;
    coursesEnrolled: string[];
    balance: number;
  
    constructor(name: string) {
      this.name = name;
      this.studentID = Math.floor(10000 + Math.random() * 90000); // Generate a 5 digit unique studentID
      this.coursesEnrolled = [];
      this.balance = 0;
    }
  
    enroll(course: string) {
      this.coursesEnrolled.push(course);
    }
  
    viewBalance() {
      console.log(`Balance for ${this.name}: $${this.balance}`);
    }
  
    payTuition(amount: number) {
      this.balance -= amount;
      console.log(`$${amount} paid towards tuition by ${this.name}`);
    }
  
    showStatus() {
      console.log(`Name: ${this.name}`);
      console.log(`Student ID: ${this.studentID}`);
      console.log(`Courses Enrolled: ${this.coursesEnrolled.join(', ')}`);
      console.log(`Balance: $${this.balance}`);
    }
  }
  
  // Create new student
  const student1 = new Student('Alice');
  student1.enroll('Math');
  student1.enroll('Science');
  student1.viewBalance();
  student1.payTuition(500);
  student1.showStatus();
  
  const student2 = new Student('Bob');
  student2.enroll('History');
  student2.enroll('English');
  student2.viewBalance();
  student2.payTuition(300);
  student2.showStatus();