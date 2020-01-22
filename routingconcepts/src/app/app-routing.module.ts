import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteAComponent } from './route-a/route-a.component';
import { RouteBComponent } from './route-b/route-b.component';


const routes: Routes = [
  {path: 'routea',component:RouteAComponent},
  {path:'routea/:id',component:RouteBComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
