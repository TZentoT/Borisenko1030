import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { GroupPipePipe } from '../shared/pipes/group-pipe.pipe';
import { ParaphPipe } from '../shared/pipes/paraph.pipe';
import { SortPipe } from '../shared/pipes/sort.pipe';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { GroupPipe } from '../shared/pipes/group.pipe';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [StudentsComponent, StudentsListComponent, StudentsEditComponent, GroupPipePipe, ParaphPipe, SortPipe, SearchPipe, GroupPipe],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    AngularMultiSelectModule,
  ]
})
export class StudentsModule { }
