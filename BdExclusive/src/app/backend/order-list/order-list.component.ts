import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  ol: any;

  constructor(private ps: ProductService) { }

  ngOnInit(): void {

    this.ps.getAllOrderList().subscribe(res => {
      console.log(res);
      this.ol = res;

    }, err => {
      console.log(err);

    })
  }

}
