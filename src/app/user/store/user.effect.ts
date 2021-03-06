import { userActionTypes, usersLoaded } from './user.action';
// import { courseActionTypes, coursesLoaded, updateCourse } from './user.action';
import { ServiceService } from './../service/service.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
    
  constructor(private ServiceService: ServiceService, private actions$: Actions, private router: Router) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActionTypes.loadusers),
      concatMap(() => this.ServiceService.getAllUsers()),
      map(users => userActionTypes.usersLoaded({users}))
    )
  );

  createUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActionTypes.createUser),
      concatMap((action) => this.ServiceService.createUsers(action.user))
    
    ),
    {dispatch: false}
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActionTypes.deleteUser),
      concatMap((action) => this.ServiceService.deleteUser(action.id))
    ),
    {dispatch: false}
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActionTypes.updateUser),
      concatMap((action) => this.ServiceService.updateUser(action.update.id, action.update.changes))
    ),
    {dispatch: false}
  );



}