import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AuthService} from '../_Service/Auth.service';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
// @Input() customersFromHome: any; Used to deomonstrate passing information from parent to child
@Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
    console.log('registration successful');
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
