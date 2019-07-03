import { Component, OnInit } from '@angular/core';
import { AuthService, TokenService, ScopesBuilder, AuthConfig } from 'spotify-auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private tokenSvc: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.tokenSvc.oAuthToken) {
      this.router.navigate(['auth']);
    }
  }

  public login(): void {
    const scopes = new ScopesBuilder()
      .withScopes('user-library-read')
      .withScopes('user-read-recently-played')
      .withScopes('user-top-read')
      .withScopes('user-read-currently-playing')
      .build();
    const ac: AuthConfig = {
      client_id: 'f45378098d9940a49bbf1db2a2717fd6',
      response_type: 'token',
      redirect_uri: 'http://localhost:4200/auth',
      state:  '',
      show_dialog:  true,
      scope:  scopes
    };
    this.authService.configure(ac).authorize();
  }

}
