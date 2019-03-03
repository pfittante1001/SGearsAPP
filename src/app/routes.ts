import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ShirtsComponent } from './Shirts/Shirts.component';
import { ShirtListsComponent } from './Shirt-Lists/Shirt-Lists.component';
import { ProductCommentsComponent } from './Product-Comments/Product-Comments.component';
import { PantsComponent } from './Pants/Pants.component';
import { ShoesComponent } from './Shoes/Shoes.component';
import { DealsComponent } from './Deals/Deals.component';
import { AuthGuard } from './_Guards/auth.guard';

export const AppRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Deals', component: DealsComponent, canActivate: [AuthGuard]},
  {path: 'Shirts', component: ShirtsComponent},
  {path: 'Pants', component: PantsComponent},

  //example of how to protect multiple routes
  // {
  //   path: '',
  //   runGuardsAndResolvers: 'always',
  //   canActivate: [AuthGuard],
  //   children: [
  //     {path: 'Deals', component: DealsComponent, canActivate: [AuthGuard]},
  //     {path: 'Shirts', component: ShirtsComponent},
  //     {path: 'Pants', component: PantsComponent},
  //   ]
  // },
  {path: 'Shoes', component: ShoesComponent},
  {path: 'Shirt-List', component: ShirtListsComponent},
  {path: 'Product-Comments', component: ProductCommentsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
