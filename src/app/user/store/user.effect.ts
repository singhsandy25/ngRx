import { courseActionTypes, coursesLoaded } from './user.action';
// import { courseActionTypes, coursesLoaded, updateCourse } from './user.action';
import { ServiceService } from './../service/service.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class CourseEffects {
    
  constructor(private ServiceService: ServiceService, private actions$: Actions, private router: Router) {}

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActionTypes.loadCourses),
      concatMap(() => this.ServiceService.getAllCourses()),
      map(user => courseActionTypes.coursesLoaded({user}))
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActionTypes.createCourse),
      concatMap((action) => this.ServiceService.createCourse(action.user)),
    //   tap(() => this.router.navigateByUrl('/users'))
    ),
    {dispatch: false}
  );

//   deleteCourse$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(courseActionTypes.deleteCourse),
//       concatMap((action) => this.courseService.deleteCourse(action.courseId))
//     ),
//     {dispatch: false}
//   );

//   updateCOurse$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(courseActionTypes.updateCourse),
//       concatMap((action) => this.courseService.updateCourse(action.update.id, action.update.changes))
//     ),
//     {dispatch: false}
//   );

}