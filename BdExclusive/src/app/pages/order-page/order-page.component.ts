import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';


@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']

})
export class OrderPageComponent implements OnInit {
  items: any;
  singleProduct: any = [];
  getMenuId: any;
  msg: boolean = false;
  count = 0;
  totalAmount = 0;
  productCount: any;





  constructor(private ps: ProductService, private param: ActivatedRoute, private storage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    this.ps.getOne(this.getMenuId).subscribe(res => {
      console.log(res);
      this.singleProduct = res;

    }, err => {
      console.log(err);

    })

  }





  counterPlus() {
    this.count++;
    this.totalAmount = this.singleProduct.price * this.count

  }

  counterMinus() {
    this.count--
    this.totalAmount = this.totalAmount - this.singleProduct.price

  }



  addToCard() {
    var strItems = this.storage.getItem('fav_items');
    if (strItems != null) {
      this.items = JSON.parse(strItems);
      this.productCount = JSON.parse(strItems);
      console.log(this.productCount);


    } else {
      this.items = [];
    }




    this.items.push(this.singleProduct);


    this.storage.setItem("fav_items", JSON.stringify(this.items));
    this.msg = true;


  }

  returnProduct() {
    this.router.navigate(["../../products"]);
  }

}
