import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
@Input() customersFromHome: any;
@Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor() {}

  ngOnInit() {
  }

  register() {
    console.log(this.model);
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
