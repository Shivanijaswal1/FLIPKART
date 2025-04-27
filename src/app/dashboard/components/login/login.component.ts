import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators, } from '@angular/forms';
import { FlipkartService } from '../../service/flipkart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData: any[] = []
  loginForm!:FormGroup
 constructor(private _route:Router,private loginservice:FlipkartService) {}
 ngOnInit(): void {
  this.loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
  });   
}

  signup(){
    this._route.navigate(['/dashboard/sign-up'])
  }
  
  login(){
    const formData = this.loginForm.value;
    const allData = localStorage.getItem('userdata');
    if (allData) {
      const usersArray = JSON.parse(allData);
      const userIndex = usersArray.findIndex((user: any) =>
         user.email === formData.email);
      if (userIndex !== -1) {
          const user = usersArray[userIndex];
          this.loginservice.login(userIndex);
          alert("login")
        this._route.navigate(['/dashboard'])
    
       }
    }
    else{
      alert("user not found")
    }
  }
}


