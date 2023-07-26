import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './component/alumnos/alumnos.component';
import { HomeComponent } from './component/home/home.component';


const childRoutes: Routes = [
  //paths
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'alumnos', component: AlumnosComponent},
]
@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class RouterChildModule { }

