import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public studentsList=["Amr","Abdallah","Ola","Abdelrahman","khaled"];
  constructor() { }
  GetArrrayOfStudents()
  {return this.studentsList;}

  OnStudentNameAdded(name: string){
    this.studentsList.push(name);
  }

  OnStudentNameRemoved(studName: string){
    console.log(studName);
    var remove=[];
    var removeditem;
    var lengthofstudarr=this.studentsList.length;
    for (var i=0;i<lengthofstudarr;i++)
    {
      removeditem=this.studentsList.pop();
      if (removeditem!==studName)
      {
        remove.push(removeditem);
      }
    }
    var removelength=remove.length;
    for (var i=0;i<removelength;i++)
    {
      this.studentsList.push(remove.pop());
    }
  }

}
