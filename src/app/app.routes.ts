import { Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { BindingComponent } from "./demos/binding/binding.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";

export const rootRouterConfig: Routes = [
    {
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'sobre',
        component: SobreComponent
    },
    {
        path: 'contato',
        component: ContatoComponent
    },
    {
        path: 'feature-data-binding',
        component: BindingComponent
    }
];