import { Game } from "./Game";

// Get Video Game details for a specific game by their gameid
export interface VideoGameDetails {
    [id: number]: {
        data: Game;
    }
}