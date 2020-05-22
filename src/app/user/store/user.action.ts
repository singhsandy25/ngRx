import { user } from './../model/user.model';
import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';


export const loadusers= createAction(
  '[Users List] Load Users via Service',
);

export const usersLoaded = createAction(
  '[Users Effect] Users Loaded Successfully',
  props<{users: user[]}>()
);

export const createUser = createAction(
  '[Create User Component] Create User',
  props<{user: user}>()
  
);

export const deleteUser = createAction(
  '[Users List Operations] Delete User',
  props<{id: string}>()
);

export const updateUser = createAction(
  '[Users List Operations] Update User',
  props<{update: Update<user>}>()
);

export const userActionTypes = {
  loadusers,
  usersLoaded,
     createUser,
        deleteUser,
          updateUser

};

