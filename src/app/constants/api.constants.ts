import { environment } from "src/environments/environment";

export const PLAYSTATION_5_ID = 187;
export const PLAYSTATION_4_ID = 18;
export const XBOX_SERIES_X_ID = 186;
export const XBOX_ONE_ID = 1;

const BASE_URL = environment.BASE_URL;
export const GAME_LIST_URL = BASE_URL + 'games';