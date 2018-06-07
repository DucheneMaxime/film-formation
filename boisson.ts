export class Boisson {
    name: string;
    alcoholic: boolean;
    bio: boolean;

    constructor(name:string, alcoholic:boolean, bio:boolean){
        this.name = name;
        this.alcoholic = alcoholic;
        this.bio = bio;
    }
}