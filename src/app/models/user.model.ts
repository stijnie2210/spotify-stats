import { Image } from './image.model'

export class User {
    public display_name: string;
    public href: string;
    public type: string;
    public uri: string;
    public id: string;
    public images: Array<Image>;
    public followers: {
        href: string,
        total: number
    }
    
    constructor(display_name: string, href:string, type: string, uri: string, id: string, images: Array<Image>, followers: any) {
        this.display_name = display_name;
        this.href = href;
        this.type = type;
        this.uri = uri;
        this.id = id;
        this.images = images;
        this.followers = followers;
    }

    static fromJson(json: any): User {
        const user = new User(json.display_name, json.href, json.type, json.uri, json.id, json.images, json.followers)

        return user;
    }
}