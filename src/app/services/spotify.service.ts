import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private authToken: string = environment.token;
  private userId: string = environment.userId;

  constructor(
    private http: HttpClient
  ) { }

  public getProfile(): Observable<User> {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", this.authToken);

    let response = this.http.get(`https://api.spotify.com/v1/users/${this.userId}`, { headers });

    return response as Observable<User>;
  }

  public getRecentlyPlayed(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", this.authToken);

    let response = this.http.get("https://api.spotify.com/v1/me/player/recently-played", { headers });
    console.log(response)
    return response as Observable<any>
  }
}
