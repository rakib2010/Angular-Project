import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from './model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  p: Product = new Product()
  file: File | null = null;
  submitted = false;
  msg: boolean = false;
  products: any = [];
  categoryItem : any;

  
  constructor(private ps: ProductService, private http: HttpClient, private cate : ProductService) {

  }

  ngOnInit(): void {
    this.getAll();

    this.cate.getAllCategory().subscribe(res => {
      console.log(res);
      this.categoryItem = res;
     
      

    }, err => {
      console.log(err);

    })
  }



  handleFileInput(evnet: any) {
    console.log(evnet);

    this.file = evnet.target.files.item(0);
  }

  onSubmit() {
 console.log(this.p);

    if(this.p.productName !== '' && this.p.price !=='' && this.p.quantity !=='' && this.p.remarks !== '' ){
    
   
    
    
      if (this.ps.saveProduct(this.p, this.file)
      .subscribe(res => {

        console.log(res);

      }, err => {
        console.log(err);

      })) {
      this.submitted = true;
      this.msg = true;
    }

    

    }
  }
  
  

  getAll() {
    this.ps.getAll()
      .subscribe(res => {
        console.log(res);
        this.products = res;
      }, err => {
        console.log(err);

      })
  }

}
