export interface TransactionItem {
    game: IGame;
    price: number;
    platform?: string;
}

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