import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosService);
  });

  it('should be createdshould be created and injected successfully (truthiness check)', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize the defaultApiPort to 8080', () => {
    // Assert that a specific property on the injected service instance has the expected default value
    expect(service.defaultApiPort).toBe(8080);
  });
});
