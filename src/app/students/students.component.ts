import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from 'src/app/student.service'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private studservice: StudentService) { }
  @Input() studentsList: string[];
  ngOnInit(): void {
    this.studentsList=this.studservice.GetArrrayOfStudents();
  }
}
