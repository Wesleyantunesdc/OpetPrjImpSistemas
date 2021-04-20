import { Routes} from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login';

export const ContaRoutes: Routes = [
    {
        path: 'conta',
        redirectTo: 'conta/login'
    },
    {
        path: 'conta/login',
        component: LoginComponent
    },
    {
        path: 'conta/cadastro',
        component: CadastroComponent
    }
]