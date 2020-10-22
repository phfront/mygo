import { Component, OnInit } from '@angular/core';
import { MygoMessageService } from './mygo-message.service';

@Component({
  selector: 'app-mygo-message',
  templateUrl: './mygo-message.component.html',
  styleUrls: ['./mygo-message.component.scss'],
})
export class MygoMessageComponent implements OnInit {
  messageImage = {
    info: 'assets/images/info.png',
    success: 'assets/images/success.png',
    error: 'assets/images/error.png',
    warning: 'assets/images/warning.png',
  };
  textColor = {
    info: 'black',
    success: 'black',
    error: 'black',
    warning: 'black',
  };

  constructor(public mygoMessageService: MygoMessageService) {}

  ngOnInit(): void {}
}
