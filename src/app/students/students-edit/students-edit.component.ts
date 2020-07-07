import { Component, OnInit } from '@angular/core';
import { Student, StudentsGroup, StudentMajor } from 'src/app/shared/models/student.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { StudentService } from 'src/app/shared/services/student.service';
import { GetAgeService } from 'src/app/shared/services/get-age.service';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css']
})
export class StudentsEditComponent implements OnInit {

  id: number;
  student: Student;
  
  studentGroup = StudentsGroup;
  studentMajor = StudentMajor;

  profile: FormGroup

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) { 
    this.activatedRoute.params.subscribe((params) => {
      if (!isNullOrUndefined(params.id)){
        this.id = +params.id
        console.log(params)
      }else{
        this.id = null
      }
    })
  }

  ngOnInit(): void {
    this.profile = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      patronymic: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      dob: new FormControl(null, [Validators.required]),
      groupNum: new FormControl(null, [Validators.required]),
      major: new FormControl(null, [Validators.required]),
    })

    this.getData()
  }

  async getData(){
    if(!isNullOrUndefined(this.id)){
      try {
        let student = this.studentService.getOneById(this.id)
        this.student = await student;
        console.log(this.student)
      } catch (error) {
        console.log(error)
      }
      this.profile.patchValue({
        id: this.student.id,
        name: this.student.name,
        surname: this.student.surname,
        patronymic: this.student.patronymic,
        phone: this.student.phone,
        email: this.student.email,
        dob: this.student.dob,
        groupNum: this.student.groupNum,
        major: this.student.major
      })
    }
  }

  async deleteData(){
    try {
      await this.studentService.deleteOneById(this.id);
    } catch (error) {
      console.log(error)
    }finally{
      this.router.navigate(["/students"])
    }   
  }

  async onAddWorker(){
    try {
      let res = await this.studentService.postOne(this.profile.value);
      this.router.navigate([this.router.url, res.id])
      this.getData()
    } catch (error) {
      console.log(error)
      alert("Проверьте правильность введеных данных")
    }
  }

  async changeData(){
    try {
      await this.studentService.putOneById(this.id, this.profile.value);
    } catch (error) {
      console.log(error)
      alert("Проверьте правильность введеных данных")
    }finally{
      this.getData()
    }
  }
}
