import { Component, OnInit } from '@angular/core';
import { Student } from '../student'; //the .. means to go up one folder level

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

   author: string = "Phuc"

   selectedStudent: Student;

   getSelectedStudent(student: Student) :void {
       this.selectedStudent = student;
   }

   displaySelectedStudent():void {
     console.log("Selected student is", this.selectedStudent.name)
   }

   students: Student[] = [
   new Student("Kim","Green",10),
   new Student("Long","Blue",11),
   new Student("Elish","Blue",11),
   new Student("Phuc","Blue",8),
   new Student("Eric","Blue",2),
   	];

nameOfStudent(name:string): void {
console.log("clicked on", name);

}



clickme(): void {

  console.log("the button was clicked")
}

  constructor() { }

  ngOnInit() {
  }

}
