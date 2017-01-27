/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CharakterService } from './charakter.service';

describe('CharakterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharakterService]
    });
  });

  it('should ...', inject([CharakterService], (service: CharakterService) => {
    expect(service).toBeTruthy();
  }));
});
