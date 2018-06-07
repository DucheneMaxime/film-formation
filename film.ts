import * as trailer from "./trailer";

export class Film {
    title: string;
    releaseDate: string;
    studio: string;
    poster: string;
    location: string;
    rating: string;
    genre: Array<string>;
    directors: string;
    actors: Array<string>;
    trailer: trailer.Trailer;

    constructor(title:string, releaseDate:string, studio:string, poster:string, location:string, rating:string, genre:Array<string>, directors:string, actors:Array<string>, trailer:trailer.Trailer){
        this.title = title;
        this.releaseDate = releaseDate;
        this.studio = studio;
        this.poster = poster;
        this.location = location;
        this.rating = rating;
        this.genre = genre;
        this.directors = directors;
        this.actors = actors;
        this.trailer = trailer;
    }
}