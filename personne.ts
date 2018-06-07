import * as boisson from "./boisson";

export enum genre {
    Male = "Male",
    Female = "Female"
}

export enum religion {
    Buddhism = "Buddhism",
    Judaism = "Judaism",
    Islam = "Islam",
    Catholicism = "Catholicism",
    Atheist = "Atheist"
}

export class Personne {
    firstName: string;
    lastName:string;
    genre: genre;
    private _religion: religion;

    constructor(firstName:string, lastName:string, genre:genre, religion:religion){
        this.firstName = firstName;
        this.lastName = lastName;
        this.genre = genre;
        this._religion = religion;
    }

    get religion(){
        return this._religion
    }

    set relgion (religion:religion){
        this._religion = religion;
    }

    public toDrink(drink:boisson.Boisson){
        let res: string = ("Drinking " + drink.name + " with");
        if(!drink.alcoholic)
            res += ("out");
        res += (" alcohol, which is")
        if(!drink.bio)
            res += ("n't");
        res += (" organic");
        return res;
    }

    public toString(){
        return (this.firstName + ' ' + this.lastName);
    }
}