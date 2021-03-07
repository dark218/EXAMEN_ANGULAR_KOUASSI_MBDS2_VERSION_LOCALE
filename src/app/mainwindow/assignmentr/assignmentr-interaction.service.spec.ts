import { TestBed } from '@angular/core/testing';

import { AssignmentrInteractionService } from './assignmentr-interaction.service';

describe('AssignmentInteractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignmentrInteractionService = TestBed.get(AssignmentrInteractionService);
    expect(service).toBeTruthy();
  });
});
