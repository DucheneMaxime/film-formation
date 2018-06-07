import * as personne from "./personne";
import * as knowledge from "./knowledge";


export class Formateur extends personne.Personne {
    private _knowledge_list: Array<knowledge.Knowledge>;

    constructor(firstName:string, lastName:string, genre:personne.genre, religion:personne.religion, list:Array<knowledge.Knowledge>){
        super(firstName, lastName, genre, religion);
        this._knowledge_list = list;
    }

    get knowledge_list(){
        return this._knowledge_list;
    }

    set knowledge_list(list){
        this._knowledge_list = list;
    }

    public teach(){
        let res: Array<knowledge.Knowledge> = new Array<knowledge.Knowledge>();
        this._knowledge_list.forEach(element => {
            if(element.years >= 2)
                res.push(element);
        });
        return res;
    }
}