import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormPrestadoresComponent } from './components/form-prestadores/form-prestadores.component';

export const routes: Routes = [

    {
        path: "",
        component: HomeComponent
    },

    {
        path: "form-prestadores",
        component: FormPrestadoresComponent
    }
];
