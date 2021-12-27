import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Category } from './category.model';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  ct: Category = new Category()
  msg: boolean = false;
  categoryItem : any;
  isSaved : boolean = false;
  

  submitted = false;
  constructor(private router: Router, private http: HttpClient, private cate: ProductService) { }

  ngOnInit(): void {
    this.cate.getAllCategory().subscribe(res => {
      console.log(res);
      this.categoryItem = res;
    }, err => {
      console.log(err);

    })

  }



  saveCategoryName() {
    this.submitted = true;


    if (this.ct.categoryName !== "") {
      this.msg = true;

      const header = { 'content-Type': 'application/json' }
      this.http.post("http://localhost:8080/saveCategory", JSON.stringify(this.ct), { headers: header })
        .subscribe(data => {

          console.log(data)


        })

      console.log("name : " + this.ct.categoryName);
    }


  }





  editRow(ct: any) {
    this.ct = ct;
    this.isSaved = false;
    console.log("edit");

  }



  update() {
    this.isSaved = true;
    const header = { 'content-Type': 'application/json' }
    this.http.put("http://localhost:8080/categoryUpdate", JSON.stringify(this.ct), { headers: header })
      .subscribe(data => {
        console.log(data)


      })
  }


  deleteRow(id: any) {
    console.log(id);
    this.http.delete("http://localhost:8080/deleteCategory/" + id,)
      .subscribe(data => {
        console.log(data)
        

      })
    console.log("delete===============");

  }





}
