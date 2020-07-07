import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student.module';

@Pipe({
  name: 'group'
})
export class GroupPipe implements PipeTransform {

  transform(students : Student[], onGroupSearch: string): any {
    let filteredStudents: Student[] =[] 
  
    if (onGroupSearch == '' || onGroupSearch == '100') {
      return students
    }
    else {
      for (const student of students) {
        if (student.major == +onGroupSearch) filteredStudents.push(student)
      }
      return filteredStudents
    }
  }

}
