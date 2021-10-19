import { Game } from "./Game";

// Possible platforms the user can search
enum Platforms {
    'ps3' = 'ps3', 
    'ps4' = 'ps4', 
    'ps5' = 'ps5', 
    'xbox-360' = 'xbox-360',
    'xbox-one' = 'xbox-one', 
    'xbox-series-x' = 'xbox-series-x', 
    '3ds' = '3ds',  
    'switch' = 'switch', 
    'pc' = 'pc'
}

// This interface will cover both 'Best' and 'New' Games by platform
export type GamesByPlatform = {
    [key in Platforms]: {
        data: Game[];
    }
}