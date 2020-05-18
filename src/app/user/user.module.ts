import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { ServiceService } from './service/service.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './store/user.reducer';
import { UserEffects } from './store/user.effect';
import { UserResolver } from './user.resolver';


@NgModule({
  declarations: [CreateComponent, ViewComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects])

  ],
  providers: [ServiceService,UserResolver]
})
export class UserModule { }
