import { Component, OnInit } from '@angular/core';
import { user } from './../model/user.model';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  {

  constructor( private fb: FormBuilder ) { }

   user: user;
  
    userForm=this.fb.group
    ({
      Name:["",[Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
      email:["",[Validators.required, Validators.email]],
      //contact:["",Validators.required,Validators.pattern("[789][0-9]{9}")],
      contact:[""]
      
    })
  
    get Name()
    {
      return this.userForm.get("Name");
    }
     
    get email()
    {
      return this.userForm.get("email");
    }
  
    get contact()
    {
      return this.userForm.get("contact");
    }



    onSubmit() 
    {
     //console.log("hello");
     //console.log(this.Name.value);
        this.user = {
        name: this.Name.value,
        email: this.email.value,
        contact: this.contact.value
        };

        console.log(this.user);
    }


}


