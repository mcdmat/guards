import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AdminComponent } from './page/admin/admin.component';
import { IsConnectedGuard } from './shared/guard/is-connected.guard';
import { IsAdminGuard } from './shared/guard/is-admin.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [IsConnectedGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [IsAdminGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
