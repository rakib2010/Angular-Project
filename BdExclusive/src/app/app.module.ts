import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomerSupportComponent } from './pages/customer-support/customer-support.component';
import { AboutComponent } from './pages/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { CategoryComponent } from './backend/category/category.component';
import { AdminComponent } from './backend/admin/admin.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderListComponent } from './backend/order-list/order-list.component';
import { ProductService } from './service/product.service';
import { LocalStorageService } from './service/local-storage.service';
import { OrderDetailsService } from './service/order-details.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    CustomerSupportComponent,
    AboutComponent,
    RegisterComponent,
    DashboardComponent,
    AdminLoginComponent,
    OrderPageComponent,
    CategoryComponent,
    AdminComponent,
    CartComponent,
    OrderListComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    
    
    
    
    
    
   
  ],
  providers: [
    ProductService,
    LocalStorageService,
    OrderDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
