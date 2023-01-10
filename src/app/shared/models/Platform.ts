import { Game } from "./Game";

// Possible platforms the user can search
export enum Platforms {
    'ps4' = 'ps4', 
    'ps5' = 'ps5',
    'xbox-series-x' = 'xbox-series-x', 
    'xbox-one' = 'xbox-one'
}

// This interface will cover both 'Best' and 'New' Games by platform
// export type GamesByPlatform = {
//     [key in Platforms]: {
//         data: Game[];
//     }
// }

export interface IGameResponse {
    results: IGame[];
}

export interface IGame {
    id: number;
    name: string;
    released: string;
    background_image: string;
    platforms: IGamePlatform[];
    developers: IDeveloper[];
    rating: number;
    genres: IGenre[];
}

export interface IGamePlatform {
    id: number;
    name: string;
}

export interface IDeveloper {
    name: string;
}

export interface IGenre {
    name: string;
}