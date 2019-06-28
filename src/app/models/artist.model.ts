export class Artist {
    public external_urls: any[];
    public href: string;
    public id: string;
    public name: string;
    public type: string;

    constructor(external_urls: any[], href: string, id: string, name: string, type: string) {
        this.external_urls = external_urls;
        this.href = href;
        this.id = id;
        this.name = name;
        this.type = type;
    }

    static fromJson(json: any): Artist {
        const artist = new Artist(json.external_urls, json.href, json.id, json.name, json.type);

        return artist;
    }
}