import { Component } from '@angular/core';
import { StudentdataService } from './services/studentdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test2';
  students:any;
  constructor(private studentData:StudentdataService){
     studentData.students().subscribe((data)=>{
      console.warn("data",data);
      this.students=data;
     })
  }
  getStudentFormData(data:any){
    this.studentData.saveStudents(data).subscribe((result)=>{
      console.warn(data);
    })

  }

}
