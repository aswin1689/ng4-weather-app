import { Routes } from '@angular/router';

import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';

export const appRoutes:Routes = [
    {
        path: '',
        component: CurrentComponent
    },
    {
        path: 'forecast',
        component: ForecastComponent
    }
]
