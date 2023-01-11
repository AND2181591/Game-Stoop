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
                platformDisplay = ''
                break;
        }

        return platformDisplay;
    }
}