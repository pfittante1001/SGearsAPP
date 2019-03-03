import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_Guards/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './Nav/Nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_Service/Auth.service';
import { HomeComponent } from './Home/Home.component';
import { RegisterComponent } from './Register/Register.component';
import { ErrorInterceptorProvider } from './_Service/Error.Interceptor';
import { AlertifyService } from './_Service/Alertify.service';
import { ShirtListsComponent } from './Shirt-Lists/Shirt-Lists.component';
import { ProductCommentsComponent } from './Product-Comments/Product-Comments.component';
import { ShirtsComponent } from './Shirts/Shirts.component';
import { AppRoutes } from './routes';
import { PantsComponent } from './Pants/Pants.component';
import { ShoesComponent } from './Shoes/Shoes.component';
import { DealsComponent } from './Deals/Deals.component';





@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ShirtsComponent,
      ShirtListsComponent,
      ProductCommentsComponent,
      PantsComponent,
      ShoesComponent,
      DealsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BsDropdownModule.forRoot(),
      FormsModule,
      RouterModule.forRoot(AppRoutes)
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
