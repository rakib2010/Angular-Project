import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './backend/admin/admin.component';
import { CategoryComponent } from './backend/category/category.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { CartComponent } from './pages/cart/cart.component';
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
  { path: "products/:id", component: OrderPageComponent },
  { path: "cart", component: CartComponent },

  { path: "adminPanel", component: AdminComponent,
  children : [
    { path: "dashboard", component: DashboardComponent },
    { path: "category", component: CategoryComponent },
  ]
   },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
