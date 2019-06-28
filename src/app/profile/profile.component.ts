import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { User } from '../models/user.model';
import { Track } from '../models/track.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user: User;
  public items: Track[] = []

  constructor(
    public spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getCurrentlyPlaying();
  }

  async getUser(): Promise<void> {
    const result = await this.spotifyService.getProfile();
    result.subscribe(user => {
      const newUser = User.fromJson(user);
      this.user = newUser;
    })
  }

  async getCurrentlyPlaying(): Promise<void> {
    const result = await this.spotifyService.getRecentlyPlayed();
    result.subscribe(playing => {
      for(const item of playing.items) {
        const track = Track.fromJson(item.track);
        this.items.push(track);
      }
    });
  }
}
