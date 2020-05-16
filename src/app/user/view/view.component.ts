import { Component, OnInit } from '@angular/core';
import { getAllCourses } from './../store/user.selector';
import { courseActionTypes } from './../store/user.action';
import { AppState } from './../../store/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { user } from './../model/user.model';
import { ServiceService } from './../service/service.service';
// import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
// import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  user$: Observable<user[]>;

  constructor(private userService: ServiceService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.user$ = this.store.select(getAllCourses);
   
    
  }

}
