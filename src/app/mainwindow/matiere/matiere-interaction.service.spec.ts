import { TestBed } from '@angular/core/testing';

import { MatiereInteractionService } from './matiere-interaction.service';

describe('MatiereInteractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatiereInteractionService = TestBed.get(MatiereInteractionService);
    expect(service).toBeTruthy();
  });
});
