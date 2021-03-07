import { Matiere } from './matiere.model';
import { Pipe ,PipeTransform} from '@angular/core';

@Pipe({
  name: 'matiereFilter',
  pure: false
})
export class MatiereFilterPipe implements PipeTransform{

  transform(matieres: Matiere[], searchTerm: string) :Matiere[] {
    if(!matieres || !searchTerm){
      return matieres;
    }

    return matieres.filter( matiere =>
                           matiere.nommat.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
