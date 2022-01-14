import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  msg1: boolean = false;
  submitted = false;
  pItems: any = [];
  constructor(private storage: LocalStorageService, private http: HttpClient, private router: Router) 
  { }

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


    }else{
      this.msg1 = true;
    }

  }


  removeItems(i: any){
    
    this.pItems.splice(i,1);

    this.storage.setItem("fav_items", JSON.stringify(this.pItems));

  }

  clearCart(pItems: any){
    this.pItems.splice(pItems)
    this.storage.setItem("fav_items", JSON.stringify(this.pItems));

  }

  returnProduct(){
    this.router.navigate(['../../products'])

  }




}
