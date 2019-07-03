import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SpotifyAuthModule } from 'spotify-auth';
import { SpotifyAuthInterceptorService } from './spotify-auth-interceptor.service';
import { SpotifyService } from './services/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SpotifyAuthModule.forRoot()
  ],
  providers: [
    SpotifyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpotifyAuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
