import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  customers: any;

  constructor(private http: HttpClient) { }

   ngOnInit() {
    this.getCustomers();
  }

  registerToggle() {
    this.registerMode = true;
  }
  getCustomers() {
    this.http.get('http://localhost:5000/api/customers').subscribe(response => {
      this.customers = response;
    }, error => {
      console.log(error);
    });
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
