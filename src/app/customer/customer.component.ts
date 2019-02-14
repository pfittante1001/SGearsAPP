import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: any;

  constructor(private Http: HttpClient) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.Http.get('http://localhost:5000/api/customers').subscribe(response => {
      this.customers = response;
    }, error => {
      console.log(error);
    });
  }
}
