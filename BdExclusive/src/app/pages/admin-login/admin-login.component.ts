import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './model';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  msg: boolean = false;
  
  submitted = false;
  form: FormGroup;
  lg: Login = new Login();

  constructor(private formbuilder: FormBuilder, private router: Router) {
    this.form = formbuilder.group({
      fuser: [null, [Validators.required]],
      fpassword: [null, [Validators.required]],
    })
   }

  ngOnInit(): void {
  }

  login() {
    this.submitted = true;
    if (this.lg.username.match("rakib") && this.lg.password.match("123")) {
      this.router.navigate(['/adminPanel']);
     



    } else {
      this.msg = true;
      this.router.navigate(['/admin']);

    }
    console.log("username : " + this.lg.username + "Password : " + this.lg.password);


  }

}
