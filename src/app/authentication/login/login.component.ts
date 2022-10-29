import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MyserviceService } from '../../myservice.service';
import { LoginService } from './login.services';
import { HandleTokenService } from 'src/app/shared/handle-token.services';


import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MyserviceService]
})

export class LoginComponent implements OnInit {
  

   _loginForm!: FormGroup; //= Object.create(null);
  // _loginForm!: FormGroup; 

  constructor(
    private fb: FormBuilder,
    private service: MyserviceService,
    private router: Router,
    private loginService: LoginService, 
    private handleToken: HandleTokenService,
    private routes: Router) 
    { }

  ngOnInit() {
    this._loginForm = this.fb.group({
      email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    this.loginService.onLogin(this._loginForm.value).subscribe({
      next: (response) => {
        console.log(response.token)
        this.handleToken.saveToken(response.token);
        this.handleToken.saveUser(response);
        // this.handleToken.autoLogout();
      },
      error:(error) => console.log("LOGIN ERROR: "+error),
      complete: () => {
       this.router.navigate(['/dashboards/dashboard1']);
      } 
    }).unsubscribe;

  }


  
}
