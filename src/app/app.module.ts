import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './Nav/Nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_Service/Auth.service';
import { HomeComponent } from './Home/Home.component';
import { RegisterComponent } from './Register/Register.component';


@NgModule({
   declarations: [
      AppComponent,
      CustomerComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
