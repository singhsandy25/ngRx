import { Component, OnInit } from '@angular/core';
import { user } from './../model/user.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AppState } from './../../store';
import { Store } from '@ngrx/store';
import { createUser } from './../store/user.action';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  {

  constructor( private fb: FormBuilder, private store: Store<AppState> ) { }
  
    userForm=this.fb.group
    ({
      Name:["",[Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
      email:["",[Validators.required, Validators.email]],

      phone:[""]
      
    })
  
    get Name()
    {
      return this.userForm.get("Name");
    }
     
    get email()
    {
      return this.userForm.get("email");
    }
  
    get phonet()
    {
      return this.userForm.get("phone");
    }

    onSubmit(submittedForm) 
    {
   
       const user : user = {
        id: submittedForm.value.id,
        name: submittedForm.value.Name,
        email: submittedForm.value.email,
        phone: submittedForm.value.phone
        };

        console.log(user);
        
        this.store.dispatch(createUser({user}));

     }


}


