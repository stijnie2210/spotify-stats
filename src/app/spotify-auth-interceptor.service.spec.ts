import { TestBed } from '@angular/core/testing';

import { SpotifyAuthInterceptorService } from './spotify-auth-interceptor.service';

describe('SpotifyAuthInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyAuthInterceptorService = TestBed.get(SpotifyAuthInterceptorService);
    expect(service).toBeTruthy();
  });
});
