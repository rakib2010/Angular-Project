import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  singleProduct: any;

  getMenuId: any;

  constructor(private ps: ProductService, private param: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    this.ps.getOne(this.getMenuId).subscribe(res => {
      console.log(res);
      this.singleProduct = res;
    }, err => {
      console.log(err);

    })

  }

}
