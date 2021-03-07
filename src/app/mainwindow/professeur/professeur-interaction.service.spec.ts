import { TestBed } from '@angular/core/testing';

import { ProfesseurInteractionService } from './professeur-interaction.service';

describe('ProfesseurInteractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfesseurInteractionService = TestBed.get(ProfesseurInteractionService);
    expect(service).toBeTruthy();
  });
});
