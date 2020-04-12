import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector:'app-student-input',
  templateUrl:'./student-input.component.html'
})
export class StudentInputComponent implements OnInit{
  constructor(private _studentservice: StudentService){}
  ngOnInit(){}
  @Output() StudentNameAdded=new EventEmitter <string>();
  @Output() StudentNameRemoved=new EventEmitter <string>();
  studentname="";
  studname="";
  OnButtonClickAdd()
  {
    //this.StudentNameAdded.emit(this.studentname)
    this._studentservice.OnStudentNameAdded(this.studentname);
    this.studentname="";
  }
  onButtonClickRemove()
  {
    //this.StudentNameRemoved.emit(this.studentname)
    this._studentservice.OnStudentNameRemoved(this.studentname);
    this.studentname="";
  }

}
