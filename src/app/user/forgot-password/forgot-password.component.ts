import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { MygoService } from 'src/app/shared/services/mygo.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  form = new FormBuilder().group({
    email: [''],
  });

  constructor(private mygoService: MygoService, private router: Router) {}

  ngOnInit(): void {}

  sendEmail() {
    const { email } = this.form.value;
    if (!email) {
      return alert('Email inválido');
    }
    this.mygoService
      .forgotPassword(email)
      .pipe(take(1))
      .subscribe((response: any) => {
        alert('Foi enviado para seu email um link para criar uma nova senha');
      });
  }

  backToLogin() {
    this.router.navigate(['/user/login']);
  }
}
