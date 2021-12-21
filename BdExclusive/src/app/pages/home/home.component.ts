import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/service/order-details.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product: any;

  constructor(private service: OrderDetailsService) {}

  ngOnInit(): void {
    this.product = this.service.productDetails;
    
  }


}
