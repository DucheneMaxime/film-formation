import * as personne from "./personne";
import * as certification from "./certification";

export class Stagiaire extends personne.Personne {
    certifications_list: Array<certification.Certification>

    constructor(firstName:string, lastName:string, genre:personne.genre, religion:personne.religion, list:Array<certification.Certification>){
        super(firstName, lastName, genre, religion);
        this.certifications_list = list;
    }
}