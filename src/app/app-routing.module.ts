import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SquareComponent } from './square/square.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'login', component: LoginComponent},
  {path:'square', component: SquareComponent},
  {path:'rectangle', component: RectangleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
