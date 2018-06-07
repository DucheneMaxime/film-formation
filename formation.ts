import * as formateur from "./formateur";
import * as stagiaire from "./stagiaire";


export class Formation {
    name: string;
    startDate: string;
    endDate: string;
    teachersList: Array<formateur.Formateur>
    internsList: Array<stagiaire.Stagiaire>

    constructor(name:string, startDate:string, endDate:string, teachersList:Array<formateur.Formateur>, internsList:Array<stagiaire.Stagiaire>){
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.teachersList = teachersList;
        this.internsList = internsList;
    }
}