
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

  getAllUsers(): Observable<user[]> {
    return this.http.get<user[]>('https://jsonplaceholder.typicode.com/users');
  }


  createUsers(user: user): Observable<user> {
    return this.http.post<user>('https://jsonplaceholder.typicode.com/posts', user);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1' + id);
  }

 
}
  