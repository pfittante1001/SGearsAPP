import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {}

  model: any = {};

  ngOnInit() {
  }

  register() {
    console.log(this.model);
  }

  cancel() {
    console.log('cancelled');
  }
}
