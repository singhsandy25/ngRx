import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { ViewComponent } from './view/view.component';
 import { CreateComponent } from './create/create.component';
 import { UserResolver } from './user.resolver';
 

const userRoutes: Routes = [  
  {
    path: 'view', 
    component: ViewComponent,
    resolve: {
      users: UserResolver
    }
          },
  {
    path: 'create', 
    component: CreateComponent,
    
         }       
  
  
];


@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
