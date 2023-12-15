import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccesswalletComponent } from './pages/accesswallet/accesswallet.component';
import { CreatewalletComponent } from './pages/createwallet/createwallet.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'accesswallet', component: AccesswalletComponent },
    { path: 'createwallet', component: CreatewalletComponent },
];
