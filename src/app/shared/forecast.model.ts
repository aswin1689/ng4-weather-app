export class Forecast {
    city: {
        name: string;
    }
    list: DayForecast[];
}

export class DayForecast{
    main: {
        temp_min: number;
        temp_max: number;
        humidity: number;
    }
    weather: [{
        main: string;
        description: string;
        icon: string;
    }]
}
