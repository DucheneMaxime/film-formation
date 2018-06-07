import * as formation from '../formation';
import * as personne from '../personne';
import * as boisson from '../boisson';
import * as formateur from '../formateur';
import * as knowledge from '../knowledge';
import * as certification from '../certification';
import * as stagiaire from '../stagiaire';
import {expect} from 'chai';
import { Certification } from '../certification';

it("should drink Fanta", function() {
    let personToTest = new personne.Personne("Sony", "Lauret", personne.genre.Male, personne.religion.Catholicism);
    let drinkToTest = new boisson.Boisson("Fanta", false, false);

    expect(personToTest.toDrink(drinkToTest)).to.equal("Drinking Fanta without alcohol, which isn't organic");
});

it("should teach kung-fu, e-sport", function () {
    let knowledge1 = new knowledge.Knowledge("kung-fu", 10);
    let knowledge2 = new knowledge.Knowledge("cinema", 1);
    let knowledge3 = new knowledge.Knowledge("e-sport", 6);
    let listKnowledge: Array<knowledge.Knowledge> = new Array<knowledge.Knowledge>();
    listKnowledge.push(knowledge1);
    listKnowledge.push(knowledge2);
    listKnowledge.push(knowledge3);
    let teacherToTest = new formateur.Formateur("Sony", "Lauret", personne.genre.Male, personne.religion.Catholicism, listKnowledge);

    expect(teacherToTest.teach()).to.include(knowledge3).to.include(knowledge1);
});

it("should create a formation", function(){
    let listKnowledge1 = new Array<knowledge.Knowledge>();
    listKnowledge1.push(new knowledge.Knowledge("kung-fu", 10));
    listKnowledge1.push(new knowledge.Knowledge("cinema", 1));
    listKnowledge1.push(new knowledge.Knowledge("e-sport", 6));
    let teacher1 = new formateur.Formateur("Sony", "Lauret", personne.genre.Male, personne.religion.Atheist, listKnowledge1);

    let listKnowledge2 =  new Array<knowledge.Knowledge>();
    listKnowledge2.push(new knowledge.Knowledge("sel", 20));
    let teacher2 = new formateur.Formateur("Quentin", "W", personne.genre.Male, personne.religion.Atheist, listKnowledge2);

    let listCertification1 = new Array<certification.Certification>();
    listCertification1.push(new certification.Certification("test", 15));
    listCertification1.push(new certification.Certification("test2", 3));
    let intern1 = new stagiaire.Stagiaire("Valentin", "Bourdaud", personne.genre.Male, personne.religion.Buddhism, listCertification1);

    let listCertification2 = new Array<certification.Certification>();
    listCertification1.push(new certification.Certification("blabla", 1));
    listCertification1.push(new certification.Certification("oahfoea", 1));
    let intern2 = new stagiaire.Stagiaire("Valentin", "Le Marie", personne.genre.Male, personne.religion.Buddhism, listCertification2);

    let internsList = new Array<stagiaire.Stagiaire>();
    internsList.push(intern1);
    internsList.push(intern2);

    let teachersList = new Array<formateur.Formateur>();
    teachersList.push(teacher1);
    teachersList.push(teacher2);

    let formationToTest = new formation.Formation("Sonix", "07/06/2018", "08/06/2018", teachersList, internsList);

    expect(formationToTest.teachersList).to.include(teacher2);
    expect(intern1.religion).to.equal("Buddhism");
});