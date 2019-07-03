import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService, ScopesBuilder, AuthConfig, TokenService } from 'spotify-auth';
import { Router } from '@angular/router';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spotify-stats';

  constructor(
    public http: HttpClient,
    public tokenSvc: TokenService,
    private authService: AuthService,
    private spotifyService: SpotifyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.authorizedStream.pipe(x => x).subscribe(() => {
      this.router.navigate(['auth']);
  });
  }
}
