import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MygoService } from 'src/app/shared/services/mygo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private mygoService: MygoService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.mygoService.logout();
    this.router.navigate(['/user/login']);
  }
}
