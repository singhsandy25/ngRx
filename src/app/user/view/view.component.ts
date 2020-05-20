import { Component, OnInit } from '@angular/core';
import { getAllUsers } from './../store/user.selector';
import { userActionTypes } from './../store/user.action';
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
  constructor(private userService: ServiceService, private store: Store<AppState>) {
  
   }

   users={};
   
  ngOnInit(): void {
    this.user$ = this.store.select(getAllUsers);

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     // console.log(json);
    //     this.users = json;
    //     console.log(this.users);
    //   });
  }

  deleteUser(id: string) {
    this.store.dispatch(userActionTypes.deleteUser({id}));
    console.log("user deleted");  }
  

}
