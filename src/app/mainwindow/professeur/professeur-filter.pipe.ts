import { Professeur } from './professeur.model';
import { Pipe ,PipeTransform} from '@angular/core';

@Pipe({
  name: 'professeurFilter',
  pure: false
})
export class ProfesseurFilterPipe implements PipeTransform{

  transform(professeurs: Professeur[], searchTerm: string) :Professeur[] {
    if(!professeurs || !searchTerm){
      return professeurs;
    }

    return professeurs.filter( professeur =>
                           professeur.nomprof.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
