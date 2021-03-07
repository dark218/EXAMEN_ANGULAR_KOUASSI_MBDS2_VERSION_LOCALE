import { TestBed } from '@angular/core/testing';

import { AssignmentInteractionService } from './assignment-interaction.service';

describe('AssignmentInteractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignmentInteractionService = TestBed.get(AssignmentInteractionService);
    expect(service).toBeTruthy();
  });
});
