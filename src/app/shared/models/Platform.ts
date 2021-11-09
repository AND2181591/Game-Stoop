import { Game } from "./Game";

// Possible platforms the user can search
enum Platforms {
    'ps4' = 'ps4', 
    'ps5' = 'ps5',
    'xbox-series-x' = 'xbox-series-x', 
    'xbox-one' = 'xbox-one'
}

// This interface will cover both 'Best' and 'New' Games by platform
export type GamesByPlatform = {
    [key in Platforms]: {
        data: Game[];
    }
}