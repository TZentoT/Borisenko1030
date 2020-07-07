import { Component, OnInit } from '@angular/core';
import { Student,  StudentMajor, StudentsGroup } from '../shared/models/student.module';
import { isNullOrUndefined } from 'util';
import { StudentService } from '../shared/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  onMajorSearch: string = '100'
  onGroupSearch: string = '100'

  stundents: Student[] = []
  studentMajor = StudentMajor
  studentGroup = StudentsGroup

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(
    private studentService : StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
         
    this.getData()
  }

  async getData() {
    try {
      let students = await this.studentService.getAll();
      this.stundents = isNullOrUndefined(await students) ? [] : await students;
    } catch (error) {
      console.log(error)
    }
  }

  getByMajor(major: number) {
    return this.stundents.filter(student => student.major === major)
  }

  async onDeleteWorker(id: number) {
    try {
     await this.studentService.deleteOneById(id)
    } catch (error) {
      console.log(error)
    }finally{
      this.getData()
    }
  }

  onAddWorker(){
    this.router.navigate([this.router.url, 'profile'])
  }
}
