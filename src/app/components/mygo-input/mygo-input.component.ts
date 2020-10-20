import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mygo-input',
  templateUrl: './mygo-input.component.html',
  styleUrls: ['./mygo-input.component.scss'],
})
export class MygoInputComponent implements OnInit {
  @Input() type: string;
  @Input() formControl: FormControl;
  @Input() placeholder: string = '';

  constructor() {}

  ngOnInit(): void {}
}
