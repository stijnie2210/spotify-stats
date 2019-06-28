import { Artist } from './artist.model';

export class Track {
    public artists: Artist[] = [];
    public href: string;
    public name: string;
    public played_at: string;

    constructor(artists: Artist[], href: string, name: string, played_at: string) {
        artists.forEach(artist => {
            this.artists.push(Artist.fromJson(artist));
        });
        this.href = href;
        this.name = name;
        this.played_at = played_at;
    }

    static fromJson(json: any): Track {
        const track = new Track(json.artists, json.href, json.name, json.played_at);

        return track;
    }
}