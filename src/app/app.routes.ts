import { Routes } from '@angular/router';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
  {
    path:'',
    component:UserCreateComponent
  },
  {
    path:'create/:id',
    component:UserCreateComponent
  },
  {
    path:'users',
    component:UsersComponent
  }

];
