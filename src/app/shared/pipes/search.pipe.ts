import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student.module';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(students : Student[], onMajorSearch: string): any {
    
    let filteredStudents: Student[] =[] 
  
    if (onMajorSearch == '' || onMajorSearch == '100') {
      return students
    }
    else {
      for (const student of students) {
        if (student.major == +onMajorSearch) filteredStudents.push(student)
      }
      return filteredStudents
    }
  }
}

