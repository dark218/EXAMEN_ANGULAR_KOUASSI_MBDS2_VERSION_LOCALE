import { Assignment } from './assignment.model';
import { Pipe ,PipeTransform} from '@angular/core';

@Pipe({
  name: 'assignmentFilter',
  pure: false
})
export class AssignmentFilterPipe implements PipeTransform{

  transform(assignments: Assignment[], searchTerm: string) :Assignment[] {
    if(!assignments || !searchTerm){
      return assignments;
    }

    return assignments.filter( assignment =>
                           assignment.nomdevoir.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
