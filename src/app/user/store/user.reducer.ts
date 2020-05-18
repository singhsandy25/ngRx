
import { user } from './../model/user.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
// import { courseActionTypes, coursesLoaded } from './user.action';
import { userActionTypes } from './user.action';

export interface UserState extends EntityState<user> {
  usersLoaded: boolean;
}

export const adapter: EntityAdapter<user> = createEntityAdapter<user>({
    selectId: user => user.name
  });

export const initialState = adapter.getInitialState({
  usersLoaded: false
});

export const userReducer = createReducer(
  initialState,

  on(userActionTypes.usersLoaded, (state, action) => {
    return adapter.addAll(
      action.users,
      {...state, usersLoaded: true}
    );
  }),

  on(userActionTypes.createUser, (state, action) => {
    return adapter.addOne(action.user, state);
  }),

//   on(courseActionTypes.deleteCourse, (state, action) => {
//     return adapter.removeOne(action.courseId, state);
//   }),

//   on(courseActionTypes.updateCourse, (state, action) => {
//     return adapter.updateOne(action.update, state);
//   })
);

export const { selectAll, selectIds } = adapter.getSelectors();