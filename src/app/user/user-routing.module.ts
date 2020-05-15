import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { ViewComponent } from './view/view.component';
 import { CreateComponent } from './create/create.component';



const userRoutes: Routes = [
  
  {
    path: 'view', 
    component: ViewComponent
          },
  
  {
     path: 'list', 
     component: CreateComponent
          }        
    
];


@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
