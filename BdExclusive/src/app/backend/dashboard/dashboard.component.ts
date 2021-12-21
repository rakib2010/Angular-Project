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
  
  constructor(private ps: ProductService) {

  }

  ngOnInit(): void {
    this.getAll();
  }



  handleFileInput(evnet: any) {
    console.log(evnet);

    this.file = evnet.target.files.item(0);
  }

  onSubmit() {
    if (this.ps.saveProduct(this.p, this.file)
      .subscribe(res => {

        console.log(res);

      }, err => {
        console.log(err);

      })) {
      this.submitted = true;
      this.msg = true;

    } else {

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
