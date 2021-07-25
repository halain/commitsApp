import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  myForm: FormGroup = this.fb.group({
    email: ['user@test.com', [Validators.required, Validators.email]],
    password: ['password', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, 
              private router: Router,
              private authService: AuthService,
              private notification: SharedService) { }

  ngOnInit(): void {
  }
  login() {

    const {email, password} = this.myForm.value;
    this.loading = true;
    this.authService.login(email, password)
      .subscribe( ok => {
        if (ok === true) {
          this.router.navigate(['/commits']);
        } else {
          this.notification.showMessage('error',ok);
        }
        this.loading = false;
      }, err => {this.loading = false;});
  }



}
