
import { user } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllCourses(): Observable<user[]> {
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/posts');
  }


  createCourse(user: user): Observable<user> {
    return this.http.post<user>('https://jsonplaceholder.typicode.com/posts', user);
  }

  // createCourse(user: user): Observable<user> {
    
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       body: JSON.stringify({
//       name: this.user.name,
//       email: this.user.email,
//       contact: this.user.contact
//  }),
//  headers: {
//    "Content-type": "application/json; charset=UTF-8"
//  }
// })
// .then(response => response.json())
// .then(json => console.log(json))
// // return this.http.post<Course>('/api/courses', course);
//  return this.createCourse.arguments;
// }
}
  