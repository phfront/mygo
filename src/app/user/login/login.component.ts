import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { MygoService } from 'src/app/shared/services/mygo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = new FormBuilder().group({
    username: [''],
    password: [''],
  });

  constructor(private mygoService: MygoService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.mygoService
        .verifyToken()
        .pipe(take(1))
        .subscribe((response: any) => {
          if (response.success) {
            this.router.navigate(['/user/home']);
          }
        });
    }
  }

  login() {
    this.mygoService
      .login(this.form.get('username').value, this.form.get('password').value)
      .pipe(take(1))
      .subscribe(
        (response: any) => {
          if (response.success) {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/user/home']);
          }
        },
        (response: { error: { errors: [] } }) => {
          alert(response.error.errors.join(' | '));
        }
      );
  }

  register() {
    this.router.navigate(['/user/register']);
  }

  forgotPassword() {
    this.router.navigate(['/user/forgot-password']);
  }
}
