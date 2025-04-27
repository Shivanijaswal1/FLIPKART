import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signForm!: FormGroup;
  usersArray:any[] = [];
 constructor(private _route:Router) {}
 ngOnInit() {
  this.signForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
  });
}

 login(){
    this._route.navigate(['/dashboard/login'])
  }

  signup(){
    if(this.signForm.valid){
      const formData=this.signForm.value;
      const email=formData.email;
      const allData=localStorage.getItem('userdata');
      if(allData){
        this.usersArray=JSON.parse(allData);
        for(let i=0;i<this.usersArray.length;i++){
          if(this.usersArray[i].email===email){
            alert("email already taken");
            return
          }
        }
      }
      this.usersArray.push(formData);
      localStorage.setItem('userdata',JSON.stringify(this.usersArray));
      this._route.navigate(['dashboard/login']);
    }
  }
  }

