import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student.module';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(students: Student[], search: string): any {

    if (students.length > 1){
      students.sort(function(a,b){
        if (a.surname > b.surname) return 1
        if (a.surname < b.surname) return -1
        if (a.surname = b.surname) return 0
      })
      if (search == '' || search== '100') {}
      else {
        let filteredStudents = students
        for (const student of students) {
          if (student.major == +search
            ) filteredStudents.push(student)
        }
        return filteredStudents
      }
    }
    
    return students;
  }

}
