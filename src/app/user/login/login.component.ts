import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { MygoService } from 'src/app/shared/services/mygo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form;

  constructor(
    private mygoService: MygoService,
    private router: Router,
    private formBuilder: FormBuilder,
    public themeService: ThemeService
  ) {
    this.form = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.mygoService
        .verifyToken()
        .pipe(take(1))
        .subscribe((response: any) => {
          if (response.success) {
            this.loginComplete(false);
          }
        });
    }
  }

  login() {
    this.mygoService
      .login(this.form.get('username').value, this.form.get('password').value)
      .pipe(take(1))
      .subscribe((response: any) => {
        if (response.success) {
          localStorage.setItem('token', response.token);
          this.loginComplete(true);
        }
      });
  }

  loginComplete(saveTheme) {
    const tempTheme = localStorage.getItem('temptheme');
    if (tempTheme && saveTheme) {
      this.themeService.saveTheme(tempTheme);
    }
    this.router.navigate(['/user/home']);
  }

  register() {
    this.router.navigate(['/user/register']);
  }
}
