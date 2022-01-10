import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { Cart } from './orderModel';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = new Cart();
  msg: boolean = false;
  submitted = false;
  pItems: any = [];
  constructor(private storage: LocalStorageService, private http: HttpClient) { }

  ngOnInit(): void {
    let strItems = this.storage.getItem('fav_items');
    if (strItems != null) {
      this.pItems = JSON.parse(strItems);
    }



  }

  saveOrder() {
    this.submitted = true;
    if (this.cart.name !== "" && this.cart.contact !== "" && this.cart.email !== "", this.cart.address !== "") {
      this.msg = true;

      const header = { 'content-Type': 'application/json' }
      this.http.post("http://localhost:8080/saveOrder", JSON.stringify(this.cart), { headers: header })
        .subscribe(data => {

          console.log(data)


        })


    }

  }


  removeItem(id: any) {
    this.pItems.splice(id, 1);

  }

}
