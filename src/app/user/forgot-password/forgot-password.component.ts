import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { MygoService } from 'src/app/shared/services/mygo.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  form = new FormBuilder().group({
    email: [''],
  });

  constructor(private mygoService: MygoService, private router: Router) {}

  ngOnInit(): void {}

  sendEmail() {
    const { email } = this.form.value;
    this.mygoService
      .forgotPassword(email)
      .pipe(take(1))
      .subscribe(
        (response: any) => {
          if (response.success) {
            alert(
              'Foi enviado para seu email um link para criar uma nova senha'
            );
          } else {
            alert(response.errors.join('|'));
          }
        },
        (response: any) => {
          alert(response.error.errors.join('|'));
        }
      );
  }

  backToLogin() {
    this.router.navigate(['/user/login']);
  }
}
