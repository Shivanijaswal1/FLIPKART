import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"",redirectTo:"dashboard",pathMatch:"full"},
  {path:"dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then(v=>v.DashboardModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
