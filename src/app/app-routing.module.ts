import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { HomeComponent } from './home/home.component';
import { RoleComponent } from './role/role.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{
  path:"home",
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
},
{
  path:"user",
  component:UserComponent
},
{
  path:"role",
  component:RoleComponent
},
{
  path:"user/:id",
  component:UserDetailComponent
},
{
  path:"**",
  component:HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
