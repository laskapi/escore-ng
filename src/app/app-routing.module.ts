import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SuCompComponent } from './super/su-comp/su-comp.component';
import { SuUserComponent } from './super/su-user/su-user.component';
import { SuperComponent } from './super/super.component';

const routes: Routes = [
// {path: '', redirectTo: 'login', pathMatch: 'full'},
 {path:'super',component:SuperComponent,
  children: [{path:'superComp',component:SuCompComponent},{path:'superUser',component:SuUserComponent}]},
 {path:'admin',component:AdminComponent},
 {path:'login',component:LoginComponent},
 {path:'logout', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
