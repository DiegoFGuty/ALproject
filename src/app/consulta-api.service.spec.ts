import { TestBed, inject } from '@angular/core/testing';

import { ConsultaApiService } from './consulta-api.service';

describe('ConsultaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaApiService]
    });
  });

  it('should be created', inject([ConsultaApiService], (service: ConsultaApiService) => {
    expect(service).toBeTruthy();
  }));
});
