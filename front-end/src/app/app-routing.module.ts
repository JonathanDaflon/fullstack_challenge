import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './crud/auth.guard';
import { FuncionarioChartComponent } from './funcionario/chart/chart.component';
import { FuncionarioDetailsComponent } from './funcionario/details/details.component';
import { FuncionarioHomeComponent } from './funcionario/home/home.component';
import { LoginHomeComponent } from './login/home/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'crud/home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'crud/login', component: LoginHomeComponent },
  { path: 'crud/home', component: FuncionarioHomeComponent, canActivate: [AuthGuard]},
  { path: 'crud/details', component: FuncionarioDetailsComponent, canActivate: [AuthGuard] },
  { path: 'crud/chart', component: FuncionarioChartComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
