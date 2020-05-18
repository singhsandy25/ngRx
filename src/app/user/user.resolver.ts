
import { areUserLoaded } from './store/user.selector';
import { loadusers, usersLoaded } from './store/user.action';
import { AppState } from './../store/index';
// import { user } from './model/user.model';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';

@Injectable()
export class UserResolver implements Resolve<Observable<any>> {

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
    .pipe(
        select(areUserLoaded),
        tap((usersLoaded) => {
          if (!usersLoaded) {
            this.store.dispatch(loadusers());
          }

        }),
        filter(usersLoaded => usersLoaded),
        first()
    );
  }
}