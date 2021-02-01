import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BackgroundImgComponent } from './components/background-img/background-img.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';


import { ErrorComponent } from './error/error.component';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';

import { WelcomeDataService } from './service/data/welcome-data.service';
import { RouteguardService } from './service/routeguard.service';
import { WelcomeComponent } from './service/welcome/welcome.component';

//The Below commented code is for lazy loding of feature modules
// const routes: Routes = [
//   { path: 'customers', 
//     loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
//   { path: 'orders',
//     loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)},
//     {
//       path: '',
//       redirectTo: '',
//       pathMatch: 'full'
//     }
//   ];

// const routes:Routes=[
//   {path:'', component:LoginComponent},
//   {path:'login', component:LoginComponent},
//   {path:'welcome/:name', component:WelcomeComponent, canActivate:[RouteguardService]},
//   {path:'listtodos', component:ListToDosComponent,canActivate:[RouteguardService]},
//   {path:'logout', component:LogoutComponent,canActivate:[RouteguardService]},
//   {path:'**', component:ErrorComponent,}

// ];

const routes:Routes=[
   {path:'', component:BackgroundImgComponent},
  
  // {path:'', component:HeaderComponent}, SigninComponent
  // {path:'', component:SigninComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {path:'home', component:HomeComponent,canActivate:[RouteguardService]},
  {path:'logout', component:LogoutComponent,canActivate:[RouteguardService]},
  {path:'about', component:AboutComponent,canActivate:[RouteguardService]},
  {path:'**', component:ErrorComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
