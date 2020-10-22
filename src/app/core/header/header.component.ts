import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { IMygoUser } from 'src/app/shared/interfaces/mygoapi';
import { MygoService } from 'src/app/shared/services/mygo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: IMygoUser;

  constructor(private mygoService: MygoService, private router: Router) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.mygoService
      .user()
      .pipe(take(1))
      .subscribe(
        (response: any) => {
          this.user = response.user;
        },
        (response: any) => {
          this.mygoService.logout();
          this.router.navigate(['/user/login']);
        }
      );
  }

  logout() {
    this.mygoService.logout();
    this.router.navigate(['/user/login']);
  }

  goHome() {
    this.router.navigate(['/user/home']);
  }
}
