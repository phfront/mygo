import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { MygoService } from 'src/app/shared/services/mygo.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  form = new FormBuilder().group({
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    hash: [''],
  });

  constructor(
    private mygoService: MygoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      this.form.get('hash').setValue(params.hashId);
    });
  }

  submit() {
    const { hash, password, confirmPassword } = this.form.value;
    if (password !== confirmPassword) {
      return alert('Senhas diferentes');
    }
    this.mygoService
      .changePassword(hash, password, confirmPassword)
      .pipe(take(1))
      .subscribe(
        (response: any) => {
          if (response.success) {
            alert('Senha alterada com sucesso');
            this.backToLogin();
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
