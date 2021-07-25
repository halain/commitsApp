import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../../shared/services/shared.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['Test 1', [Validators.required]],
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private authService: AuthService,
              private notification: SharedService) { }

  ngOnInit(): void {
  }

  register() {
    const {email, password, name} = this.myForm.value;
    this.authService.register(name, email, password)
      .subscribe( ok => { 
        console.log(ok);
               
        if (ok === true) {
          this.router.navigate(['/commits']);
        } else {
          this.notification.showMessage('error',ok);
        }
      });
  }

}
