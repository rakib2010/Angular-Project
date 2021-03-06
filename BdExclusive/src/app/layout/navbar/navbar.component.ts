import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ProductService } from 'src/app/service/product.service';
import { Products } from './productModel';




@Component({
  selector: 'app-navbar',
  
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pro: Products = new Products();
  productCount: any = [];
  product: any;

   
  
  
  
  constructor(private storage: LocalStorageService, private s: ProductService) { }

  ngOnInit(): void {

    this.s.countMessage$.subscribe(
      res => {
        console.log(res);
        
        this.productCount = res;

      }
    )


    
    

    // let strItems = this.storage.getItem('fav_items');
    // if(strItems != null){
    //   this.productCount = JSON.parse(strItems);
    // }
   

    
    
  }


  searchProduct(searchText:any){

    this.s.newEvent(searchText);

  }

  
  

}
