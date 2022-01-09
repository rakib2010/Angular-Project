import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  pItems: any = [];
  constructor(private storage : LocalStorageService) { }

  ngOnInit(): void {
    let strItems = this.storage.getItem('fav_items');
    if(strItems != null){
      this.pItems = JSON.parse(strItems);
    }
   
   
   
  }


  removeItem(id: any){
    this.pItems.splice(id,1);

  }

}
