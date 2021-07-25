import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get user() {
    return this.authService.user;
  }

  constructor(private router: Router,
              private authService:AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['/auth']);
    this.authService.logout();
  }

}
