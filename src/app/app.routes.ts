import { Routes } from '@angular/router';

import { AppComponent } from './app.component';

export const appRoutes:Routes = [
    {
        path: '',
        redirectTo: "/weather",
        pathMatch: 'full'
    },
    {
        path: 'weather',
        component: AppComponent
    },
    { 
        path: '**', 
        redirectTo: "/weather"
    }
]
