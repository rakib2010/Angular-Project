import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // == Search keyword passing ==
  private _subject = new Subject<any>();

  newEvent(event: any) {
    this._subject.next(event);
  }

  get events$() {
    return this._subject.asObservable();
  }



  // == Add to cart Count message passing ==
  private _countSource = new Subject<any>();
  countMessage$ = this._countSource.asObservable();

  sendMessage(message: any) {
    this._countSource.next(message);
  }















  constructor(private http: HttpClient) { }

  saveProduct(data: any, file: any) {
    const formData: FormData = new FormData();
    formData.append('productName', data.productName);

    formData.append('quantity', data.quantity);
    formData.append('price', data.price);
    formData.append('remarks', data.remarks);
    formData.append('file', file);
    formData.append('categoryId', data.categoryId);

    return this.http.post('http://localhost:8080/product/save2', formData);




  }

  getAll() {
    let header = {
      "Content-Type": "application/json"
    };
    return this.http.get('http://localhost:8080/product/getAll', { headers: header });

  }

  getAllCategory() {
    let header = {
      "Content-Type": "application/json"
    };
    return this.http.get('http://localhost:8080/getAllCategory', { headers: header });

  }




  getOne(id: any) {
    let header = {
      "Content-Type": "application/json"
    };
    return this.http.get('http://localhost:8080/product/getOne/' + id, { headers: header });

  }

  getProductsByCategoryId(id: any) {
    let header = {
      "Content-Type": "application/json"
    };
    return this.http.get('http://localhost:8080/product/ByCategoryId/' + id, { headers: header });

  }

  getAllOrderList() {
    let header = {
      "Content-Type": "application/json"
    };
    return this.http.get('http://localhost:8080/getAllOrder', { headers: header });

  }

  getProductsBySearch(searchText: any) {
    let header = {
      "Content-Type": "application/json"
    };
    return this.http.get('http://localhost:8080/product/search/' + searchText, { headers: header });

  }



}