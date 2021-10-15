import { Genre } from "./Genre";
import { ParentPlatform } from "./ParentPlatform";
import { Publishers } from "./Publishers";
import { Rating } from "./Rating";
import { Screenshots } from "./Screenshots";
import { Trailer } from "./Trailer";


export interface Game {
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>
    ratings: Array<Rating>;
    screenshots: Array<Screenshots>
    trailers: Array<Trailer>;
}