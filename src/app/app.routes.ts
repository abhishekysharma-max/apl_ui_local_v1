import { Routes } from '@angular/router';
import { Login } from './login/login';
import { LayoutComponent } from './layout-component/layout-component';
import { CreateForm } from './layout-component/create-form/create-form';

export const routes: Routes = [
    {
        path: "",
        component: Login
    },
    {
        path: "app",
        component: LayoutComponent,
        children: [
            {
                path: "create-form",
                component: CreateForm
            },
            {
                path: "home",
                loadComponent: () => import('./layout-component/home/home')
                    .then(m => m.Home)
            }
        ]
    },

];
