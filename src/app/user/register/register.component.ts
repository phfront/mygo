import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { MygoService } from 'src/app/shared/services/mygo.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user = new FormBuilder().group({
    name: [''],
    email: [''],
    username: [''],
    password: [''],
  });

  constructor(private mygoService: MygoService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    this.mygoService
      .register(
        this.user.get('name').value,
        this.user.get('email').value,
        this.user.get('username').value,
        this.user.get('password').value
      )
      .pipe(take(1))
      .subscribe(
        (response: any) => {
          if (response.success) {
            this.backToLogin();
            alert('Usuário criado com sucesso');
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
