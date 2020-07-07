import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student, StudentsGroup } from 'src/app/shared/models/student.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  @Input() title: string;
  @Input() students: Student[] = []
  @Input() onGroupSearch

  @Output() deleteWorker = new EventEmitter<number>();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onDeleteWorker(id: number){
    this.deleteWorker.emit(id)
  }

  onLinkProfile(id: number){
    this.router.navigate([this.router.url,'profile', id])
  }

}
