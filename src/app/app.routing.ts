import { Routes } from '@angular/router';


import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: FullComponent,
        children: [
            
            {
                path: 'material',
                loadChildren: () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
            },
            {
                path: 'multi',
                loadChildren: () => import('./multi-dropdown/multi-dd.module').then(m => m.MultiModule)
            },
            {
                path: 'starter',
                loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];
