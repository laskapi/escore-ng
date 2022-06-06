import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SuperComponent } from './super/super.component';

const routes: Routes = [
// {path: '', redirectTo: 'login', pathMatch: 'full'},
 {path:'super',component:SuperComponent},
 {path:'admin',component:AdminComponent},
 {path:'login',component:LoginComponent},
 {path:'logout', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
