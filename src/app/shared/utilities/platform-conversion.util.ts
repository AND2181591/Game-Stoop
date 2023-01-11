import { PLAYSTATION_4_ID, PLAYSTATION_5_ID, XBOX_ONE_ID, XBOX_SERIES_X_ID } from "src/app/constants/api.constants";
import { PS4, PS5, SERIES_X, XB1 } from "src/app/constants/route.constants";
import { PlatformEnum } from "src/app/enums/platform.enum";


export default class PlatformConversionUtil {
    static convertRouteToPlatformDisplay(route: string): string {
        let platformDisplay = '';

        switch (route) {
            case PS5: 
                platformDisplay = PlatformEnum.PS5;
                break;
            case PS4:
                platformDisplay = PlatformEnum.PS4;
                break;
            case SERIES_X:
                platformDisplay = PlatformEnum.SERIES_X;
                break;
            case XB1:
                platformDisplay = PlatformEnum.XB1;
                break;
            default: 
                platformDisplay = '';
                break;
        }

        return platformDisplay;
    }

    static convertRouteToPlatformID(route: string): number {
        let platformID = 0;

        switch (route) {
            case PS5:
                platformID = PLAYSTATION_5_ID;
                break;
            case PS4: 
                platformID = PLAYSTATION_4_ID;
                break;
            case SERIES_X: 
                platformID = XBOX_SERIES_X_ID;
                break;
            case XB1: 
                platformID = XBOX_ONE_ID;
                break;
            default: 
                platformID = 0;
                break;
        }
        
        return platformID; 
    }
}