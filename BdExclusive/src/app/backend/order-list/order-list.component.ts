import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  ol: any;

  constructor(private ps: ProductService, private http:HttpClient) { }

  ngOnInit(): void {

    this.ps.getAllOrderList().subscribe(res => {
      console.log(res);
      this.ol = res;

    }, err => {
      console.log(err);

    })
  }

  deleteOrder(id: any){
    const header = { 'content-Type': 'application/json' }
    this.http.get("http://localhost:8080/deleteOrder/" + id,{ headers: header })
      .subscribe(data => {
    
      })

      
 
  }

  

  

}
