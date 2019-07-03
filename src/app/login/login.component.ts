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
      this.router.navigate(['']);
    }
  }

  public login(): void {
    const scopes = new ScopesBuilder()
      .withScopes(ScopesBuilder.HISTORY)
      .build();
    const ac: AuthConfig = {
      client_id: '6f571c4c47054ba7ac40115a3bf3aeb8',
      response_type: 'token',
      redirect_uri: 'http://localhost:4200/profile',
      state:  '',
      show_dialog:  true,
      scope: scopes
    };
    this.authService.configure(ac).authorize();
  }

}
