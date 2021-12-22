import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/backend/dashboard/model';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  p: Product = new Product()
  products:any;
  getMenuId:any;
  menuData:any;
  
  constructor(private ps : ProductService, private param:ActivatedRoute) { }

  ngOnInit(): void {
    // this.s.getAll().subscribe(res => {
    //   console.log(res);
    //   this.products = res;
    // }, err => {
    //   console.log(err);

    // })



    this.getMenuId = this.param.snapshot.paramMap.get('id');
    
    if(this.getMenuId)
    {
      this.menuData =  this.products.filter((value: { id: any; productName: any; price:any; imageUri:any})=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData,'menudata>>');
        
    }
  }

}
