import { UserState } from './user.reducer';
import { user } from './../model/user.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll } from './user.reducer';

export const userFeatureSelector = createFeatureSelector<UserState>('user');

export const getAllUsers = createSelector(
  userFeatureSelector,
  selectAll
);

export const areUserLoaded = createSelector(
  userFeatureSelector,
  state => state.usersLoaded
);
