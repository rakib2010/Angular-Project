import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { CustomerSupportComponent } from './pages/customer-support/customer-support.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "about", component: AboutComponent },
  { path: "support", component: CustomerSupportComponent },
  { path: "register", component: RegisterComponent },
  { path: "admin", component: AdminLoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "products/:id", component: OrderPageComponent },
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
