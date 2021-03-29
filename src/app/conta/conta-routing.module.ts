import { Routes} from '@angular/router';
import { LoginComponent } from './login';

export const ContaRoutes: Routes = [
    {
        path: 'conta',
        redirectTo: 'conta/login'
    },
    {
        path: 'conta/login',
        component: LoginComponent
    }
]