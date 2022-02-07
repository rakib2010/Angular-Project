import { Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/service/product.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products : any;
  
  
  constructor(private s : ProductService) { }


  ngOnInit(): void {

  
    this.s.getAll().subscribe(res=>{
      this.products = res;
    })
  
    this.s.events$.forEach(searchText => {
      console.log(event)
      this.s.getProductsBySearch(searchText).subscribe(res => {
        console.log(res);
        this.products = res;
      
      }, err => {
        console.log(err);
  
      })
    
    });


    
  }

 

  


allClick(){  
  this.s.getAll().subscribe(res => {
    console.log(res);
    this.products = res;
  }, err => {
    console.log(err);

  })

  }


  mensClick(id: any){
    this.s.getProductsByCategoryId(1).subscribe(res => {
      console.log(res);
      this.products = res;
    }, err => {
      console.log(err);

    })

  }

  womensClick(id: any){
    this.s.getProductsByCategoryId(2).subscribe(res => {
      console.log(res);
      this.products = res;
    }, err => {
      console.log(err);

    })

  }

  deviceClick(id: any){
    this.s.getProductsByCategoryId(3).subscribe(res => {
      console.log(res);
      this.products = res;
    }, err => {
      console.log(err);

    })

  }

}

