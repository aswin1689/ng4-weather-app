export class Weather {
    name: string;
    main: {
        temp: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
    };
    wind: {
        speed: number;
    };
    weather: [{
        main: string;
        description: string;
        icon: string;
    }];
}
