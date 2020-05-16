
import { user } from './../model/user.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
// import { courseActionTypes, coursesLoaded } from './user.action';
import { courseActionTypes } from './user.action';

export interface CourseState extends EntityState<user> {
  coursesLoaded: boolean;
}

export const adapter: EntityAdapter<user> = createEntityAdapter<user>();

export const initialState = adapter.getInitialState({
  coursesLoaded: false
});

export const courseReducer = createReducer(
  initialState,

  on(courseActionTypes.coursesLoaded, (state, action) => {
    return adapter.addAll(
      action.user,
      {...state, coursesLoaded: true}
    );
  }),

  on(courseActionTypes.createCourse, (state, action) => {
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