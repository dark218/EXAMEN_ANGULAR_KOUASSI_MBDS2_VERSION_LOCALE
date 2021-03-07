import { Assignmentr } from './assignmentr.model';
import { Pipe ,PipeTransform} from '@angular/core';

@Pipe({
  name: 'assignmentrFilter',
  pure: false
})
export class AssignmentrFilterPipe implements PipeTransform{

  transform(assignmentrs: Assignmentr[], searchTerm: string) :Assignmentr[] {
    if(!assignmentrs || !searchTerm){
      return assignmentrs;
    }

    return assignmentrs.filter( assignment =>
                           assignment.nomdevoir.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
