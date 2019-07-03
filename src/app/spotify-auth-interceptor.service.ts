import { Injectable } from '@angular/core';
import { SpotifyAuthInterceptor, TokenService } from 'spotify-auth';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthInterceptorService extends SpotifyAuthInterceptor {

  doOnError(err: any): void {
    console.log(err);
  }

  constructor(
    tokenSvc: TokenService
  ) {
    super(tokenSvc);
  }
}
